import { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "./components/Navbar";
import TextUtilsForm from "./components/TextUtilsForm";
import Alerts from "./components/Alerts";
import HandleForm from "./components/HandleForm";
import About from "./components/About";
import Cards from "./components/Cards";
import InputFieldSearch from "./components/InputFieldSearch";
// import ProblemSolving from "./components/ProblemSolving";
// import Practiceset from "./components/Practiceset";
// import Game from "./components/Game";
// import Hooks from "./components/Hooks";
// import TanStackTable from "./components/TanStackTable";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [increment, setIncrement] = useState(0);

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

  const incrementedValue = () => {
    setIncrement((prev) => {
      const currentValue = prev + 1;
      console.log(currentValue);
      return currentValue;
    });
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <TextUtilsForm mode={mode} showAlert={showAlert} />
      {/* <Button
        style={{
          margin: "20px 0px 20px 50px",
          padding: "10px",
          color: "white",
          backgroundColor: "black",
        }}
        onClick={incrementedValue}
      >
        Increment
      </Button> */}
      {/* <InputFieldSearch /> */}
      {/* <About /> */}
      {/* <Cards /> */}
      {/* <HandleForm /> */}
      {/* <ProblemSolving /> */}
      {/* <TanStackTable /> */}
      {/* <Game /> */}
      {/* <Practiceset />  */}
    </>
  );
}

export default App;
