const { getAddress } = require("ethers/lib/utils");

const formatAddress = (walletAddress) => {
  return getAddress(walletAddress);
};

module.exports = { formatAddress };
