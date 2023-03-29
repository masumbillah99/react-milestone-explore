import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    // if found
    if (previousWatchTime) {
      const newWatchTime = previousWatchTime + time;
      localStorage.setItem("watchTime", newWatchTime);
      setWatchTime(newWatchTime);
    } // else not found
    else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  return (
    <div className="App">
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart watchTime={watchTime} />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
