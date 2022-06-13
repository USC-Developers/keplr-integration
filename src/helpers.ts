import { Coin } from './grpc/cosmos/base/v1beta1/coin_pb'


export const getCoinList = (amount: string, denom:string) => [new Coin().setAmount(amount).setDenom(denom)]


export const setChain = (chain: string, rpc: string, rest: string) => ({
    chainId: chain,
    chainName: "USC_GAIA",
    rpc: `https://${rpc}`,
    rest: `http://${rest}`,
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmos" + "pub",
      bech32PrefixValAddr: "cosmos" + "valoper",
      bech32PrefixValPub: "cosmos" + "valoperpub",
      bech32PrefixConsAddr: "cosmos" + "valcons",
      bech32PrefixConsPub: "cosmos" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "stake",
        coinMinimalDenom: "stake",
        coinDecimals: 0,
      },
      {
        coinDenom: "usdt",
        coinMinimalDenom: "uusdt",
        coinDecimals: 6,
      },
      {
        coinDenom: "usc",
        coinMinimalDenom: "ausc",
        coinDecimals: 18,
      },
  
    ],
    feeCurrencies: [
      {
        coinDenom: "stake",
        coinMinimalDenom: "stake",
        coinDecimals: 0,
      },
    ],
    stakeCurrency: {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 0,
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03,
    },
    features: ["cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"],
  });
  

  export  const truncate = function (fullStr:string, strLen:number, separator?: string) {
    if (!fullStr) return;
    if (fullStr.length <= strLen) return fullStr;
  
    separator = separator || "...";
  
    var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2);
  
    return (
      fullStr.substr(0, frontChars) +
      separator +
      fullStr.substr(fullStr.length - backChars)
    );
  };