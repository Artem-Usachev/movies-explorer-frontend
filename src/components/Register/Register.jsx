import React from 'react';
const Signin = () => {
  return (
    <section className='signin'>
      <div className='signin__content'>
        <a className='signin__logo' href='/'></a>
        <h1 className='signin__title'>Добро пожаловать!</h1>
        <form className='signin__form'>
          <ul className='signin__form-input-bar'>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>Имя</p>
              <input className='signin__input'></input>
              <span className='signin__input-error'></span>
            </li>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>E-mail</p>
              <input className='signin__input' type='email'></input>
              <span className='signin__input-error'></span>
            </li>
            <li className='signin__form-input-bar-point'>
              <p className='signin__hint'>Пароль</p>
              <input className='signin__input' type='password'></input>
              <span className='signin__input-error'></span>
            </li>
          </ul>
          <button className='signin__btn'>Зарегистрироваться</button>
          <div className='signin__text-box'>
            <p className='signin__text'>Уже зарегистрированы?</p>
            <a className='signin__link' href='/signin'>
              Войти
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Signin;
