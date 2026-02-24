# Solana Raydium Sniper Bot

An automated trading tool designed to detect and trade new token launches on Solana via the Raydium Protocol. This bot utilizes a high-speed connection to the Solana network to identify "InitializePool" instructions in real-time.

## Features
* **Real-time Monitoring:** Listens to logs from the Raydium Liquidity Pool program (675k1q2wpjYhhPsCm2eVqS9uBn6zUnY7316AasN9x89M).
* **Automated Buying:** Instantly sends a swap transaction when a target pool is detected.
* **Slippage Control:** Configurable slippage to ensure orders are filled even during high volatility.
* **Safety Filters:** Logic to check for "Mint Authority" and "Freeze Authority" to avoid common rug pulls.

## Prerequisites
* Node.js (v18+)
* A high-performance Solana RPC (Private RPC recommended for speed).
* A Solana wallet with SOL for buying and gas.

## Quick Start
1. `npm install`
2. Update `config.js` with your Private Key and RPC endpoint.
3. Run the bot: `node sniper.js`
