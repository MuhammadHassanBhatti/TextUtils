import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextUtilsForm from "./components/TextUtilsForm";
import Alerts from "./components/Alerts";
import Cards from "./components/Cards";
import About from "./components/About";
// import Practiceset from "./components/Practiceset";
// import Game from "./components/Game";
// import Hooks from "./components/Hooks";
import TanStackTable from "./components/TanStackTable";
import ProblemSoliving from "./components/ProblemSolving";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <TextUtilsForm mode={mode} showAlert={showAlert} />
      <Cards />

      <TanStackTable/>
      <ProblemSoliving/>
      <About />
      {/* <Game />
      <Practiceset /> */}
    </>
  );
}

export default App;
