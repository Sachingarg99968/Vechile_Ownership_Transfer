<div align="center">

<br><br>

<h1><strong>Transfer Car from one owner to another easily.</strong></h1>
</div>

## Description

Cross-chain Dapp deployed on Ethereum, Binance Smart-Chain and Polygon. Allow any user to quickly and simply transfer vehicle (ERC20, ERC721 and ERC1155) from one address to another.

## Smart-contract deployment

💿 Move inside the `hardhat` folder and install all dependencies:

```sh
cd MoveCar-app/hardhat
yarn install
```

💿 Test that everything is working as intended:

```sh
yarn test
```

💿 Deploy your contracts:

```sh
yarn deploy
```


## Front-end Installation

💿 Clone the repo and install all dependencies:

```sh
cd MoveCar-app
yarn install
```

🔎 Locate the file constant.js in `src/data/constant.ts` and paste your smart-contracts addresses;

```jsx
// Production:
export const MOVE_MY_WALLET_ETHEREUM = "";
export const MOVE_MY_WALLET_BSC = "";
export const MOVE_MY_WALLET_POLYGON = "";

// Development:
export const MOVE_MY_WALLET_GOERLI = "";
export const MOVE_MY_WALLET_MUMBAI = "";
export const MOVE_MY_WALLET_BSC_TESTNET = "";
```

🔎 Locate the ABIs files in the `src/data/abis` folder and edit your ABIs if you've made any changes to the smart-contracts;

```jsx
export const NFT_ABI = ["NFT ABI here...];
```

🚴‍♂️ Run your App:

Dev. mode:

```sh
yarn dev
```

Prod. mode:

```sh
yarn start
```


<div align="center">
<h2>Enjoy!!!</h2>

### ⭐️ ... and don't forget to leave a star if you like it! ⭐️

</div>

<p align="right">(<a href="#top">back to top</a>)</p>
