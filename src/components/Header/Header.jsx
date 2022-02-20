import React from 'react';
import logoLink from '../../images/logo.svg';

const Header = ({ homePageBtnCondition, applicationBtnCondition }) => {
  return (
    <>
      <div className='header'>
        <img className='header__logo' alt='лого' src={logoLink} />
        <nav className='header__menu'>
          <ul className='header__menu-bar'>
            <li className={`header__menu-point  ${homePageBtnCondition}`}>
              <button className='header__menu-signup-btn header__menu-btn header__menu-btn-home-page '>
                Регистрация
              </button>
            </li>
            <li className={`header__menu-point ${homePageBtnCondition}`}>
              <button className='header__menu-btn header__menu-signin-btn header__menu-btn-home-page'>
                Войти
              </button>
            </li>
            <li className={`header__menu-point ${applicationBtnCondition}`}>
              <button className='header__menu-movies-btn header__menu-btn'>
                Фильмы
              </button>
            </li>
            <li className={`header__menu-point  ${applicationBtnCondition}`}>
              <button className='header__menu-save-movies-btn header__menu-btn'>
                Сохранённые фильмы
              </button>
            </li>
            <li className={`header__menu-point ${applicationBtnCondition}`}>
              <button className='header__menu-profile-btn header__menu-btn'>
                Аккаунт
                <div className='header__menu-profile-btn-icon'></div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
