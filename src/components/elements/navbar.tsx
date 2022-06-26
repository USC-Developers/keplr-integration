import { useLayoutEffect } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import ConnectWallet from "../modals/connectWallet";
import Account from "../modals/account";
import { withServices } from "../hocs/withServices";
import { withServiceContainer } from "../../global";
import { truncate } from "../../helpers";

import { useSelector, useDispatch } from "react-redux";

import { Global, setForceConnect } from "../../state";

import cubes from "../../assets/img/new/Cubes.png";
import logo from "../../assets/img/new/Logo.svg";
import mobLogo from "../../assets/img/new/mobLogo.svg";
import hamburger from "../../assets/img/new/hamburger menu.svg";
import discord from "../../assets/img/new/social/discord.svg";
import twitter from "../../assets/img/new/social/twitter.svg";
import telega from "../../assets/img/new/social/telega.svg";
import msomth from "../../assets/img/new/social/msomth.svg";

interface NavbarProps extends withServiceContainer {
  onClose: () => void;
}

export const Navbar = withServices(({ container }: NavbarProps) => {
  const [showWalletMenu, setShow] = React.useState(false);
  const [accountShow, setAccountShow] = React.useState(false);
  const [force, setForce] = React.useState(false);
  const [menu, toggleMenu] = React.useState(false);

  const loc = useLocation();
  const dispatch = useDispatch();

  const { forceConnectModal } = useSelector(
    ({ global }: { global: Global }) => ({
      forceConnectModal: global.forceConnectModal,
    })
  );

  const connectedUser = container.cosmos?.account.address;

  React.useEffect(() => {
    if (forceConnectModal) {
      setShow(true);
      setForce(true);
      dispatch(setForceConnect(false));
    }
  }, [forceConnectModal]);

  return (
    <div className="navWrapper">
      <div className="navContainer">
        {showWalletMenu && (
          <ConnectWallet
            onClose={() => {
              setShow(false);
              setForce(false);
            }}
            force={force}
          />
        )}

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
        {
          !connectedUser ? (
            <button className="connectBtn" onClick={() => setShow(true)}>
              Connect Wallet
            </button>
          ) : (
            container.cosmos?.account?.address && (
              <Account address={container.cosmos.account.address} />
            )
          )
          //<button onClick={() => setAccountShow(true)} className="pannelBtn">{truncate(connectedUser, 15)}</button>
        }

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
          <span>$ 221,201,33</span>
        </div>

        <img src={cubes} alt="" className="cubes" />
      </div>
    </div>
  );
});
