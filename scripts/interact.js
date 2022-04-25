const { ethers } = require("hardhat");

const API_KEY = `tO0SfnkMfAX0nQYBwpIgDSsS3eDPhXCr`; //get from alchemy
const CONTRACT_ADDRESS = `0x07F48BB7c696e6e67E8c33b98691240B98A0b6BC`; //deployed contract address
const PRIVATE_KEY = `7c49b37b8c239be9507d5fb7c97e060b1d8a809aae6a6266f13ba28f75733a64`; //metamask

const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {

    const message = await helloWorldContract.message();
    console.log("the message is "+ message);

    const tx = await helloWorldContract.update("Good Bye, World!");
    await tx.wait();

    const nmessage = await helloWorldContract.message();
    console.log("the new message is "+ nmessage);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});