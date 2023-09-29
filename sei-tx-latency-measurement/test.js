const { generateWallet, restoreWallet, getQueryClient, } = require("@sei-js/core");

async function yes(){

// 12 word mnemonic by default
const generatedWallet = await generateWallet();
//console.log('generated mnemonic', generatedWallet.mnemonic);

// or restore a wallet given a seed phrase
const restoredWallet = await restoreWallet("seven sample green convince fire utility filter noise venture off stock title");

const acc = await restoredWallet.getAccounts()
const pubAdd = acc[0].address
console.log(pubAdd);


 const queryClient = await getQueryClient("https://rpc.atlantic-2.seinetwork.io/").catch((err) => {
    console.log(err);
  return null;
}
);
 const balance =  await queryClient.cosmos.bank.v1beta1.allBalances(pubAdd).catch((err) => {
    console.log(err);
    return null;
}
);
console.log(balance);
}

yes()