import React from "react";
import portfolioArrow from "../../images/arrow.svg";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__link-bar">
        <li className="portfolio__link-bar-point">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-img"
              alt="стрелочка"
              src={`${portfolioArrow}`}
            />
          </a>
        </li>
        <li className="portfolio__link-bar-point">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-img"
              alt="стрелочка"
              src={`${portfolioArrow}`}
            />
          </a>
        </li>
        <li className="portfolio__link-bar-point">
          <a className="portfolio__link" href="/">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-img"
              alt="стрелочка"
              src={`${portfolioArrow}`}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
