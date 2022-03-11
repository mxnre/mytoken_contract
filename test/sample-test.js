const { expect } = require("chai");
const { ethers } = require("hardhat");

const setup = async () => {
  const[owner, addr] = await ethers.getSigners();
  const Mytoken = await ethers.getContractFactory("Mytoken");
  const mytoken = await Mytoken.deploy();
  const Secondcontract = await ethers.getContractFactory("SecMytoken")
  const secondcontract = await Secondcontract.deploy();
  return {owner, addr, mytoken, secondcontract} ;
}



describe("MyToken", function () {

  let  owner, addr, mytoken, secondcontract;
  
  before(async()=>{
    ({owner, addr, mytoken, secondcontract} = await setup());
  })

  it("Deployment should assign the total suppply of tokens to the owner", async function () {
    await secondcontract.set(mytoken.address);
    secondcontract.mint(addr.address, ethers.utils.parseEther('50'));
    const addrbalance = await mytoken.balanceOf(addr.address);
    expect(await mytoken.totalSupply()).to. equal(addrbalance);
  
  });
});
