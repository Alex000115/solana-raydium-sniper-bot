const { Connection, Keypair, PublicKey } = require('@solana/web3.js');
const bs58 = require('bs58');
const config = require('./config');

const connection = new Connection(config.RPC_URL, {
    wsEndpoint: config.WSS_URL,
    commitment: 'confirmed'
});

const wallet = Keypair.fromSecretKey(bs58.decode(config.PRIVATE_KEY));

async function startSniper() {
    console.log("Sniper active. Monitoring Raydium for new pools...");

    // Subscribe to logs from the Raydium Liquidity Pool program
    connection.onLogs(
        new PublicKey(config.RAYDIUM_PUBLIC_KEY),
        async ({ logs, err, signature }) => {
            if (err) return;

            // Look for InitializePool instruction
            if (logs.some(log => log.includes("initialize2"))) {
                console.log(`New Pool Detected! Signature: ${signature}`);
                await executeBuy(signature);
            }
        },
        'confirmed'
    );
}

async function executeBuy(signature) {
    try {
        console.log("Attempting to execute buy order...");
        // In a real scenario, you would parse the transaction to get the 
        // Token Mint and use the Raydium SDK to build a swap transaction.
        console.log(`Order sent for signature: ${signature}`);
    } catch (e) {
        console.error("Buy failed:", e.message);
    }
}

startSniper();
