require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY; 
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: "0.8.9",
    networks: {
        sepolia: {
            url: `https://shape-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
            accounts: [PRIVATE_KEY],
        },
    },
};
