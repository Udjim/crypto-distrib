### 1. Заполнить .env файл 
в корне репозитория, контент:
```js
CUSTOM_RPC_URL=https://bsc-dataseed.binance.org/
PRIVATE_KEY=private ключ кошелька с правами трансфера LP
ETHERSCAN_API_KEY=ключ от bscscan API
```

### 2. Установить Hardhat
```sh
npm install --save-dev hardhat
```

### 3. Заполнить массивы в файле scripts/distributeTokensIND.js
пример: 
```js
const tokenAddress =["0x66Ac1bc3eF5e8E65e3b199450aF98851Dc706C16"];
const recipients = ["0x8281a29af1b05c52a6284e546f3e2afd5270623f"];
const amountsInWei = ["510000000000000000000"];
```
### 4. запустить выполнение командой

```sh
npx hardhat run scripts/distributeTokensIND.js --network bnb
```