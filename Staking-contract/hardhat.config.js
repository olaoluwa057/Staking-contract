
// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require('@nahmii/hardhat-nvm');
// hardhat.config.js
require('@openzeppelin/hardhat-upgrades');




// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
    
    
 solidity: {
     
    compilers: [
      {
        version: "0.7.6",
      },
      {
        version: "0.5.0",
        settings: {},
      },
       {
        version: "0.5.12",
        settings: {},
      },
         {
        version: "0.8.10",
        settings: {}
      },
    ],
    
    
    
   
  },


  networks: {
    nahmii: {
      url: 'https://l2.testnet.nahmii.io/',
      accounts:  { mnemonic: 'village focus wreck artwork oak labor hire security gospel flee cricket foam' },
      gasPrice: 15000000,
      nvm: true
    }
  },
   ovm: {
        solcVersion: '0.5.16',
        
    },
  
};
