const ethers = require("ethers");
require("dotenv").config();
const checkBalanceMoreThanThreshold = async (address, threshold = 0.07) => {
  try {
    // Connect to Ethereum provider
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.INFURA_API
    );

    // Get balance in Wei
    const balanceWei = await provider.getBalance(address);

    // Convert balance to Ether
    const balanceEth = parseFloat(ethers.utils.formatEther(balanceWei));

    // Compare with threshold
    return balanceEth > threshold;
  } catch (error) {
    console.error("Error checking balance:", error);
    return false;
  }
};

module.exports = { checkBalanceMoreThanThreshold };
