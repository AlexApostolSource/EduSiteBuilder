import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import PageContentTypeSelector from "./components/body/PageContentTypeSelector";

function App() {
  return (
    <>
      <Navbar />
      <PageContentTypeSelector />
    </>
  );
}

export default App;
