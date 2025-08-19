# Lock Smart Contract

This project contains a simple Ethereum smart contract called `Lock`. The contract allows you to lock funds until a specified unlock time. Only the owner (deployer) can withdraw the funds after the unlock time has passed.

## Features

- Lock funds until a future timestamp
- Only the contract owner can withdraw
- Emits a `Withdrawal` event on successful withdrawal

## Deployment

To deploy the contract, use Hardhat or your preferred Ethereum development environment.

### Example Deployment (Hardhat)

```bash
npx hardhat run scripts/deploy.js --network <network>
```

## Contract Address

> **Deployed Wallet Address:**  
> `0x85187cB7a980b3B00759a3299D80B77b96d19406`  


## Usage

- Call the `withdraw()` function after the unlock time to retrieve the locked funds.

## License

SPDX-License-Identifier: UNLICENSED
