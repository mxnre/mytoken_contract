const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
  
    const Secmytoken = await ethers.getContractFactory("SecMytoken");
    const secmytoken = await Secmytoken.deploy();
    
  
    console.log("Token address:", secmytoken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });