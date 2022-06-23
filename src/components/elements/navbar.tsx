import { useLayoutEffect } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { Link } from "react-router-dom";

import cubes from "../../assets/img/new/Cubes.png";
import logo from "../../assets/img/new/Logo.svg";
import discord from "../../assets/img/new/social/discord.svg";
import twitter from "../../assets/img/new/social/twitter.svg";
import telega from "../../assets/img/new/social/telega.svg";
import msomth from "../../assets/img/new/social/msomth.svg";

export const Navbar = () => {
  return (
    <div className="navWrapper">
      <div className="navContainer">
        <button className="connectBtn">Connect Wallet</button>
        <img src={logo} alt="logo" className="logo" />
        <ul className="linksWrapper">
          <li>
            <a href="#">
              <img src={discord} alt="discord" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={telega} alt="telega" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={msomth} alt="msomth" />
            </a>
          </li>
        </ul>
        <div className="separator" style={{ marginBottom: "20%" }}></div>
        <nav>
          <Link to="mint">
            <button className="navButton">MINT</button>
          </Link>
          <Link to="redeem">
            <button className="navButton active">REDEEM</button>
          </Link>
          <Link to="faq">
            <button className="navButton">FAQ</button>
          </Link>
        </nav>

        <div className="totalValueWrapper">
          <p>USC Total Value Deposited</p>
          <span>$ 221,201,33</span>
        </div>

        <img src={cubes} alt="" className="cubes" />
      </div>
    </div>
  );
};
