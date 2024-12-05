import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import PageContentTypeSelector from "./components/body/PageContentTypeSelector";
import { CustomFooter } from "./components/body/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaticPageContent from "./components/body/StaticPageContent/StaticPageContent";
import { useState } from "react";
import { Actions } from "./assets/shared/Shared";

function App() {
  const [action, setAction] = useState(Actions.PREVIEW);
  const handleOnClickPreview = () => {
    setAction((prev) =>
      prev === Actions.EDIT ? Actions.PREVIEW : Actions.EDIT
    );
  };
  return (
    <Router>
      <>
        <header>
          <Navbar onClickPreview={handleOnClickPreview} action={action} />
        </header>

        <Routes>
          {/* Default Route - Dynamic List */}
          <Route
            path="/"
            element={
              <PageContentTypeSelector isPreviwing={action === Actions.EDIT} />
            }
          />

          {/* Route for the StaticPageContent */}
          <Route
            path="/:itemTitle"
            element={
              <StaticPageContent isPreviewing={action === Actions.EDIT} />
            }
          />
        </Routes>

        <CustomFooter />
      </>
    </Router>
  );
}

export default App;
