import React from 'react';
import Card from '../Card/Card';
import loopImg from '../../images/loop.svg';

const MoviesPlace = ({ savedMoviesMargin, cards, btnCondishion }) => {
  return (
    <section className={`movies ${savedMoviesMargin}`}>
      <form className='movies__search-from'>
        <div className='movies__search-bar'>
          <div className='movies__search-input-bar'>
            <img
              className='movies__search-loop-img'
              alt='лупа'
              src={`${loopImg}`}
            />
            <input className='movies__search-input' placeholder='Фильм' required></input>
          </div>
          <div className='movies__serch-btn-box'>
            <button className='movies__search-btn'></button>
            <label htmlFor='short-films' className='movies__search-btn-label'>
              <input
                id='short-films'
                type='checkbox'
                className='movies__search-btn-invisible'
                name='short-films'
              />
              <span className='movies__search-btn-visible' />
              <span className='movies__search-title'>Короткометражки</span>
            </label>
          </div>
        </div>
      </form>
      <div className='movies__card'>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
      <button className={`movies__button ${btnCondishion}`}>Ещё</button>
    </section>
  );
};
export default MoviesPlace;
