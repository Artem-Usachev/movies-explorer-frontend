import React from 'react';

const Login = () => {
  return (
    <section className='login'>
      <div className='login__content'>
        <a className='login__logo' href='/'></a>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <ul className='login__form-input-bar'>
            <li className='login__form-input-bar-point'>
              <p className='login__hint'>E-mail</p>
              <input className='login__input' type='email'></input>
              <span className='login__input-error'></span>
            </li>
            <li className='login__form-input-bar-point'>
              <p className='login__hint'>Пароль</p>
              <input className='login__input' type='password'></input>
              <span className='login__input-error'></span>
            </li>
          </ul>
          <button className='login__btn'>Войти</button>
          <div className='login__text-box'>
            <p className='login__text'>Ещё не зарегистрированы?</p>
            <a className='login__link' href='/signup'>
              Регистрация
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
