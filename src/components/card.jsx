import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Button2 } from "./button";

export default function Card(props) {
  const { datas = [] } = props;
  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex justify-between items-center px-44 pt-12 pb-24">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <BiSolidCategoryAlt className="h-8 w-8 text-[#FF7A00]" />
              <p className="font-semibold text-[20px] text-[#FF7A00] underline underline-offset-[6px]">
                Car Selection Car-Sale Malang
              </p>
            </div>
            <p className="ml-[45px] w-[503px] text-[14px]">
              Discover a wide selection of cars specially designed with
              precision through modern technology and stylish design to suit
              your style. Trust our Dealer Car-Sale Malang PT. SUKA MAJU MUNDUR
              Authorized Pak Sugeng Jaya.
            </p>
          </div>
          <button className="rounded-3xl bg-[#0C71C3] text-white px-5 py-2 mt-[-100px] cursor-pointer">
            See All Prices
          </button>
        </div>

        <div className="px-12 grid grid-cols-3 gap-5 mb-24">
          {datas.map((data, index) => (
            <div
              className="flex flex-col items-center text-center gap-2"
              key={index}
            >
              <p className="font-semibold text-[20px]">{data.nameProduct}</p>
              <p className="bg-[#EF0000] text-white w-[450px] p-2 rounded-3xl mb-2">
                Start Price $ ({data.priceProduct})
              </p>
              <img
                src={data.image}
                alt=""
                className="w-[420px] object-cover"
              />
              <div className="flex gap-5 mb-12">
                <Button2
                  label="Buy"
                  borderColor="#0C71C3"
                  bgColor="#0C71C3"
                  color="white"
                />
                <Button2 label="Detail" borderColor="#0C71C3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
