import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import logoUSC from "./AssetsImgMain/Logo.png";
import twitter from "./AssetsImgMain/Twitter icon.png";
import discord from "./AssetsImgMain/Discord icon.png";
import telegram from "./AssetsImgMain/Telegram.png";

export default function MainFooter() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <div className="flexColoumnFooter casadiaFooter">
            <img className="USCLogo" src={logoUSC}></img>
            <label>
              A New Fully <span className="green">Collateralized</span>
              <br />
              <span className="blue">Stablecoin</span> For Cosmos
            </label>
          </div>
        </div>

        <div className="flexColoumnFooter casadiaFooter casadiaLinksFooter">
          <label className="footerTitle">Pages</label>

          <div className="pagesRow">
            <div className="flexColoumnFooter">
              <a href="#Home">Home</a>
              <a href="#Challenge">Challenge</a>
              <a href="#Solution">Solution</a>
              <a href="#MVP">MVP</a>
            </div>
            <div className="flexColoumnFooter">
              <a href="#Roadmap">Roadmap</a>
              <a href="#Team">Team</a>
              <a href="#">Launch App</a>
            </div>
          </div>
        </div>

        <div className="flexColoumn casadia casadiaLinksFooter">
          <label className="footerTitle"></label>
          <a href="#">Roadmap</a>
          <a href="#">Team</a>
          <Link to="/mint">
            <a href="#">Launch App</a>
          </Link>
        </div>

        <div className="flexColoumn casadia deskOnly">
          <label className="footerTitle">Socials</label>
          <div className="flexRowFooter socials">
            <a href="#">
              <img src={twitter} className="socialIcon" />
            </a>
            <a href="#">
              <img src={discord} className="socialIcon" />
            </a>
            <a href="#">
              <img src={telegram} className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
