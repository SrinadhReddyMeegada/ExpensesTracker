import reactImg from "./assets/react-core-concepts.png";
import CoreConcept from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function App() {
  return (
    <div>
      <Header image={reactImg}></Header>
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
