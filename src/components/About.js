import React from "react";
import "./About.css";

const About = () => (
  <div className="about">
    <h4 className="about__header">About</h4>
    <p> Добрый День!</p>
    <p>
      Дробить и улучшать можно до бесконечности, поэтому остановлюсь на этом
      варианте. При необходимости могу доработать
    </p>
    <p>
      Так и хочется не придумывать классы по БЭМУ, а использовать
      styled-components. Или хотя бы module.css
    </p>
    <p>
      В последний момент{" "}
      <a href="https://usehooks.com/useLocalStorage/">useLocalStorage</a>{" "}
      привинтил. Так ведь удобнее.
    </p>
  </div>
);

export default About;
