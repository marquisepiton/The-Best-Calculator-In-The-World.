import { Button } from "bootstrap";
import React from "react";

//=============================Component: Buttons ===========================================

class InputButtons extends React.Component {
  constructor() {
    super();

    this.numbers = {
      0: <button>0</button>,
      1: <button>1</button>,
      2: <button>2</button>,
      3: <button>3</button>,
      4: <button>4</button>,
      5: <button>5</button>,
      6: <button>6</button>,
      7: <button>7</button>,
      8: <button>8</button>,
      9: <button>9</button>,
    };

    this.clear = <button>C</button>;
    this.back = <button>B</button>;
    this.percent = <button>%</button>;
    this.division = <button>/</button>;
    this.multiplication = <button>X</button>;
    this.subtraction = <button>-</button>;
    this.decimal = <button>.</button>
    this.addition = <button>+</button>;
    this.equal = <button>=</button>;
    this.outputBox = 0;
  }

  render() {
    return (
      <div>
        <div className="card-header">{this.outputBox}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                {/* Row 1 */}
                <div className="col-sm">{this.clear}</div>
                <div className="col-sm">{this.back}</div>
                <div className="col-sm">{this.percent}</div>
                <div className="col-sm">{this.division}</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                {/* Row 1 */}
                <div className="col-sm">{this.numbers[7]}</div>
                <div className="col-sm">{this.numbers[8]}</div>
                <div className="col-sm">{this.numbers[9]}</div>
                <div className="col-sm">{this.multiplication}</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                {/* Row 1 */}
                <div className="col-sm">{this.numbers[4]}</div>
                <div className="col-sm">{this.numbers[5]}</div>
                <div className="col-sm">{this.numbers[6]}</div>
                <div className="col-sm">{this.subtraction}</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                {/* Row 1 */}
                <div className="col-sm">{this.numbers[1]}</div>
                <div className="col-sm">{this.numbers[2]}</div>
                <div className="col-sm">{this.numbers[3]}</div>
                <div className="col-sm">{this.addition}</div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                {/* Row 1 */}
                <div className="col-sm">{this.decimal}</div>
                <div className="col-sm">{this.numbers[0]}</div>
                <div className="col-sm">{this.equal}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default InputButtons;
