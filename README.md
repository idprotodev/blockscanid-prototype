
# BlockscanID Token (BID)

> 🧪 A functional prototype for identity-token UX exploration in the Blockscan ecosystem.

---

## 🔍 Overview

**BlockscanID Token (BID)** is a non-official, experimental ERC-20 token designed to explore user identity mapping, wallet binding, and ENS resolution mechanics within the Blockscan ecosystem.

This prototype is intended as a proof-of-concept (PoC) and showcases a basic UI + token + ENS setup that simulates how an identity layer might work on L2 networks powered by Blockscan tools.

---

## 💡 Potential Use Cases

1. **Verified Account Linking**  
   Associate a user's wallet address with a specific ENS-based ID (e.g., `alice.blockscanid.eth`).

2. **On-Chain Attestation Anchor**  
   Use the token as a mock anchor for zero-knowledge attestation, future credentials, or account recovery.

3. **ENS-Integrated Wallet UI**  
   Offer wallet-based login & token claim UX that feels intuitive, fast, and verifiable across apps.

4. **Delegation or Session Identity Tokens**  
   Enable temporary or delegated identities for specific use-cases in dapps that integrate Blockscan or Etherscan APIs.

---

## 🚀 Live Demo

- ENS: [`blockscanid.eth`](https://app.ens.domains/name/blockscanid.eth)
- Demo UI: [https://blockscanid-ui.netlify.app](https://blockscanid-ui.netlify.app)
- GitHub: [github.com/your-org/blockscanid-prototype](https://github.com/your-org/blockscanid-prototype)

> 🛠 ENS `text-record` is configured to point to this GitHub repository.

---

## 🛠 Tech Stack

| Layer         | Tech                |
|---------------|---------------------|
| Smart Contract | ERC-20 (OpenZeppelin) |
| Frontend       | React + TailwindCSS + Ethers.js |
| Hosting        | Netlify (ENS subdomain optional) |
| ENS Support    | Reverse resolution + Record mapping |

---

## 📦 Quick Start (Dev)

```bash
cd ui
npm install
npm run dev
```

Contract deploy via Remix or Hardhat (`contracts/BlockscanIDToken.sol`).

---

## 📩 Contact

If you are part of the **Blockscan**, **Etherscan**, or affiliated identity protocols team and wish to discuss potential acquisition or collaborative usage of `blockscanid.eth`, feel free to reach out via the contact listed in the ENS record.

Alternatively, GitHub issues or pull requests are welcome for iteration.

---

## ⚠️ Disclaimer

This project is not affiliated with Blockscan or any related companies. It is provided as an open exploration artifact under MIT license.

---


---

> ⚠️ This is a front-end-only PoC. Wallet interactions are handled directly by MetaMask. No user credentials or private information are collected or processed.
