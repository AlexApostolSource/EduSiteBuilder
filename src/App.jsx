import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import PageContentTypeSelector from "./components/body/PageContentTypeSelector";
import { CustomFooter } from "./components/body/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Actions } from "./assets/shared/Shared";

export const Layout = ({ children }) => {
  const [action, setAction] = useState(Actions.PREVIEW);
  const handleOnClickPreview = () => {
    setAction((prev) =>
      prev === Actions.EDIT ? Actions.PREVIEW : Actions.EDIT
    );
  };
  return (
    <>
      <header>
        <Navbar onClickPreview={handleOnClickPreview} action={action} />
      </header>
      <main>{children}</main>
      <CustomFooter />
    </>
  );
};

function App() {
  const [action, setAction] = useState(Actions.PREVIEW);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PageContentTypeSelector isPreviwing={action === Actions.EDIT} />
            }
          />
          <Route
            path="/:itemTitle"
            element={
              <PageContentTypeSelector isPreviwing={action === Actions.EDIT} />
            }
          />
          <Route
            path="/:parentTitle/:itemTitle"
            element={
              <PageContentTypeSelector isPreviwing={action === Actions.EDIT} />
            }
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
