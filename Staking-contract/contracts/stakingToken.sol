//SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract stakingToken is ERC20 {
    address public admin;

constructor() public ERC20("RewardToken", "RTK") {
    _mint(msg.sender, 1000*10**18);
    admin == msg.sender;
       
    }

function mint ( address _to, uint _amount) public {
    require(msg.sender == admin, "only admin");
    _mint(_to, _amount);

}

function burn ( uint amount) external {
    _burn(msg.sender, amount);
}

}