import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xa02E86Cc2887D0C7aB58541524Df0ee228bf61DF"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/NPqKj5xo6ywPYSlfIxEqnXRzpTC8aUOk",
  },
};