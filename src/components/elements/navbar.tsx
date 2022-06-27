import React from "react";
import { Link, useLocation } from "react-router-dom";

import { withServices } from "../hocs/withServices";
import { withServiceContainer } from "../../global";

import cubes from "../../assets/img/new/Cubes.png";
import logo from "../../assets/img/new/Logo.svg";
import mobLogo from "../../assets/img/new/mobLogo.svg";

import discord from "../../assets/img/new/social/discord.svg";
import twitter from "../../assets/img/new/social/twitter.svg";
import telega from "../../assets/img/new/social/telega.svg";
import msomth from "../../assets/img/new/social/msomth.svg";

import ConnectButton from "./connectWalletBtn";

import { Global, toggleAccount } from "../../state";
import { useSelector } from "react-redux";
import { CONFIG } from "../../config";
import bignumber from "bignumber.js";

interface NavbarProps extends withServiceContainer {
  onClose: () => void;
}

export const Navbar = withServices(({ container }: NavbarProps) => {
  const [menu, toggleMenu] = React.useState(false);

  const loc = useLocation();

  const { balancesList } = useSelector(({ global }: { global: Global }) => ({
    balancesList: global.balancesList,
  }));

  const uscAmount = balancesList.find(
    (b) => b.denom === CONFIG.uscToken.denom
  )?.amount;

  const uscBalance =
    balancesList.length && uscAmount
      ? new bignumber(String(uscAmount))
          .shiftedBy(0 - CONFIG.uscToken.decimals)
          .toString()
      : "0";

  return (
    <div className="navWrapper">
      <div className="navContainer">
        <div className="mobTopWrapper mobOnly">
          <img src={mobLogo} alt="moblogo" className="mobLogo" />
          <div
            id="nav-icon1"
            className={`hamburger ${menu ? "open" : ""}`}
            onClick={() => toggleMenu(menu ? false : true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ConnectButton />

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
        <div className="separator"></div>
        <nav className={`${menu ? "showMenu" : ""}`}>
          <Link to="/mint">
            <button
              className={`navButton ${
                loc.pathname.includes("mint") && "active"
              }`}
            >
              MINT
            </button>
          </Link>
          <Link to="/redeem">
            <button
              className={`navButton ${
                loc.pathname.includes("redeem") && "active"
              }`}
            >
              REDEEM
            </button>
          </Link>

          <button
            className={`navButton ${loc.pathname.includes("faq") && "active"}`}
          >
            FAQ
          </button>
        </nav>

        <div className="totalValueWrapper">
          <p>USC Total Value Deposited</p>
          <span>{uscBalance}</span>
        </div>

        <img src={cubes} alt="" className="cubes" />
      </div>
    </div>
  );
});
