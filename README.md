# Decentralized File Storage DApp

A full-stack Web3 application to upload files to IPFS and permanently record file references on the Ethereum blockchain. Each upload stores the IPFS hash, uploader wallet address, and timestamp on-chain — creating a tamper-proof, user-specific file history.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| Blockchain | Solidity, Ethereum Sepolia Testnet |
| Decentralized Storage | IPFS via Pinata |
| Wallet & Auth | MetaMask |

---

## How It Works

```
User selects file
      ↓
Frontend sends file to Node.js backend
      ↓
Backend uploads to IPFS via Pinata API → returns CID (content hash)
      ↓
Frontend calls smart contract via MetaMask
      ↓
Smart contract stores [CID + wallet address + timestamp] on Sepolia
      ↓
UI fetches and displays user's full on-chain file history
```

---

## Key Features

- **IPFS Upload** — Files stored on decentralized storage, not a central server
- **On-chain Metadata** — CID, uploader address, and timestamp permanently recorded on Ethereum
- **MetaMask Auth** — Wallet-based user identification, no passwords
- **User File History** — Each user sees only their own uploads, retrieved directly from blockchain
- **Secure Backend** — API keys handled server-side, never exposed to frontend
- **Sepolia Testnet** — Live deployment, verifiable on Etherscan

---

## Smart Contract

- **Network:** Ethereum Sepolia Testnet  
- **Contract Address:** `0x51b252dC4Cf0EF7b8e1540E74204C5a68AEb1800`  
- **Verify on Etherscan:** [View Contract](https://sepolia.etherscan.io/address/0x51b252dC4Cf0EF7b8e1540E74204C5a68AEb1800)

---

## Project Structure

```
/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── backend/
│   ├── server.js
│   └── package.json
└── contracts/
    └── FileStorage.sol
```

---

## Run Locally

### Prerequisites
- Node.js installed
- MetaMask browser extension
- MetaMask connected to Sepolia testnet
- Pinata account (for IPFS API keys)

### 1. Clone the repo

```bash
git clone https://github.com/nivas2104-hue/decentralized-file-storage-dapp
cd decentralized-file-storage
```

### 2. Configure environment

In `/backend`, create a `.env` file:

```env
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_KEY=your_pinata_secret_key
PORT=3000
```

> Note: API keys are currently handled in backend code. Moving them to `.env` is recommended before any production use.

### 3. Start the backend

```bash
cd backend
npm install
node server.js
```

### 4. Open the frontend

Open `frontend/index.html` directly in your browser or serve it:

```bash
npx serve frontend
```

### 5. Connect MetaMask

- Switch MetaMask to **Sepolia Testnet**
- Get test ETH from [Sepolia Faucet](https://sepoliafaucet.com)
- Connect wallet when prompted by the app

---
