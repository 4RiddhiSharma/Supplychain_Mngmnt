const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "salad breeze exclude push item stick special help diary question mimic security";

module.exports = {
  networks: {
   development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*"
   },
   ropsten: {
       provider: function() { 
        return new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/2322cc22df2549b1a1c10ab16715d7f7");
       },
       network_id: 3,
       gas: 4500000,
       gasPrice: 10000000000,
   },
   live: {
    provider: function() { 
     return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/2322cc22df2549b1a1c10ab16715d7f7");
    },
    network_id: 1,
    gas: 7500000,
    gasPrice: 10000000000,
}
  }
 };