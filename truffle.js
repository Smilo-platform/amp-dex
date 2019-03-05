// Allows us to use ES6 in our migrations and tests.
require('babel-register');

// Allows us to use ES6 in our migrations and tests.
require('dotenv').config();
var config = require('./config');
var secret = require('./secret-config');
const fs = require('fs');
const WalletProvider = require('truffle-wallet-provider');
const EthereumWallet = require('ethereumjs-wallet');

require('babel-register');
require('babel-polyfill');

var credentialsEnabled = process.env.CREDENTIALS;

let providers = {
    'ethereum': {},
    'rinkeby': {},
};

if (credentialsEnabled) {
    const ethereumKeystore = fs.readFileSync(secret.ethereum.keystore).toString();
    const rinkebyKeystore = fs.readFileSync(secret.rinkeby.keystore).toString();
    const ethereumWallet = EthereumWallet.fromV3(ethereumKeystore, secret.ethereum.password, true)
    const rinkebyWallet = EthereumWallet.fromV3(rinkebyKeystore, secret.rinkeby.password)

    providers = {
        'ethereum': new WalletProvider(ethereumWallet, config.infura.ethereum),
        'rinkeby': new WalletProvider(rinkebyWallet, config.infura.rinkeby)
    }
}

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '1000',
            gas: config.constants.MAX_GAS,
            gasPrice: 1,
            from: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47'  // testprc main account here
        },
        development_geth: {
            host: 'localhost',
            port: 8545,
            network_id: '8888',
            gas: config.constants.MAX_GAS,
            gasPrice: config.constants.DEFAULT_GAS_PRICE,
            from: '0xe8e84ee367bc63ddb38d3d01bccef106c194dc47'
        },
        ethereum: {
            provider: providers.ethereum,
            network_id: '1',
            gas: config.constants.MAX_GAS,
            gasPrice: config.constants.DEFAULT_GAS_PRICE
        },
        rinkeby: {
            provider: providers.rinkeby,
            gas: config.constants.MAX_GAS,
            gasPrice: config.constants.DEFAULT_GAS_PRICE,
            network_id: '4'
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01
        },
        // Another network with more advanced options...
        localhost: {
            host: "localhost",     // Localhost (default: none)
            port: 22000,            // Standard Ethereum port (default: none)
            network_id: "10",       // Any network (default: none)
            gas: 4712387,
            gasPrice: 10000000,  // 20 gwei (in wei) (default: 1 gwei)
            // from: ""        // Account to send txs from (default: accounts[0])
        },
        // Another network with more advanced options...
        smilotestnet: {
            host: "smilotestnethere",     // Localhost (default: none)
            port: 22000,            // Standard Ethereum port (default: none)
            network_id: "10",       // Any network (default: none)
            gas: 4712387,
            gasPrice: 10000000,  // 20 gwei (in wei) (default: 1 gwei)
            // from: ""        // Account to send txs from (default: accounts[0])
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }

}
