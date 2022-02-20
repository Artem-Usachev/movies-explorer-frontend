import React from "react";
import studentImg from "../../images/student-img.jpg";
const Student = () => {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__content">
        <div className="student__info">
          <div className="student__text-box">
            <h3 className="student__subtitle">Артем</h3>
            <h4 className="student__semi-title">
              Фронтенд-разработчик, 24 года
            </h4>
            <p className="student__text">
              Я родился и живу в Екатеринбурге, закончил Екатеринбургский
              театральный институт.
            </p>
            <ul className="student__link-bar">
              <li className="student__link-bar-point">
                <a className="student__link" href="/">
                  <p className="student__link-text">Facebook</p>
                </a>
              </li>
              <li className="student__link-bar-point">
                <a className="student__link" href="/">
                  <p className="student__link-text"> Github</p>
                </a>
              </li>
            </ul>
          </div>
          <img
            className="student__img"
            alt="Портрет студента"
            src={`${studentImg}`}
          />
        </div>
      </div>
    </section>
  );
};
export default Student;
