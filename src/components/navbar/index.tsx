import React from "react";
// import { NavLink } from "react-router-dom";
import "./index.scss";
// import burgerButton from "../../assets/burger.svg";
// import cancelButton from "../../assets/cross.svg";
import Admios from "../../assets/admiosflix.svg";

interface INavbarProps {
  menuOpen?: boolean;
  onClick?: (event: any) => void;
}

const Navbar = ({ menuOpen, onClick }: INavbarProps): JSX.Element => (
  <>
    <div className="navbar__container">
      <img
        src={Admios}
        alt="admios-icon"
        width="120"
        height="22"
        className="navbar__logo"
      />

      <button
        type="button"
        aria-label="open close button"
        className={menuOpen ? "navbar__menu--close" : "navbar__menu--open"}
        onClick={onClick}
      />
    </div>
    <div
      className={
        menuOpen
          ? "navbar_display_options--display"
          : "navbar_display_options--none"
      }
    >
      <div>Add movie</div>
      <div>List movies</div>
      <div>Contact</div>
    </div>
  </>
);

Navbar.defaultProps = {
  menuOpen: false,
  onClick: (event: any) => console.log(event),
};

export default Navbar;
