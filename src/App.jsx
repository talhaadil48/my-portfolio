import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

// Layout component
function Layout({ children, title = "My Default Tab Name", favicon = "/favicon.svg" }) {
  useEffect(() => {
    document.title = title; // set tab name
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon; // set favicon
    }
  }, [title, favicon]);

  return <>{children}</>;
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout title="Portfolio" favicon="/favicon.svg">
                <Home />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout title="Page Not Found" favicon="/favicon.svg">
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
