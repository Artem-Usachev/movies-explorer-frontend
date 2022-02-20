import React from 'react';
import Header from '../Header/Header';
import studentImg from '../../images/student-img.jpg';
import portfolioArrow from '../../images/arrow.svg';
const Main = () => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <section className='information-sheet'>
        <h1 className='information-sheet__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className='information-sheet-link-bar'>
          <a className='information-sheet-link' href='/'>
            О проекте
          </a>
          <a className='information-sheet-link' href='/'>
            Технологии
          </a>
          <a className='information-sheet-link' href='/'>
            Студент
          </a>
        </div>
      </section>
      <div className='content'>
        <section className='project'>
          <h2 className='project__title'>О проекте</h2>
          <div className='project__text-box'>
            <div className='project__text-box-point'>
              <h3 className='project__subtitle'>
                Дипломный проект включал 5 этапов
              </h3>
              <p className='project__text'>
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className='project__text-box-point'>
              <h3 className='project__subtitle'>
                На выполнение диплома ушло 5 недель
              </h3>
              <p className='project__text'>
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className='project__timelapse'>
            <div className='project__timelapse-table project__timelapse-table-column-left'>
              <div className='project__timelapse-text-box project__timelapse-text-box-left'>
                <p className='project__timelaps-text'>1 неделя</p>
              </div>
              <div className='project__timelapse-text-box '>
                <p className='project__timelaps-text-en'>Back-end</p>
              </div>
            </div>
            <div className='project__timelapse-table project__timelapse-table-column-right'>
              <div className='project__timelapse-text-box project__timelapse-text-box-right'>
                <p className='project__timelaps-text'>4 недели</p>
              </div>
              <div className='project__timelapse-text-box '>
                <p className='project__timelaps-text-en'>Front-end</p>
              </div>
            </div>
          </div>
        </section>
        <section className='technology'>
          <h2 className='technology__title'>Технологии</h2>
          <div className='technology__content'>
            <h3 className='technology__subtitle'>7 технологий</h3>
            <p className='technology__text'>
              На курсе веб-разработки мы освоили технологии, которые применили в
              дипломном проекте.
            </p>
            <ul className='technology__link-bar'>
              <li className='technology__link-bar-point'>
                <a className='technology__link' href='https://doka.guide/html/'>
                  <p className='technology__link-text'> HTML</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a className='technology__link' href='https://doka.guide/css/'>
                  <p className='technology__link-text'> CSS</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a className='technology__link' href='https://doka.guide/js/'>
                  <p className='technology__link-text'> JS</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a
                  className='technology__link'
                  href='https://reactjs.org/docs/getting-started.html'
                >
                  <p className='technology__link-text'> React</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a className='technology__link' href='https://git-scm.com/doc'>
                  <p className='technology__link-text'> Git</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a className='technology__link' href='https://expressjs.com/'>
                  <p className='technology__link-text'> Express.js</p>
                </a>
              </li>
              <li className='technology__link-bar-point'>
                <a
                  className='technology__link'
                  href='https://docs.mongodb.com/'
                >
                  <p className='technology__link-text'> mongoDB</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='student'>
          <h2 className='student__title'>Студент</h2>
          <div className='student__content'>
            <div className='student__info'>
              <div className='student__text-box'>
                <h3 className='student__subtitle'>Артем</h3>
                <h4 className='student__semi-title'>
                  Фронтенд-разработчик, 24 года
                </h4>
                <p className='student__text'>
                  Я родился и живу в Екатеринбурге, закончил Екатеринбургский
                  театральный институт.
                </p>
                <ul className='student__link-bar'>
                  <li className='student__link-bar-point'>
                    <a className='student__link' href='/'>
                      <p className='student__link-text'>Facebook</p>
                    </a>
                  </li>
                  <li className='student__link-bar-point'>
                    <a className='student__link' href='/'>
                      <p className='student__link-text'> Github</p>
                    </a>
                  </li>
                </ul>
              </div>
              <img
                className='student__img'
                alt='Портрет студента'
                src={`${studentImg}`}
              />
            </div>
          </div>
        </section>
        <section className='portfolio'>
          <h4 className='portfolio__title'>Портфолио</h4>
          <ul className='portfolio__link-bar'>
            <li className='portfolio__link-bar-point'>
              <a className='portfolio__link' href='/'>
                <p className='portfolio__link-text'>Статичный сайт</p>
                <img
                  className='portfolio__link-img'
                  alt='стрелочка'
                  src={`${portfolioArrow}`}
                />
              </a>
            </li>
            <li className='portfolio__link-bar-point'>
              <a className='portfolio__link' href='/'>
                <p className='portfolio__link-text'>Адаптивный сайт</p>
                <img
                  className='portfolio__link-img'
                  alt='стрелочка'
                  src={`${portfolioArrow}`}
                />
              </a>
            </li>
            <li className='portfolio__link-bar-point'>
              <a className='portfolio__link' href='/'>
                <p className='portfolio__link-text'>
                  Одностраничное приложение
                </p>
                <img
                  className='portfolio__link-img'
                  alt='стрелочка'
                  src={`${portfolioArrow}`}
                />
              </a>
            </li>
          </ul>
        </section>
        <section className='footer'>
          <h2 className='footer__title'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
          <div className='footer__content'>
            <p className='footer__copyright'>&copy;2022</p>
            <ul className='footer__link-bar'>
              <li className='footer__link-bar-piont'>
                <a className='footer__link' href='/'>
                  <p className='footer__link-text'>Яндекс.Практикум</p>
                </a>
              </li>
              <li className='footer__link-bar-piont'>
                <a className='footer__link' href='/'>
                  <p className='footer__link-text'>Github</p>
                </a>
              </li>
              <li className='footer__link-bar-piont'>
                <a className='footer__link' href='/'>
                  <p className='footer__link-text'>Facebook</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
