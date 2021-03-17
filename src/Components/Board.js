import { Button } from "bootstrap";
import React from "react";
import InputButtons from "./Buttons";

//=============================Component: Board ===========================================

class Board extends React.Component {
  constructor() {
      super();
    <InputButtons></InputButtons>;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <h1> The Best Calculator!</h1>
            <div className="card" styleName="width: 18rem;">
              
              <InputButtons></InputButtons>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}
export default Board;
