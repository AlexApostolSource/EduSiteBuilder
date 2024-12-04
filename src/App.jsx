import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import PageContentTypeSelector from "./components/body/PageContentTypeSelector";
import { CustomFooter } from "./components/body/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaticPageContent from "./components/body/StaticPageContent/StaticPageContent";

function App() {
  return (
    <Router>
      <>
        <header>
          <Navbar />
        </header>

        <Routes>
          {/* Default Route - Dynamic List */}
          <Route path="/" element={<PageContentTypeSelector />} />

          {/* Route for the StaticPageContent */}
          <Route
            path="/:itemTitle"
            element={<StaticPageContent isPreviewing={false} />}
          />
        </Routes>

        <CustomFooter />
      </>
    </Router>
  );
}

export default App;
