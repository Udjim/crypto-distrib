/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");


const CUSTOM_RPC_URL = process.env.CUSTOM_RPC_URL || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        custom: {
            url: CUSTOM_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
            gasPrice: 1000000000,
        },
        bnb: {
           url: CUSTOM_RPC_URL,
           accounts: [PRIVATE_KEY],
           gasPrice: 1000000000,
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
            },
            {
                version: "0.8.4",
            },
            {
                version: "0.8.0",
            },{
                version: "0.6.0",
            },{
                version: "0.8.20",
            },
        ],
        settings: {
           optimizer: {
             runs: 200,
             enabled: true
           }
         }
    },
    mocha: {
        timeout: 100000,
    },

    gasReporter: {
       enabled: false
   },
};
