import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavigationBar/Navbar";
import ContentBox from "./Components/ContentBox/ContentBox";
function App() {
  let [state, setState] = useState(0);
  const changeContent = (index) => {
    console.log("Entered change content card" + index);
    setState(index);
  };

  return (
    <div className="App">
      <NavBar changeContent={changeContent} />
      <ContentBox NavValue={state} />
    </div>
  );
}

export default App;
