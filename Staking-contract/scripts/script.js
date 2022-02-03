
const hre = require("hardhat");
// hardhat.config.js



async function main() {
  

  // We get the contract to deploy
  const StakingToken = await hre.ethers.getContractFactory("stakingToken");
  console.log("depolying stacking token")
  const stakingToken = await StakingToken.deploy();

  await stakingToken.deployed();

  console.log("StakingToken deployed to:", stakingToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
