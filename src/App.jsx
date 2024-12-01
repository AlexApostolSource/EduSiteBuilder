import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import PageContentTypeSelector from "./components/body/PageContentTypeSelector";
import { CustomFooter } from "./components/body/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <PageContentTypeSelector />
      <CustomFooter></CustomFooter>
    </>
  );
}

export default App;
