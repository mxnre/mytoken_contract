
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./Mytoken.sol";

contract SecMytoken  {

    address _mytokenaddress;
    
    function mint(address account , uint256 amount) public  {
        require(_mytokenaddress != address(0),'Invalid mytoken address');
        Mytoken mytoken = Mytoken(_mytokenaddress);
        mytoken.mint(account, amount);
    }
    function set(address account) public {
        _mytokenaddress = account;
    }

}
