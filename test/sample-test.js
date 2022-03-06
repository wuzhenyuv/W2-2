const { expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {
 
  //部署Score合约
  const Score = await ethers.getContractFactory("Score");
  const score = await Score.deploy();
  await score.deployed();
  console.log("score deployed to the address:",score.address); 

  //部署Teacher合约
  const Teacher = await ethers.getContractFactory("Teacher");
  const teacher = await Teacher.deploy(score.address);
  await teacher.deployed();
  console.log("teacher deployed to the address:",teacher.address);

  //设置teacher合约调用score合约的权限
  await score.setTeacher(teacher.address);

  //teacher合约调用添加分数的方法
  await teacher.setScore("张三",98);
  const fen = await score.studentScores("张三");
  console.log("张三的分数是:",fen);
  console.log("success!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
