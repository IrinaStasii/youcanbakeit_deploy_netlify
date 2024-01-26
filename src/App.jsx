import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AlertProvider } from "./alert/useAlert";
import Layout from "./layout/Layout";
import { ShoppingCartProvider } from "./pages/Kit_pages/ShoppingCartContext";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");

  return (
    <>
      <AlertProvider>
        <ShoppingCartProvider>
          <Layout />
        </ShoppingCartProvider>
      </AlertProvider>
    </>
  );
}

export default App;
