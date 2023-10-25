import Card from "@/components/card";
import { Footer } from "@/components/footer";
import { LoadingAnimation } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { fetchCar } from "@/utils/state/car/reduce/reducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidCategoryAlt } from "react-icons/bi";
export default function ListCar() {
  const car = useSelector((state) => state.car.data);
  const loading = useSelector((state) => state.car.loading);
  const error = useSelector((state) => state.car.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataCar();
  }, []);

  async function getDataCar() {
    try {
      dispatch(fetchCar());
    } catch (error) {
      throw error;
    }
  }

  if (loading) return <LoadingAnimation />;
  if (error) return <p>error</p>;
  return (
    <>
      <Navbar />

      <div className="container mx-auto font-poppins">
        <div className="flex lg:justify-between lg:items-center lg:flex-row lg:px-44 lg:pt-12 lg:pb-16 flex-col items-start px-5 py-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <BiSolidCategoryAlt className="h-8 w-8 text-[#FF7A00]" />
              <p className="font-semibold text-[20px] text-[#FF7A00] underline underline-offset-[6px]">
                Car Selection Car-Sale Malang
              </p>
            </div>
            <p className="ml-[45px] lg:w-[503px] text-[14px]">
              Discover a wide selection of cars specially designed with
              precision through modern technology and stylish design to suit
              your style. Trust our Dealer Car-Sale Malang <strong>PT. SUKA MAJU MUNDUR </strong>
              Authorized Pak Sugeng Jaya.
            </p>
          </div>
          <button className="rounded-3xl   cursor-pointer px-5 py-2 lg:mt-[-100px] mt-5 bg-[#0C71C3] text-white">
            See All Prices
          </button>
        </div>

        <Card datas={car} />
      </div>

      <Footer />
    </>
  );
}
