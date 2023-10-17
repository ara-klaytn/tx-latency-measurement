const fs = require('fs');
const AWS = require('aws-sdk');
const parquet = require('parquetjs-lite');
const axios = require("axios");
const moment = require('moment');
const { TransferTransaction, Client, AccountBalanceQuery, NetworkVersionInfoQuery, Status } = require ("@hashgraph/sdk");
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const {Storage} = require('@google-cloud/storage');
require('dotenv').config();

//Build your Hedera client: https://docs.hedera.com/guides/docs/sdks/client
const client = process.env.NETWORK === "mainnet" ? Client.forMainnet() : Client.forTestnet(); 




async function main(){

    client.setOperator(process.env.ACCOUNT_ID, process.env.PRIVATE_KEY);

    //Create the account balance query
    const query = new AccountBalanceQuery()
        .setAccountId(client.operatorAccountId);

    //Submit the query to a Hedera network
    const accountBalance = await query.execute(client);

    //Print the balance of hbars
    console.log("The hbar account balance for this account is " +accountBalance.hbars);

//v2.0.7


}

main();

//v2.0.5