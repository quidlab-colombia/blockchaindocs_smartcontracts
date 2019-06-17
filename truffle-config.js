/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic         = process.env.mnemonic
const apikey           = process.env.apikey

  module.exports = {
  compilers: {
     solc: {
       version: "0.4.24" // A version or constraint - Ex. "^0.5.0"
                          // Can also be set to "native" to use a native solc
     }
   },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: 1
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${apikey}`),
      network_id: 3,
      gas: 4000000
    },
    rsk: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co/'),
      gas : 2500000,
      gasPrice : 1,
      port: 4444,
      network_id: 2
    }
  }


 }
