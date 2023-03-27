import React, { useState } from "react";
import { info } from "../../../info";

const ArrayExamples = () => {
  const [data, setData] = useState(info);
  return (
    <div className="text-center text-xl font-bold my-2">
      {data.map((sData) => {
        <p>{sData.name}</p>;
      })}
    </div>
  );
};

export default ArrayExamples;
