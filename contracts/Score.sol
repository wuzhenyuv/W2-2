//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Score {
    address private owner;
    address private teacherAddress;
    mapping(string => uint8) public studentScores;
    event SaveScore(string indexed name,uint8 score); 

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner,"Only owner can call this function.");
        _; 
    }

    modifier onlyTeacher {
        require(msg.sender == teacherAddress,"Only teacher can save the score");
        _; 
    }

    function saveScore(string memory name,uint8 score) public onlyTeacher{
        console.log(name," score is ", score);
        require(score <= 100,"the score can not exceed 100");
        studentScores[name] = score;
        emit SaveScore(name,score);
    }

    function setTeacher(address teacher) public onlyOwner{
        console.log("Changing teacherAddress to ", teacherAddress);
        teacherAddress = teacher;
    }
}
