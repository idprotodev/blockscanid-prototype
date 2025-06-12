# BlockscanID Token (BID)

> 🧪 A functional prototype for identity-token UX exploration using the ENS domain `blockscanid.eth`.

---

## 🔍 Overview

**BlockscanID Token (BID)** is an experimental ERC-20 token and identity UX demo built around the ENS name `blockscanid.eth`.  
It explores wallet-binding, identity resolution, and token-claim interactions for potential use within the Blockscan / Etherscan ecosystem or other on-chain identity systems.

This is a complete proof-of-concept (PoC), combining:
- ERC-20 smart contract (`BlockscanIDToken.sol`)
- React-based UI with ENS name lookup
- ENS-based identity resolution (`you.blockscanid.eth`)
- Token claim simulation

---

## 💡 Use Case Highlights

1. **Verified Wallet–ENS Linking**  
   Bind a wallet to an identity like `alice.blockscanid.eth` and simulate ownership confirmation.

2. **On-chain Attestation Anchors**  
   Use the token as a placeholder for zk attestations, credentials, or delegation structures.

3. **ENS-integrated Login UX**  
   A lightweight UX flow for login and identity confirmation via ENS and MetaMask.

4. **Session Identity Tokens**  
   Mock short-term token issuance tied to ENS ID — applicable to delegation, dApp sessions, or voting layers.

---

## 🧪 Live Demo & Identity Domain

- 🔗 ENS: [`blockscanid.eth`](https://app.ens.domains/name/blockscanid.eth)
- 💻 Demo UI: [https://blockscanid-ui.netlify.app](https://blockscanid-ui.netlify.app)
- 🧬 GitHub: [github.com/your-org/blockscanid-prototype](https://github.com/your-org/blockscanid-prototype)

> ✅ This prototype is fully tied to the ENS domain `blockscanid.eth`.  
> Ownership of this ENS name is essential to fully replicate or deploy the same UX flow.  
> The ENS text records include contact, GitHub, and demo links for verification.

---

## 🛠 Tech Stack

| Layer         | Tech                     |
|---------------|--------------------------|
| Smart Contract | Solidity (ERC-20, OpenZeppelin) |
| Frontend       | React + TailwindCSS + Ethers.js |
| Hosting        | Netlify (connected via ENS) |
| ENS Support    | Forward + Reverse Resolution |

---

## ⚙️ Local Development

```bash
npm install
npm run dev
