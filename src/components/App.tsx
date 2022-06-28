import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import { ServiceProvider } from "./hocs/ServcieProvder";
import { ServiceContainer } from "../global";

import { Global, toggleAccount } from "../state";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../store";
import "../assets/reset.scss";
import "../assets/main.scss";
import "../assets/misc.css";
import MainHeader from "./mainPage/Header";
import MainPage from "./mainPage/Main";
import { MintPage } from "../components/pages/mint";
import MainFooter from "./mainPage/Footer";
import NavBarMobile from "./mainPage/navBarMobile";
import { isMobile } from "react-device-detect";

export default function App() {
  const [container, setContainer] = useState<ServiceContainer>({});

  const BodyWrapper = ({ children }: { children: React.ReactChild }) => {
    const dispatch = useDispatch();

    return (
      <div className="app" onClick={() => dispatch(toggleAccount(false))}>
        {children}
      </div>
    );
  };

  return (
    <ServiceProvider value={{ container, setContainer }}>
      <Provider store={store}>
        <BodyWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {isMobile ? <NavBarMobile /> : <MainHeader />}
                  <MainPage />
                  <MainFooter />
                </>
              }
            />
            <Route path="/mint" element={<MintPage />} />
            <Route path="/redeem" element={<MintPage />} />
          </Routes>
        </BodyWrapper>
      </Provider>
    </ServiceProvider>
  );
}
