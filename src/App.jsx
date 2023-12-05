import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertProvider } from './alert/useAlert';
import Layout from './layout/Layout';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState("");

  return (
    <>
      <AlertProvider>
      <Layout />
      </AlertProvider>
    </>
  );
}

export default App;
