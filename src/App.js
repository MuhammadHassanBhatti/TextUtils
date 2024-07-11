import { useState } from "react";
import Navbar from "./components/Navbar";
import TextUtilsForm from "./components/TextUtilsForm";
import Alerts from "./components/Alerts";
import About from "./components/About";
import Cards from "./components/Cards";
// import TanStackTable from "./components/TanStackTable";
// import { Button } from "@mui/material";
// import HandleForm from "./components/HandleForm";
import InputFieldSearch from "./components/InputFieldSearch";
// import ProblemSolving from "./components/ProblemSolving";
// import Practiceset from "./components/Practiceset";
// import Game from "./components/Game";
// import Hooks from "./components/Hooks";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [increment, setIncrement] = useState(0);
  // const [incre, setIncre] = useState(0);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#010a11";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  // const incrementedValue = () => {
  //   setIncrement(increment + 1);
  //   console.log(increment);
  //   // Output 0 on first Click
  // };

  // const increValue = () => {
  //   setIncre((prev) => {
  //     const newValue = prev + 1;
  //     console.log(newValue);
  //     // Output 1 on first Click
  //     return newValue;
  //   });
  // };

  //Functions Defining :

  // 1 >>> function a() {
  // }
  // 2 >>> const b = function () {
  // };
  // 3 >>> const c = () => {
  // };

  //Lexical Envoirment :
  // function a() {
  //   c();
  //   function c() {
  //     console.log(b);
  //   }
  // }
  // var b = 10;
  // a();
  //Output 10

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <TextUtilsForm mode={mode} showAlert={showAlert} />

      {/* <Button
        style={{
          backgroundColor: mode === "light" ? "black" : "white",
          color: mode === "light" ? "white" : "black",
          margin: "20px 0px 20px 50px",
          padding: "10px",
        }}
        onClick={incrementedValue}
      >
        Increment
      </Button>
      <Button
        style={{
          backgroundColor: mode === "light" ? "black" : "white",
          color: mode === "light" ? "white" : "black",
          margin: "20px 0px 20px 50px",
          padding: "10px",
        }}
        onClick={increValue}
      >
        Incre Value
      </Button> */}
      <About />
      <Cards />
      <InputFieldSearch />
      {/* <TanStackTable /> */}
      {/* <HandleForm /> */}
      {/* <ProblemSolving /> */}
      {/* <Game /> */}
      {/* <Practiceset />  */}
    </>
  );
}

export default App;
