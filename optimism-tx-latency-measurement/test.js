const { Web3 } = require("web3");
const { Address } = require("@arbitrum/sdk");
const CoinGecko = require("coingecko-api");

async function test() {
  let rpc = "https://goerli.optimism.io";
  const provider = new Web3.providers.HttpProvider(rpc);
  const web3 = new Web3(provider);

  //let add = "0xAEFCE1c39615010c0C56c0939fB492585e54A7d5";
  //const account = web3.eth.accounts.create();
  // let priv = account.privateKey;
  const signer = web3.eth.accounts.privateKeyToAccount(
    "0xccbc7ef19b17de87ebada389ab291a36107d2d42664523d70d46050b7d32111f"
  );
  const balance = Number(await web3.eth.getBalance(signer.address)) * 10 ** -18; //in wei
  console.log(balance);
  console.log(signer.address);
}

test();

async function test2() {
  let rpc = "https://goerli-rollup.arbitrum.io/rpc";
  const provider = new Web3.providers.HttpProvider(rpc);
  const web3 = new Web3(provider);

  const signer = web3.eth.accounts.privateKeyToAccount(
    "0xccbc7ef19b17de87ebada389ab291a36107d2d42664523d70d46050b7d32111f"
  );

  const CoinGeckoClient = new CoinGecko();

  var ARBtoUSD;
  await CoinGeckoClient.simple
    .price({
      ids: ["arbitrum"],
      vs_currencies: ["usd"],
    })
    .then((response) => {
      ARBtoUSD = response.data["arbitrum"]["usd"];
      console.log("ARBtoUSD", ARBtoUSD);
    });

  let txFee = 0.0000021000000000000002;
  let txFeeUSD = txFee * ARBtoUSD;
  console.log(txFeeUSD);

  // var SUItoUSD;
  // await CoinGeckoClient.simple
  //   .price({
  //     ids: ["arbitrum"],
  //     vs_currencies: ["usd"],
  //   })
  //   .then((response) => {
  //     SUItoUSD = response.data["arbitrum"]["usd"];
  //     console.log("SUItoUSD", SUItoUSD);
  //   });
}
