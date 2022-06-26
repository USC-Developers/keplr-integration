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

export default function MainPage() {
  return (
    <div>
      <div className="mainDiv">
        <div className="div div1">
          <img className="mainLogo deskOnly" src={uscLogo}></img>
          <img className="mainLogo mobileOnly" src={uscLogo}></img>
        </div>

        <div className="div div2">
          <div className="divContainer deskOnly">
            <div className="flexColoumn casadia ">
              <img className="USCLogo" src={logoUSC}></img>
              <label>A New Fully</label>
              <div>
                <label className="green">Collateralized </label>
                <label className="blue">Stablecoin</label>
              </div>
              <label>For Cosmos</label>
            </div>
            <img className="cubeImg" src={cubeImg}></img>
          </div>

          <div className="divContainer mobileOnly">
            <div className="flexColoumn casadia ">
              <img className="cubeImg" src={cubeImg}></img>
              <img className="USCLogo" src={logoUSC}></img>
              <label className="textWhite">
                A New Fully <span className="green">Collateralized</span>
                <br /> <span className="blue">Stablecoin</span> For Cosmos
              </label>
            </div>
          </div>
        </div>

        <div className="div div3">
          <div className="flexColoumn casadia divContainer alignLeft">
            <div>
              <label>The </label>
              <label className="green">Challenge</label>
            </div>
            <p className="pDiv3">
              With the collapse of UST, the Cosmos Ecosystem has lost its native
              stablecoin, and one of its primary liquidity sources. Many dozens
              of projects operating billions of dollars in value are currently
              seeking for an alternative, as they require a highly liquid
              solution moving forward.
            </p>
            <p className="pDiv3">
              Other solutions are either not native to the ecosystem and
              therefore fragment liquidity and increase the attack surface
              (e.g., bridged USDC), or are not ready for market nor have a plan
              for attracting sufficient initial liquidity
            </p>
          </div>
        </div>

        <div className="div div4">
          <div className="flexColoumn casadia divContainer gap">
            <div className="titleDiv">
              <label>The </label>
              <label className="green">Solution</label>
            </div>
            <p className="pDiv4">
              We’re building USC (Cosmos USD), a fully collateralized and <br />
              redeemable USD-pegged stablecoin built on Secret and dedicated
              <br />
              to the needs of Cosmos and the IBC ecosystem
            </p>
            <img className="cubesImg2" src={cubesImg2} />
            <p className="pDiv3">
              Our solution provides a partial recompensation for UST holders and
              also serves as a mechanism to attract initial collateral. Every
              UST holder will receive an airdrop of xUSC, a six- month option
              allowing you to receive the protocol’s governance token
              (Interstellar or ISTR) at some ratio (e.g., $0.30 worth of tokens
              for every 1 xUSC), provided that you supply collateral to the
              project (and mint USC in return). The option would slowly expire,
              each month giving less value to xUSC holders.
            </p>
            <p className="pDiv3">
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
            </p>
            <p className="pDiv3">
              Alongside the bootstraping phase for UST holders, anyone would be
              able to supply collateral in return for USC at a 1:1 ratio with
              some additional ISTR tokens allocated to them over time, but at a
              much lower value.
            </p>
          </div>
          <img src={generator} className="generatorImg" />
        </div>

        <div className="div div6">
          <div className="flexColoumn casadia divContainer gap">
            <div>
              <label>The </label>
              <label className="green">Chain</label>
            </div>
            <div className="flexRow">
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

        <div className="div div7">
          <div className="flexColoumn casadia divContainer gap">
            <div>
              <label>The </label>
              <label className="green">MVP</label>
            </div>
            <div className="flexRow">
              <div className="flexColoumn">
                <p className="pDiv3" style={{ width: "690px" }}>
                  The initial MVP for the product would be a new Cosmos SDK
                  module deployed on Secret that will implement a simple fully
                  collateralized and redeemable stablecoin. The following main
                  components are required for this to work:
                </p>
                <p className="pDiv3" style={{ marginLeft: "50px" }}>
                  Front-end/App <br />
                  Cosmos SDK Module <br />
                  Bridge integration <br />
                </p>
                <div className="flexRow">
                  <img
                    src={mvpUI}
                    className="mvpUIImg"
                    style={{ marginLeft: "200px", marginTop: "50px" }}
                  />
                </div>
              </div>
              <div className="flexColoumn">
                <img src={Machine} className="machineImg" />
                <label className="mvpLabelGreen">Front-end / App</label>
                <label className="mvpLabel">
                  A simple app with three tabs:
                </label>
                <p className="pDiv3" style={{ marginLeft: "50px" }}>
                  Dashboard <br />
                  Assets <br />
                  Mint/Redeem <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div div8">
          <div className="flexColoumn casadia divContainer">
            <div>
              <label>The </label>
              <label className="green">Roadmap</label>
            </div>
            <img src={roadmap} className="roadmapImg" />
          </div>
        </div>

        <div className="div div9">
          <div className="flexColoumn casadia divContainer">
            <div>
              <label>USC </label>
              <label className="green">Tokenomics</label>
            </div>
            <div className="uscToken">
              <img src={Tokenomics} className="TokenomicsImg" />
              <img src={colorLegends} className="ColorLegendsImg" />
            </div>
          </div>
        </div>

        <div className="div div10">
          <div className="flexColoumn casadia divContainer alignLeft">
            <div>
              <label>The </label>
              <label className="green">Team</label>
            </div>
            <p className="pDiv3">
              The team behind the project are long-time crypto vaterans (many of
              us started our journey in 2011- 2013) who care deeply about the
              space.
            </p>
            <p className="pDiv3">
              We developed top projects that have raised dozens of millions of
              dollars and have been used by hundreds of thousands of users. In
              addition, we are going to launch our stablecoin as a module on
              Secret and have the support of it’s team and ecosystem.
            </p>
            <div>
              <div className="teamBoxes">
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 1</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 2</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 3</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 4</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
              </div>
              <div className="teamBoxes" style={{ marginTop: "50px" }}>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 5</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 6</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 7</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
                <div className="TeamBox">
                  <img src={userImg} className="userImg" />
                  <label className="chainTitle">User 8</label>
                  <p className="userText">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and
                    <br />
                    typesetting industry.
                  </p>
                  <a href="#" className="userLinkedin">
                    https://www.linkedin.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
