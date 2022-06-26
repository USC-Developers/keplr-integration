import React from "react";
import "./Footer.css";
import logoUSC from "./AssetsImgMain/Logo.png";
import twitter from "./AssetsImgMain/Twitter icon.png";
import discord from "./AssetsImgMain/Discord icon.png";
import telegram from "./AssetsImgMain/Telegram.png";

export default function MainFooter() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="flexColoumn casadia">
          <img className="USCLogo" src={logoUSC}></img>
          <label>
            A New Fully <span className="green">Collateralized</span>
            <br />
            <span className="blue">Stablecoin</span> For Cosmos
          </label>
        </div>
        <div className="flexColoumn casadia casadiaLinksFooter">
          <label className="footerTitle">Pages</label>
          <a href="#">Home</a>
          <a href="#">Challenge</a>
          <a href="#">Solution</a>
          <a href="#">MVP</a>
        </div>

        <div className="flexColoumn casadia casadiaLinksFooter">
        <label className="footerTitle"></label>
          <a href="#">Roadmap</a>
          <a href="#">Team</a>
          <a href="#">Launch App</a>
        </div>

        <div className="flexColoumn casadia deskOnly">
          <label className="footerTitle">Socials</label>
          <div className="flexRow socials">
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
