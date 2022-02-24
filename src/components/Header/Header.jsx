import React from "react";
import { NavLink } from "react-router-dom";
const Header = ({ homePageBtnCondition, applicationBtnCondition }) => {
  return (
    <>
      <header className="header">
        <a className="header__logo" alt="лого" href="/"></a>
        <nav className="header__menu">
          <ul className="header__menu-bar">
            <li className={`header__menu-point  ${homePageBtnCondition}`}>
              <NavLink
                className="header__menu-signup-btn header__menu-btn header__menu-btn-home-page"
                to="/signup"
              >
                Регистрация
              </NavLink>
            </li>
            <li
              className={`header__menu-point header__menu-point-signin  ${homePageBtnCondition}`}
            >
              <NavLink
                className="header__menu-btn header__menu-signin-btn header__menu-btn-home-page"
                to="/signin"
              >
                Войти
              </NavLink>
            </li>
            <li className={`header__menu-point ${applicationBtnCondition}`}>
              <NavLink
                className="header__menu-movies-btn header__menu-btn"
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className={`header__menu-point  ${applicationBtnCondition}`}>
              <NavLink
                className="header__menu-save-movies-btn header__menu-btn"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className={`header__menu-point ${applicationBtnCondition}`}>
              <NavLink
                className="header__menu-profile-btn header__menu-btn"
                to="/profile"
              >
                Аккаунт
                <div className="header__menu-profile-btn-icon"></div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
