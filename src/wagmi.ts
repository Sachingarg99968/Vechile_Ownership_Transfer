import { configureChains, createClient, goerli, mainnet } from "wagmi";
import { bsc, bscTestnet, polygon, polygonMumbai } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { isProdEnv } from "./data/constant";

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
const bscNode = process.env.NEXT_PUBLIC_API_NODE_BSC;
const bscTestNode = process.env.NEXT_PUBLIC_API_NODE_BSC_TEST;
const ganacheId = process.env.NEXT_PUBLIC_GANACHE_ID;

if (!alchemyApiKey || !ganacheId) {
    throw new Error("Some ENV variables are not defined");
}

const { chains, provider, webSocketProvider } = configureChains(
    [
        mainnet,
        goerli,
        polygon,
        polygonMumbai,
        bsc,
        bscTestnet,
        ...(isProdEnv ? [mainnet, polygon, bsc] : [goerli, polygonMumbai, bscTestnet]),
    ],
    [
        alchemyProvider({ apiKey: alchemyApiKey, priority: 0 }),
        jsonRpcProvider({
            priority: 0,
            rpc: () => ({
                http: isProdEnv ? bscNode : ganacheId,
            }),
        }),
    ]
);

export const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: "Move My wallet",
            },
        }),
    ],
    provider,
    webSocketProvider,
});
