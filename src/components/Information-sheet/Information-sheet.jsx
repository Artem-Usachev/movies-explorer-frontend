import React from "react";

const InformationSheet = () => {
  return (
    <section className="information-sheet">
      <h1 className="information-sheet__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="information-sheet-link-bar">
        <a className="information-sheet-link" href="/project">
          О проекте
        </a>
        <a className="information-sheet-link" href="/">
          Технологии
        </a>
        <a className="information-sheet-link" href="/">
          Студент
        </a>
      </div>
    </section>
  );
};
export default InformationSheet;
