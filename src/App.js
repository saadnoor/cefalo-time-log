import React from 'react';
import logo from './assets/gamer-monochrome.svg';
import './App.css';
import { useStyletron } from 'baseui';
import Navbar from './components/navbar';
import TimeLogForm from './components/timelogform'
import { styled } from "styletron-react";


import { Button } from "baseui/button";
const TimeLog = styled("div", {
  maxHeight: "800px",
  overflow: "auto"
});

function App() {
  const [css, theme] = useStyletron();
  return (
    <React.Fragment>
      <div
        className={css({
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Navbar></Navbar>
        <TimeLog>
          <TimeLogForm />
        </TimeLog>
        {/* <img
          src={logo}
          width="300px"
          alt="Logo" /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
