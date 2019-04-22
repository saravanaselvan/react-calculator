import React from "react";
import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calc-container">
      <div className="output" />
      <div className="buttons">
        <div className="row">
          <div id="seven">7</div>
          <div id="eight">8</div>
          <div id="nine">9</div>
          <div id="multiply">x</div>
        </div>
        <div className="row">
          <div id="four">4</div>
          <div id="five">5</div>
          <div id="six">6</div>
          <div id="minus">-</div>
        </div>
        <div className="row">
          <div id="one">1</div>
          <div id="two">2</div>
          <div id="three">3</div>
          <div id="plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
