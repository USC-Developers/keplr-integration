import React from "react";
import "./Main.css";
import uscLogo from "./AssetsImgMain/Home Screen Logo.png";
import logoUSC from "./AssetsImgMain/Logo.png";
import cubeImg from "./AssetsImgMain/Cubes.png";
import cubesImg2 from "./AssetsImgMain/Cubes 2.png";
import generator from "./AssetsImgMain/Generator.png";
import partial from "./AssetsImgMain/partial.png";
import collateral from "./AssetsImgMain/collateral.png";
import amm from "./AssetsImgMain/AMM.png";
import mvpUI from "./AssetsImgMain/Front end UI image.png";
import Machine from "./AssetsImgMain/Machine.png";
import roadmap from "./AssetsImgMain/Roadmap.png";
import Tokenomics from "./AssetsImgMain/Tokenomics Pie.png";
import colorLegends from "./AssetsImgMain/Color legends.png";
import userImg from "./AssetsImgMain/avatar.png";
import uscLogoMobile from "./uscMobile/logo.png";
import frame from "./uscMobile/Frame.png";
import cubesImgMobile from "./uscMobile/cubes2.png";
import { User } from "./User";

export default function MainPage() {
  return (
    <>
      <div className="mainDiv">
        <div className="div div1">
          <img className="mainLogo deskOnly" src={uscLogo} alt="uscLogo2" />
          <img className="mainLogo mobileOnly" src={uscLogo} alt="uscLogo3" />
        </div>

        <div className="div div2" id="Home">
          <div className="divContainer deskOnly">
            <div className="flexColoumn casadia ">
              <img className="USCLogo" src={logoUSC} alt="logoUSC" />
              <label>A New Fully</label>
              <div>
                <label className="green">Collateralized </label>
                <label className="blue">Stablecoin</label>
              </div>
              <label>For Cosmos</label>
            </div>
            <img className="cubeImg" src={cubeImg} alt="cubeImg" />
          </div>

          <div className="divContainer mobileOnly">
            <div className="flexColoumn casadia ">
              <img className="cubeImg" src={cubeImg} alt="cubeImg" />
              <img className="USCLogo" src={logoUSC} alt="logoUSC1" />
              <label className="textWhite">
                A New Fully <span className="green">Collateralized</span>
                <br /> <span className="blue">Stablecoin</span> For Cosmos
              </label>
            </div>
          </div>
        </div>

        <div className="div div3" id="Challenge">
          <div className="flexColoumn casadia divContainer gap">
            <div className="titleDiv">
              <label>The </label>
              <label className="green">Challenge</label>
            </div>
            <p className="pDiv3">
              With the collapse of UST, the Cosmos Ecosystem has lost its native
              stablecoin, and one of its primary liquidity sources. Many dozens
              of projects operating billions of dollars in value are currently
              seeking for an alternative, as they require a highly liquid
              solution moving forward.
              <br />
              <br />
              Other solutions are either not native to the ecosystem and
              therefore fragment liquidity and increase the attack surface
              (e.g., bridged USDC), or are not ready for market nor have a plan
              for attracting sufficient initial liquidity.
            </p>
          </div>
        </div>

        <div className="div div4" id="Solution">
          <div className="flexColoumn casadia divContainer gap">
            <div className="titleDiv">
              <label>The </label>
              <label className="green">Solution</label>
            </div>
            <p className="pDiv4">
              We’re building USC (Cosmos USD), a fully collateralized and <br />
              redeemable USD-pegged stablecoin built on Secret and dedicated
              <br />
              to the needs of Cosmos and the IBC ecosystem.
            </p>
            <img className="cubesImg2 deskOnly" src={cubesImg2} />
            <img className="cubesImg2 mobileOnly" src={cubesImgMobile} />
            <p className="pDiv3">
              Our solution provides a partial recompensation for UST holders and
              also serves as a mechanism to attract initial collateral. Every
              UST holder will receive an airdrop of xUSC, a six- month option
              allowing you to receive the protocol’s governance token
              (Interstellar or ISTR) at some ratio (e.g., $0.30 worth of tokens
              for every 1 xUSC), provided that you supply collateral to the
              project (and mint USC in return). The option would slowly expire,
              each month giving less value to xUSC holders.
              <br />
              <br />
              To give a simple example, imagine a person holding 10 UST. They’ll
              receive 10 xUSC, which they can turn into 10 USC + $3 worth of
              ISTR, assuming they lock $10 worth of collateral in the protocol.
            </p>
          </div>
        </div>

        <div
          className="div div5"
          style={{ alignItems: "flex-start", paddingTop: "100px" }}
        >
          <div
            className="flexColoumn casadia divContainer gap"
            style={{ alignItems: "flex-start", zIndex: 2 }}
          >
            <p className="pDiv3">
              The collateral is always redeeemable with a 1:1 backing, but ISTR
              is dripped over a vesting period, so redeeming your collateral
              means giving up your future ISTR allocation.
              <br />
              <br />
              Alongside the bootstraping phase for UST holders, anyone would be
              able to supply collateral in return for USC at a 1:1 ratio with
              some additional ISTR tokens allocated to them over time, but at a
              much lower value.
            </p>
            <img src={generator} className="generatorImg mobileOnly" />
          </div>
          <img src={generator} className="generatorImg deskOnly" />
        </div>

        <div className="div div6" id="Chain">
          <div className="flexColoumn casadia divContainer gap">
            <div>
              <label>The </label>
              <label className="green">Chain</label>
            </div>
            <div className="flexRow flexMobile gapChain">
              <div className="chainBox">
                <img src={partial} className="chainImg" />
                <label className="chainTitle">
                  Partial <br />
                  Recompensation
                </label>
                <p className="chainText">
                  Every <span className="green">UST</span> holder will receive
                  an airdrop of <span className="green">xUSC</span>, a six-
                  month option allowing you to receive the protocol’s governance
                  token <span className="green">Intestellar</span> or{" "}
                  <span className="green">ISTR</span> at some ratio.
                </p>
              </div>
              <div className="chainBox">
                <img src={collateral} className="chainImg" />
                <label className="chainTitle">Collateralization</label>
                <p className="chainText">
                  Redeemable collateral with 1:1 backing with{" "}
                  <span className="green">ISTR</span> being dripped over a
                  vesting period.Supply collateral in return for USC at 1:1
                  ratio.{" "}
                </p>
              </div>
              <div className="chainBox">
                <img src={amm} className="chainImg" />
                <label className="chainTitle">AMM</label>
                <p className="chainText">
                  Integration into all major{" "}
                  <span className="green"> Cosmos AMMs </span>, collaborating
                  <span className="green"> closely</span> with 1- 2 major
                  players. Two money- market solutions.{" "}
                  <span className="green">ISTR</span> Governance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div div7" id="MVP">
          <div className="flexColoumn casadia divContainer gap">
            <div>
              <label>The </label>
              <label className="green">MVP</label>
            </div>
            <div className="flexRow flexMobile">
              <div className="flexColoumn">
                <img src={Machine} className="machineImg mobileOnly" />
                <p className="pDiv3 deskOnly" style={{ width: "690px" }}>
                  The initial MVP for the product would be a new Cosmos SDK
                  module deployed on Secret that will implement a simple fully
                  collateralized and redeemable stablecoin. The following main
                  components are required for this to work:
                </p>
                <p className="pDiv3 deskOnly" style={{ marginLeft: "50px" }}>
                  Front-end/App <br />
                  Cosmos SDK Module <br />
                  Bridge integration <br />
                </p>
                <p className="pDiv3 mobileOnly" style={{ width: "90vw" }}>
                  The initial MVP for the product would be a new Cosmos SDK
                  module deployed on Secret that will implement a simple fully
                  collateralized and redeemable stablecoin. The following main
                  components are required for this to work:
                </p>
                <p
                  className="pDiv3 mobileOnly mvptext"
                  style={{ marginLeft: "50px" }}
                >
                  Front-end/App <br />
                  Cosmos SDK Module <br />
                  Bridge integration <br />
                </p>
                <div className="flexRow deskOnly">
                  <img
                    src={mvpUI}
                    className="mvpUIImg"
                    style={{ marginLeft: "200px", marginTop: "50px" }}
                  />
                </div>
                <img src={mvpUI} className="mvpUIImg mobileOnly" />
              </div>
              <div className="flexColoumn">
                <img src={Machine} className="machineImg deskOnly" />
                <label className="mvpLabelGreen">Front-end / App</label>
                <label className="mvpLabel">
                  A simple app with three tabs:
                </label>
                <p className="pDiv3 mvptext" style={{ marginLeft: "50px" }}>
                  Dashboard <br />
                  Assets <br />
                  Mint/Redeem <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div div8" id="Roadmap">
          <div
            className="flexColoumn casadia divContainer"
            style={{ gap: "50px" }}
          >
            <div>
              <label>The </label>
              <label className="green">Roadmap</label>
            </div>
            <img src={roadmap} className="roadmapImg" />
          </div>
        </div>

        <div className="div div9" id="Tokenomics">
          <div className="flexColoumn casadia divContainer">
            <div>
              <label>USC </label>
              <label className="green">Tokenomics</label>
            </div>
            <div className="uscToken flexMobile">
              <img src={Tokenomics} className="TokenomicsImg" />
              <img src={colorLegends} className="ColorLegendsImg" />
            </div>
          </div>
        </div>

        <div className="div div10" id="Team">
          <div className="flexColoumn casadia divContainer alignLeft">
            <div style={{ alignSelf: "center" }}>
              <label>The </label>
              <label className="green">Team</label>
            </div>
            <p className="pDiv3">
              The team behind the project are long-time crypto vaterans (many of
              us started our journey in 2011- 2013) who care deeply about the
              space.
              <br />
              <br />
              We developed top projects that have raised dozens of millions of
              dollars and have been used by hundreds of thousands of users. In
              addition, we are going to launch our stablecoin as a module on
              Secret and have the support of it’s team and ecosystem.
            </p>
            <div>
              <div className="teamBoxes">
                <User name={"1"} />
                <User name={"2"} />
                <User name={"3"} />
                <User name={"4"} />
                <User name={"5"} />
                <User name={"6"} />
                <User name={"7"} />
                <User name={"8"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
