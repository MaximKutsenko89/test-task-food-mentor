import React from "react";
import "./header.scss";
import backIcon from "../../assets/back.svg";
import pearIcon from "../../assets/pear.png";
function Header({ onClick }: { onClick: () => void }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h2 className="header__title">
          <img
            src={backIcon}
            alt="back"
            onClick={onClick}
            className="header__back-btn"
          />
          <img src={pearIcon} alt="pear" />
          Food Mentor
        </h2>
      </div>
    </header>
  );
}

export default Header;
