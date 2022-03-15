import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../../styles/Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

import Noti from "../../helpers/Noti/Noti";
const Header = () => {
  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = (id) => {
    menuToggleHandler();
    history("/Profile");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/HomePage" className={classes.header__content__logo}>
          FAKEBOOK
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/HomePage/Friends" onClick={menuToggleHandler}>
                Friends
              </Link>
            </li>
            <li>
              <Link to="/HomePage/Map" onClick={menuToggleHandler}>
                Map
              </Link>
            </li>
            <li>
              <Link to="/HomePage/FilterPage" onClick={menuToggleHandler}>
                FilterPage
              </Link>
            </li>
            <li>
              <Link to="/HomePage/NewPost" onClick={menuToggleHandler}>
                NewPost
              </Link>
            </li>
            <li>
              <Noti
                width={"30px"}
                color={"#21C282"}
                count={1}
                onClick={menuToggleHandler}
              />
            </li>
          </ul>

          <button onClick={ctaClickHandler}>PROFILE</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
