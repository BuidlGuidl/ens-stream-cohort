pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract ENSContract {
	function setName(string memory newName) public {
		//do something
	}
}

// ERRORS
error ARRAY_LENGTH_MISMATCH();
error NO_ACTIVE_STREAM();
error NOT_ENOUGH_FUNDS();
error TRANSFER_FAILED();

contract YourContract is Ownable {

    ENSContract public immutable ensContract = ENSContract(0xa58E81fe9b61B5c3fE2AFD33CF304c454AbFc7Cb);

    function setName(string memory newName) public onlyOwner {
		ensContract.setName(newName);
	}

    struct BuilderStreamInfo {
        uint256 cap;
        uint256 last;
    }
    mapping(address => BuilderStreamInfo) public streamedBuilders;

    uint256 public constant frequency = 2592000; // 30 days

    event Withdraw(address indexed to, uint256 amount, string reason);
    event AddBuilder(address indexed to, uint256 amount);
    event UpdateBuilder(address indexed to, uint256 amount);

    struct BuilderData {
        address builderAddress;
        uint256 cap;
        uint256 unlockedAmount;
    }

    function allBuildersData(address[] calldata _builders) public view returns (BuilderData[] memory) {
        uint256 _length = _builders.length;
        BuilderData[] memory result = new BuilderData[](_length);
        for (uint256 i; i < _length;) {
            address builderAddress = _builders[i];
            BuilderStreamInfo storage builderStream = streamedBuilders[builderAddress];
            result[i] = BuilderData(builderAddress, builderStream.cap, unlockedBuilderAmount(builderAddress));
            unchecked {
                ++i;
            }
        }
        return result;
    }

    function unlockedBuilderAmount(address _builder) public view returns (uint256) {
        BuilderStreamInfo memory builderStream = streamedBuilders[_builder];
        if (builderStream.cap == 0) revert NO_ACTIVE_STREAM();

        if (block.timestamp - builderStream.last > frequency) {
            return builderStream.cap;
        }

        return (builderStream.cap * (block.timestamp - builderStream.last)) / frequency;
    }

    function addBuilderStream(address payable _builder, uint256 _cap) public onlyOwner {
        streamedBuilders[_builder] = BuilderStreamInfo(_cap, block.timestamp - frequency);
        emit AddBuilder(_builder, _cap);
    }

    function addBatch(address[] calldata _builders, uint256[] calldata _caps) public onlyOwner {
        if (_builders.length != _caps.length) revert ARRAY_LENGTH_MISMATCH();
        for (uint256 i; i < _builders.length;) {
            addBuilderStream(payable(_builders[i]), _caps[i]);
            unchecked {
                ++i;
            }
        }
    }

    function updateBuilderStreamCap(address payable _builder, uint256 _cap) public onlyOwner {
        BuilderStreamInfo memory builderStream = streamedBuilders[_builder];
        if (builderStream.cap == 0) revert NO_ACTIVE_STREAM();
        streamedBuilders[_builder].cap = _cap;
        emit UpdateBuilder(_builder, _cap);
    }

    function streamWithdraw(uint256 _amount, string memory _reason) public {
        if (address(this).balance < _amount) revert NOT_ENOUGH_FUNDS();
        BuilderStreamInfo storage builderStream = streamedBuilders[msg.sender];

        if (builderStream.cap == 0) revert NO_ACTIVE_STREAM();

        uint256 totalAmountCanWithdraw = unlockedBuilderAmount(msg.sender);
        if (totalAmountCanWithdraw < _amount) revert NOT_ENOUGH_FUNDS();

        uint256 cappedLast = block.timestamp - frequency;
        if (builderStream.last < cappedLast){
            builderStream.last = cappedLast;
        }

        builderStream.last = builderStream.last + ((block.timestamp - builderStream.last) * _amount / totalAmountCanWithdraw);

        (bool sent,) = msg.sender.call{value: _amount}("");
        if (!sent) revert TRANSFER_FAILED();

        emit Withdraw(msg.sender, _amount, _reason);
    }

    // to support receiving ETH by default
    receive() external payable {}
}