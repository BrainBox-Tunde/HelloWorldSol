/**
     * @type import('hardhat/config').HardhatUserConfig
     */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require('@nomiclabs/hardhat-ethers');
// const {API_URL_KEY, PRIVATE_KEY} = process.env; //environment variables are being loaded here.
 module.exports = {
   solidity: "0.7.3",
   defaultNetwork: 'rinkeby',
   networks: {
     hardhat: {},
     rinkeby: {
         url: "https://eth-rinkeby.alchemyapi.io/v2/tO0SfnkMfAX0nQYBwpIgDSsS3eDPhXCr",
         accounts: [`7c49b37b8c239be9507d5fb7c97e060b1d8a809aae6a6266f13ba28f75733a64`]
     }
   }
 };