
const hre = require("hardhat");
// hardhat.config.js



async function main() {
  

  // We get the contract to deploy
  const Unipool = await hre.ethers.getContractFactory("Unipool");
  const unipool = await Unipool.deploy();

  await unipool.deployed();

  console.log("Unipool deployed to:", unipool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
