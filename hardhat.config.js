require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "bf55d4b6e8e7ebcceb6953522bc284b9dc16a11f4d52f27e4df2e44ed566504b";

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/4182d9e2396442b9b0efeba08f60336f`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
