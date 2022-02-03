
// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require('@nahmii/hardhat-nvm')



module.exports = {
  solidity: "0.7.6",
  networks: {
    nahmii: {
      url: 'https://l2.testnet.nahmii.io/',
      accounts: { mnemonic: 'village focus wreck artwork oak labor hire security gospel flee cricket foam' },
      gasPrice: 15000000,
      nvm: true
    }
  },
 
};
