
document.getElementById("connectBtn").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      document.getElementById("status").textContent = "Connected: " + address;
    } catch (err) {
      document.getElementById("status").textContent = "Connection failed.";
    }
  } else {
    document.getElementById("status").textContent = "MetaMask not found.";
  }
});
