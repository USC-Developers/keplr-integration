import usdt from "./assets/img/usdt.svg";
import usc from "./assets/img/usc.jpeg";
import ust from "./assets/img/ust.png";
import ki from "./assets/img/ki.svg";
import usdc from "./assets/img/usdc.svg";

export const CONFIG = {
  chain: "usc-gaia-4",
  chainIp: "167.172.180.70",
  rpcPort: "26857", //"26657",
  restPort: "1337", //"1317",
  ibcChannel: "channel-299",
  defaultFee: 120000,
  feesDenom: "stake",
  proxyUrl: "https://usc-proxy.herokuapp.com", //http://localhost:8080",
  osmosisUrl: "rpc-test.osmosis.zone",
  osmosisRest: "lcd-test.osmosis.zone",
  osmosisChain: "osmo-test-4",
  uscToken: {
    denom: "uusc",
    decimals: 6,
  },
  gaiaTokens: [
    {
      name: "USDT",
      icon: usdt,
      denom: "uusdt",
      decimals: 6,
    },
    {
      name: "USDC",
      icon: usdc,
      denom:
        "ibc/312F13C9A9ECCE611FE8112B5ABCF0A14DE2C3937E38DEBF6B73F2534A83464E",
      decimals: 6,
    },
    {
      name: "XKI",
      icon: ki,
      denom:
        "ibc/9167D1164E9ADD09EE5B6EB5DB645C950EE6A7DB049C7764D14E3C8D16C8F9B0",
      decimals: 6,
    },
  ],
  osmosisTokens: [
    {
      name: "USDC",
      icon: usdc,
      denom:
        "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
    },

    {
      name: "XKI",
      denom:
        "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
      icon: ki,
    },
  ],
};

//UST
