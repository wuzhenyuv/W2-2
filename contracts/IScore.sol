//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IScore {
     
    function saveScore(string memory name,uint8 score) external;
    
}
