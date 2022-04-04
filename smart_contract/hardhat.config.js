require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/M-3XSaQ8Iqtmum5-9o57Zxabtwya0zSP',
      accounts: ['6ce22d7d15b09c1c4fea81aeeb1d97499afbd440d52b9dd0fa06baa8ec43ab61']
    }
  }
};
