import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";


import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer className="d-flex justify-content-center p-3" Saludos="Animal House"/>

    </Fragment>
  );
}

export default App;
