import { FC } from "react";
import userImg from "./AssetsImgMain/avatar.png";
import "./Main.css";

interface UserProps {
  name: string;
}

export const User: FC<UserProps> = ({ name }) => {
  return (
    <>
      <div className="TeamBox">
        <img src={userImg} className="userImg" />
        <label className="chainTitle">User {name}</label>
        <p className="userText">
          Lorem Ipsum is simply dummy <br />
          text of the printing and
          <br />
          typesetting industry.
        </p>
        <a href="#" className="userLinkedin">
          https://www.linkedin.com/
        </a>
      </div>
    </>
  );
};
