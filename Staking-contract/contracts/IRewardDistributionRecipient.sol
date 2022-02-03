pragma solidity ^0.5.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";


contract IRewardDistributionRecipient is Ownable {
    address public rewardDistribution;
     mapping(address => bool) newAdmin;
   
    

    function notifyRewardAmount(uint256 reward) external;

    modifier onlyRewardDistribution() {
        require( newAdmin[_msgSender()] == true, "Caller is not reward distribution");
        
        _;
    }


    function setRewardDistribution(address _rewardDistribution)
        external
        onlyOwner
    {
        require (newAdmin[  _rewardDistribution] = false, "Address is has been added");  
        rewardDistribution = _rewardDistribution;
         
         newAdmin [rewardDistribution] = true; 
    }
}
    