const {
  generateWallet,
  restoreWallet,
  getQueryClient,
  getSigningClient,
  getSigningCosmWasmClient,
} = require("@sei-js/core");

const { calculateFee } = require("@cosmjs/stargate");

async function yes() {
  // 12 word mnemonic by default
  // const generatedWallet = await generateWallet();
  // console.log("generated mnemonic", generatedWallet.mnemonic);

  // or restore a wallet given a seed phrase
  const wallet = await restoreWallet(
    "olive scatter put display depend album tray fold sail pull tube certain"
  );
  const [acc] = await wallet.getAccounts();
  console.log(acc);

  let RPC_URL = "https://rpc.atlantic-2.seinetwork.io/";

  //const { offlineSigner } = await connect("keplr", "atlantic-2");
  const client = await getSigningClient(RPC_URL, wallet);

  const amount = [{ amount: "10", denom: "sei" }];
  const fee = {
    amount,
    gas: "100000",
  };

  const sendResponse = await client.sendTokens(
    acc.address,
    "sei1ucttvx068mmpph905uyf8c9rqhhjgp27wl2gh8",
    amount,
    fee
  );

  console.log(sendResponse);
}

yes();
