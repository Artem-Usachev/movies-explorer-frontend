import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__content">
        <p className="footer__copyright">&copy;2022</p>
        <ul className="footer__link-bar">
          <li className="footer__link-bar-piont">
            <a className="footer__link" href="/">
              <p className="footer__link-text">Яндекс.Практикум</p>
            </a>
          </li>
          <li className="footer__link-bar-piont">
            <a className="footer__link" href="/">
              <p className="footer__link-text">Github</p>
            </a>
          </li>
          <li className="footer__link-bar-piont">
            <a className="footer__link" href="/">
              <p className="footer__link-text">Facebook</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
