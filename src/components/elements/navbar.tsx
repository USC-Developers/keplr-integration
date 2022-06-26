import { useLayoutEffect } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import ConnectWallet from "../modals/connectWallet";
import { withServices } from "../hocs/withServices";
import { withServiceContainer } from "../../global";
import { truncate } from "../../helpers";

import cubes from "../../assets/img/new/Cubes.png";
import logo from "../../assets/img/new/Logo.svg";
import discord from "../../assets/img/new/social/discord.svg";
import twitter from "../../assets/img/new/social/twitter.svg";
import telega from "../../assets/img/new/social/telega.svg";
import msomth from "../../assets/img/new/social/msomth.svg";

interface NavbarProps extends withServiceContainer {
  onClose: () => void;
}

export const Navbar = withServices(({ container }: NavbarProps) => {
  const [showWalletMenu, setShow] = React.useState(false);

  const loc = useLocation();

  const connectedUser = container.cosmos?.account.address;

  return (
    <div className="navWrapper">
      <div className="navContainer">
        {showWalletMenu && <ConnectWallet onClose={() => setShow(false)} />}

        {!connectedUser ? (
          <button className="connectBtn" onClick={() => setShow(true)}>
            Connect Wallet
          </button>
        ) : (
          <button className="pannelBtn">{truncate(connectedUser, 15)}</button>
        )}

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
        <nav>
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
          <span>$ 221,201,33</span>
        </div>

        <img src={cubes} alt="" className="cubes" />
      </div>
    </div>
  );
});
