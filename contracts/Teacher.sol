//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IScore.sol";

contract Teacher {
    address private scoreAddress;

    constructor(address _scoreAddress) {
        scoreAddress = _scoreAddress;
    }

    function setScore(string memory name,uint8 score) public {
        IScore(scoreAddress).saveScore(name,score); 
    }
}
