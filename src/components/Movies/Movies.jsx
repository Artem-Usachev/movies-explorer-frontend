import React from 'react';
import Header from '../Header/Header';
import loopImg from '../../images/loop.svg';
const Movies = () => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <section className='movies'>
        <form className='movies__search-from'>
          <div className='movies__search-bar'>
            <img
              className='movies__search-loop-img'
              alt='лупа'
              src={`${loopImg}`}
            />
            <input className='movies__search-input'></input>
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
        </form>
      </section>
    </>
  );
};
export default Movies;
