import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  // console.log(uniqueId);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    // console.log("hello from useEffect");
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setModalData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);

  // console.log(modalData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12">
        {
          data.slice(0, showAll ? 12 : 6).map((singleData) => (
            <SingleData
              singleData={singleData}
              key={singleData.id}
              setUniqueId={setUniqueId}
            />
          ))

          // data.map((singleData) => {
          //     <SingleData singleData={singleData} key={} />
          // })
        }
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
      <Modal modalData={modalData} />
    </>
  );
};

export default Card;
