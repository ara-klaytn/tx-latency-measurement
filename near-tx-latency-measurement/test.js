const nearAPI = require("near-api-js");
const { keyStores, KeyPair } = nearAPI;
const { connect } = nearAPI;

const sha256 = require('js-sha256');
const AWS = require('aws-sdk');
const parquet = require('parquetjs-lite');
const moment = require('moment');
const axios = require('axios');
const CoinGecko = require('coingecko-api');
const fs = require('fs');
const CoinGeckoClient = new CoinGecko();
const {Storage} = require('@google-cloud/storage');

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
  
  

// await account.sendMoney(
//   "aratest.testnet", // receiver account
//   "0" // amount in yoctoNEAR
// );

// gets account balance
// const te = await account.getAccountBalance();
// const neww = te.available* (10**(-24))
// console.log(neww)

// gets account details in terms of authorized apps and transactions
const accessKey = await account.getAccessKeys();
const publicKey = accessKey[0].public_key;

//check for access key permission
const permission =  await account.getAccessKeys();
//console.log(permission[0].access_key.permission)
const one = accessKey[0].access_key.nonce

//nonce

}


main()