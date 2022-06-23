import React from "react";
import "./Header.css";
import logoNav from "./AssetsImgMain/Logo.png";

export default function MainHeader() {
  return (
    <div className="header">
      <div className="headerFlexRow">
        <img className="logoNavBar" src={logoNav}></img>
        <ul className="navBarTitles">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Challenge</a>
          </li>
          <li>
            <a href="/">Solution</a>
          </li>
          <li>
            <a href="/">Chain</a>
          </li>
          <li>
            <a href="/">MVP</a>
          </li>
          <li>
            <a href="/">Roadmap</a>
          </li>
          <li>
            <a href="/">Tokenomics</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Launch App</a>
          </li>
        </ul>
        <button className="walletConnectBtn">CONNECT WALLET</button>
      </div>
    </div>
  );
}
