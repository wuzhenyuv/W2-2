// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

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
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
