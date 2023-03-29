import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const SideCart = ({ watchTime }) => {
  // console.log(watchTime);
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    setTime(getWatchTime);
    const getBreakTime = localStorage.getItem("breakTime");
    if (getBreakTime) {
      setBreakTime(getBreakTime);
    } else {
      setBreakTime(0);
    }
  }, [watchTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };

  const handleComplete = () => {
    toast("Wow you Completed!");
  };

  return (
    <div className="container text-center mt-5">
      <h1>My Cart</h1>
      <div className="mt-5 text-center">
        <h5>total watch time</h5>
        <input
          type="text"
          className="text-center form-control"
          value={time}
          disabled
        />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => handleBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button
        onClick={() => handleBreakTime(20)}
        className="w-25 btn-circle bg-warning btn btn-info"
      >
        20
      </button>
      <button
        onClick={() => handleBreakTime(25)}
        className="w-25 btn-circle m-1 bg-danger btn btn-info"
      >
        25
      </button>
      <input
        type="text"
        className="text-center mt-3 form-control"
        value={breakTime}
        disabled
      />
      <button
        onClick={handleComplete}
        className="mt-5 btn btn-info fw-bold fs-5 w-100"
      >
        Complete
      </button>
    </div>
  );
};

export default SideCart;
