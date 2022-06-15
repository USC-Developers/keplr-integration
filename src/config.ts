import usdt from "./assets/img/usdt.svg";
import usc from "./assets/img/usc.jpeg";
import ust from "./assets/img/ust.png";

export const CONFIG = {
  chain: "usc-gaia-3",
  chainIp: "167.172.180.70",
  rpcPort: "26657",
  restPort: "1317",
  defaultFee: 120000,
  feesDenom: "stake",
  proxyUrl: "http://localhost:8080",
  ustDenom:
    "ibc/312F13C9A9ECCE611FE8112B5ABCF0A14DE2C3937E38DEBF6B73F2534A83464E",
  osmosisUstDemon:
    "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
  gaiaTokens: [
    {
      name: "USDT",
      icon: usdt,
      denom: "uusdt",
    },
    {
      name: "UST",
      icon: ust,
      denom:
        "ibc/312F13C9A9ECCE611FE8112B5ABCF0A14DE2C3937E38DEBF6B73F2534A83464E",
    },
  ],
  osmosisTokens: [
    {
      name: "UST",
      icon: ust,
      denom:
        "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
    },
  ],
};

//UST
