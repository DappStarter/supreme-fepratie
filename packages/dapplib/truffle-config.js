require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note office puppy include arm bottom slogan'; 
let testAccounts = [
"0x245bc993546afe89e68c7238a908517bf5c05b2cf4421d12c2d6c5450a9bacc3",
"0x0b5894e0ce73a84b2ad8c660f5f75f763f2fe52aaee28e7b1009d05848ee47b6",
"0xb1af269dbd8c8f28d8153768058a1458697f525dcbd626b53b25e863f6376dc7",
"0x6f779ed29b0ee68313070aed840d702ac9779d7f1745bca1a43f6f547f882c38",
"0xc2d834ddfe6c5e8c86019c93f0d6919dad9343f0926f821bb9379d1e3f04df71",
"0x973bcf9423fe989a20bd576ac05eb45ee96bb158dc4169dc3aa34beea6ecbe1e",
"0xce6c3e864e21be5c60087096e751d46ba23731096c166f5d637eaf1bcb5dda7d",
"0x6796fe64bf33376e7a05486fd2d4bbaf491b3bf83e5fb4770aadbc74e2a89147",
"0x61a43dd05ec99dc33da83ccb642ae509bd9c3f372f1739db951e2f3d4490ee59",
"0xd5dbe64477cb4511d69b97d86eceeb45c7b559c83da7797ea5301bc9d193146a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

