import { spawn } from "child_process";
import React, { useState, useEffect } from "react";

import drop from "../../assets/img/drop.svg";

import { selectGaiaToken } from "../../state";
import { useDispatch, useSelector } from "react-redux";

import { TokenInfo } from "../../global";

export const Dropdown = ({ items }: { items: TokenInfo[] }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    selected: 0,
    showList: false,
  });

  useEffect(() => {
    console.log(state.selected, "state.selected");

    dispatch(selectGaiaToken(items[state.selected]));
  }, [state.selected]);

  return (
    <div className="dropdown">
      <div className="dropVariant selected">
        <img src={items[state.selected].icon} alt="" className="coinIcon" />
        <span>{items[state.selected].name}</span>
        <img
          src={drop}
          alt=""
          className="drop"
          onClick={() => setState({ ...state, showList: !state.showList })}
        />
      </div>
      <ul className={`${state.showList ? "expanded" : ""}`}>
        {items.map((item, i) => (
          <li
            style={{ display: i === state.selected ? "none" : "initial" }}
            onClick={() => {
              console.log(i);
              setState({
                ...state,
                selected: i,
              });
            }}
          >
            <div className="dropVariant">
              <img src={item.icon} alt="" className="coinIcon" />
              <span>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
