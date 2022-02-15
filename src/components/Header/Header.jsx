import React from 'react';
import logoLink from '../../images/logo.svg';

const Header = () => {
  return (
    <>
      <div className='header'>
        <img className='header__logo' alt='лого' src={logoLink} />
        <nav>
          <ul>
            <li>
              <button className='header__signup-btn' />
            </li>
            <li>
              <button className='header__signin-btn' />
            </li>
            <li>
              <button className='header__movies-btn' />
            </li>
            <li>
              <button className='header__profile-btn' />
            </li>
            <li>
              <button className='header__save-movies-btn' />
            </li>
          </ul>
        </nav>
      </div>
      ;
    </>
  );
};

export default Header;
