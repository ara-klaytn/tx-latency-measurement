const nearAPI = require("near-api-js");
const { keyStores, KeyPair } = nearAPI;
const { connect } = nearAPI;

async function main(){
const myKeyStore = new keyStores.InMemoryKeyStore();
const PRIVATE_KEY =
  "ed25519:4G3MrDxUKt6CMgf7KSXNDddRh7mdAGHPWivcwjMg7aQWK7ygJwcXPB3PvobmZ5rbwhVrtuZD6wiYPKqUrS2E5frU";
// creates a public / private key pair using the provided private key
const keyPair = KeyPair.fromString(PRIVATE_KEY);

const publicKey2 = keyPair.getPublicKey()
console.log('dfdf',publicKey2.toString())

// adds the keyPair you created to keyStore
await myKeyStore.setKey("testnet", "aratest.testnet", keyPair);
const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store 
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };
  const nearConnection = await connect(connectionConfig);
  const account = await nearConnection.account("aratest.testnet")

  const response = await nearConnection.connection.provider.block({
    finality: "final",
  });

  console.log(response)
}

main()

USE THIS 
USE THIS 
USE THIS  
USE THIS 
USE THIS 
https://docs.near.org/api/rpc/setup
https://docs.near.org/api/rpc/setup
https://docs.near.org/api/rpc/setup
https://docs.near.org/api/rpc/setup
https://docs.near.org/api/rpc/setup
