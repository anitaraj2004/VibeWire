const verbwire = require("verbwire")(process.env.VERBWIRE_API_KEY);
const fs = require('fs');



async function mintSimpleContractNFT(walletAddress) {

    let mintParams = {
        filePath: fs.createReadStream("./assets/VibeWireNFT.png"), *****
        name: "NFT_name",
        description: "yourDescription",
        // Define your metadata below or remove it entirely for no metadata
        data: "[{\"owner\":\"bid_history\",\"value_price\":\"inflation\"},{\"amount\":\"volume\",\"art_series\":\"transcation_coin_type\"}]",
        contractAddress: process.env.CONTRACT_ADDRESS,
        chain: process.env.CHAIN,

    }

    if (walletaddress) = ne
