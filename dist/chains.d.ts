export declare enum ChainId {
    SCROLL_SEPOLIA = 534351,
    POLYGON_MUMBAI = 80001,
    ARBITRUM_GOERLI = 421613,
    OPTIMISM_GOERLI = 420,
    BASE_GOERLI = 84531,
    SCROLL = 534352,
    POLYGON = 137,
    ARBITRUM_ONE = 42161,
    OPTIMISM = 10,
    BASE = 8453,
    MAINNET = 1,
    GOERLI = 5,
    SEPOLIA = 11155111,
    CELO = 42220,
    CELO_ALFAJORES = 44787,
    GNOSIS = 100,
    MOONBEAM = 1284,
    BNB = 56,
    AVALANCHE = 43114,
    SCROLL_ALPHA = 534353
}
export declare const SUPPORTED_CHAINS: readonly [ChainId.SCROLL_SEPOLIA, ChainId.POLYGON_MUMBAI, ChainId.ARBITRUM_GOERLI, ChainId.OPTIMISM_GOERLI, ChainId.BASE_GOERLI, ChainId.SCROLL, ChainId.POLYGON, ChainId.ARBITRUM_ONE, ChainId.OPTIMISM, ChainId.BASE, ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.CELO_ALFAJORES, ChainId.CELO, ChainId.BNB, ChainId.AVALANCHE, ChainId.SCROLL_ALPHA];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    ETHER = "ETH",
    MATIC = "MATIC",
    CELO = "CELO",
    GNOSIS = "XDAI",
    MOONBEAM = "GLMR",
    BNB = "BNB",
    AVAX = "AVAX"
}
