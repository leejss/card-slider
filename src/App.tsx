import React from "react";
import "./App.css";
import Card from "./Card";

const Buffer = () => {
  return <div className="Buffer"></div>;
};

const App = () => {
  return (
    <div className="App">
      <div className="SlideContainer">
        <div className="SlideWrapper">
          <div className="CardList">
            <Card first />
            <Card />
            <Card />
            <Card />
            <Card last />
          </div>
          <div className="Hello">helo</div>
        </div>
      </div>
    </div>
  );
};

export default App;
