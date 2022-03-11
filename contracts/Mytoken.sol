//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Mytoken is Ownable, ERC20 {
    
    constructor() ERC20("MYTOken", "MTK") {}
    
    function mint (address account, uint256 amount) external  {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external  {
        _burn(account, amount);
    }
}