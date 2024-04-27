import { React } from "react";
import IndexLayout from "./layouts/IndexLayout/IndexLayout";
import { ToastContainer } from "react-toastify";

import "./App.scss";

const App = () => {
  return (
    <>
      <IndexLayout />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnVisibilityChange
        rtl={false}
        draggable
        pauseOnHover={true}
      />
    </>
  );
};

export default App;
