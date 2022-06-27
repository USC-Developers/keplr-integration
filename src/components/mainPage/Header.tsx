import React from "react";
import "./Header.css";
import logoNav from "./AssetsImgMain/Logo.png";

export default function MainHeader() {
  return (
    <div className="header">
      <div className="headerDesk">
        <div className="headerFlexRow">
          <img className="logoNavBar" src={logoNav}></img>
          <ul className="navBarTitles">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Challenge">Challenge</a>
            </li>
            <li>
              <a href="#Solution">Solution</a>
            </li>
            <li>
              <a href="#Chain">Chain</a>
            </li>
            <li>
              <a href="#MVP">MVP</a>
            </li>
            <li>
              <a href="#Roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#Tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="/">Launch App</a>
            </li>
          </ul>
          <button className="walletConnectBtn">CONNECT WALLET</button>
        </div>

        <div className="headerMobile"></div>
      </div>
    </div>
  );
}
