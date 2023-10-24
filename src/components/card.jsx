import React from "react";
import { Button2 } from "./button";
import { Link } from "react-router-dom";
import { Number } from "./number";

export default function Card(props) {
  const { datas = [] } = props;
  return (
    <>
      <div className="lg:px-12 lg:grid lg:grid-cols-3 gap-5 mt-5 px-5">
        {datas.map((data, index) => (
          <div
            className="flex flex-col items-center text-center gap-2"
            key={index}
          >
            <p className="font-semibold text-[20px]">{data.nameProduct}</p>
            <div className="flex justify-center gap-2 lg:w-[450px] w-[275px] p-2 rounded-3xl mb-2 text-white bg-[#EF0000] ">
              <p>Start Price Rp</p>
              <Number number={data.priceProduct} />
            </div>
            <img src={data.image} alt="" className="w-[420px] object-cover" />
            <div className="flex gap-5 mb-12">
              <Button2
                label="Buy"
                borderColor="#0C71C3"
                bgColor="#0C71C3"
                color="white"
              />
              <Link to={`/detail-car/${data.id}`}>
                <Button2 label="Detail" borderColor="#0C71C3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
