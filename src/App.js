import { useState } from "react";
import BookMode from "./components/BookMode";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("Books");

  function handleSwitch(requestedMode) {
    setMode(requestedMode);
    //console.log(requestedMode);
  }

  function render(mode) {
    switch (mode) {
      case "Books":
        return <BookMode />;

      // case 'Author' :
      //   return <AuthorMode handleData={handleData}>;

      default:
        return <BookMode />;
    }
  }

  return <div className="App">
    <Navbar handleSwitch={handleSwitch}/>
    <Title title={mode} />
    {render(mode)}
  </div>;
}

export default App;
