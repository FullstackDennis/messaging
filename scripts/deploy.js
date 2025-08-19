// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");

  // Deploy the contract with an initial message
  const simpleStorage = await SimpleStorage.deploy("Hello Core!");

  // Wait for deployment
  await simpleStorage.waitForDeployment();

  // Print contract address
  console.log("SimpleStorage deployed to:", await simpleStorage.getAddress());
}

// Run the deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
