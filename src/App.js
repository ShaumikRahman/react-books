import { useState } from "react";
import Main from "./components/Main";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Jump from "./components/Jump";

function App() {
  const [mode, setMode] = useState("By Title");
  
  

  function handleSwitch(requestedMode) {
    setMode(requestedMode);
    //console.log(requestedMode);
  }

  function render(mode) {
    switch (mode) {
      case "By Title":
        return <Main type='title'/>;

      case 'By Author' :
        return <Main type='author'/>;

      case 'By Genre' :
        return <Main type='subject'/>;
      
      case 'By ISBN' :
        return <Main type='isbn'/>;

      default:
        return <Main type='title'/>;
    }
  }

  return <div className="App">
    <Navbar handleSwitch={handleSwitch}/>
    <Title title={mode} />
    {render(mode)}
    <Jump />
  </div>;
}

export default App;
