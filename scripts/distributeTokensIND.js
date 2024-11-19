const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

//Примеры:
const tokenAddress =["0x66Ac1bc3eF5e8E65e3b199450aF98851Dc706C16"];
const recipients = ["0x8281a29af1b05c52a6284e546f3e2afd5270623f"];
const amountsInWei = ["510000000000000000000"];


  for (let i = 0; i < recipients.length; i++) {
    const Token = await ethers.getContractFactory("ERC20base");
    const token = Token.attach(tokenAddress[i]);
    const recipient = recipients[i];
    const amount = amountsInWei[i];

    try {
      console.log(`Sending ${amount} tokens to ${recipient}...`);
      const tx = await token.transfer(recipient, amount);
      console.log(`Transaction hash: ${tx.hash}`);

      await tx.wait();
      console.log(`Transaction confirmed! Sent ${amount} tokens to ${recipient}`);
    } catch (error) {
      console.error(`Failed to send tokens to ${recipient}:`, error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
