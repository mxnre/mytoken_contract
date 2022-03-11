const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
  
    const Mytoken = await ethers.getContractFactory("Mytoken");
    const mytoken = await Mytoken.deploy();
    
  
    console.log("Token address:", mytoken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });