require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss heavy enroll fringe thank'; 
let testAccounts = [
"0x8a42956eaffca88c9322a7d2ffb26aceb2f034b814bb5ed8c1bc11dda4bf64a4",
"0x5f50fbb471b989e5b68f93853261158dbf552738a5d232af6921fc805ce75c24",
"0xb859fb7fd40b762d19becaabdf9086509ebd2227a6b421df0db57d9adab7319b",
"0x7dbea7514b1baa318f91f4c5c6697ce6a4f599c848b979328804efda16e0e6a0",
"0xd5c56f5e7a105552d9f27ea006ec7f06166c1b7ba79a20d1233471936460ddfe",
"0x7f16484b259f9b56ce8173555d4023f75e75d9d3203d82e6557ddba6cbbceca6",
"0x4b0e2ddb0c76677e8138cb8a3bb8c718d106ca0179b7a5ae16e6b4c7b1125904",
"0x95c4b4783c6285d3b31419527d54a27dc447a6dc4638c610b8550e606b704007",
"0x433184d37801d9e232e022977ee46dda95eb7ea761de98ea053d2fd7ffd8c986",
"0x9404410b6c0e613597efdd5ba25e4bbbfdebe6ca2c23dfe69d1c2825e5cd6349"
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

