
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function BlockscanIDApp() {
  const [account, setAccount] = useState(null);
  const [ensName, setEnsName] = useState(null);
  const [claimed, setClaimed] = useState(false);
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const userAddress = accounts[0];
        setAccount(userAddress);

        const ens = await provider.lookupAddress(userAddress);
        setEnsName(ens || null);
      } else {
        setStatus("MetaMask not found");
      }
    } catch (error) {
      setStatus("Connection failed");
    }
  };

  const handleClaim = () => {
    // This is a mock action
    setClaimed(true);
    setStatus("✅ BID token claimed successfully (simulated)");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center p-10">
      <h1 className="text-3xl font-bold mb-6">BlockscanID Token Demo</h1>

      {!account ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-green-700 font-semibold">Wallet Connected: {account}</p>

          {ensName ? (
            <p className="text-lg text-gray-800">
              🪪 Your Blockscan ID: <strong>{ensName}</strong>
            </p>
          ) : (
            <p className="text-gray-600 italic">
              Your Blockscan ID will look like: <strong>you.blockscanid.eth</strong>
            </p>
          )}

          {claimed ? (
            <p className="text-blue-700 font-semibold">
              ✅ Token claimed for <strong>{ensName || "your.blockscanid.eth"}</strong>!
            </p>
          ) : (
            <button
              onClick={handleClaim}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Claim BID Token
            </button>
          )}

          <p className="text-sm text-gray-500">
            Powered by ENS — requires ownership of <strong>blockscanid.eth</strong>
          </p>

          {status && <p className="text-sm text-gray-600 italic">{status}</p>}
        </div>
      )}
    </div>
  );
}
