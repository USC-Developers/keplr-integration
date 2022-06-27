import React from "react";
import "./Header.css";
import logoNav from "./AssetsImgMain/Logo.png";
import { Link } from "react-router-dom";
import ConnectWallet from "../elements/connectWalletBtn";

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
          <Link to="/mint">
            <li>
              <a href="/">Launch App</a>
            </li>
          </Link>
        </ul>
        <div style={{ position: "relative", width: "200px" }}>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}
