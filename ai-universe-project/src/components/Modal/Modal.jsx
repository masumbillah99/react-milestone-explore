import React from "react";

const Modal = (props) => {
  console.log(props.modalData);
  const { image_link, description, integrations, features } = props.modalData;
  // console.log(image_link);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
            <figure>
              <img src={image_link && image_link[1]} alt="Album" />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
