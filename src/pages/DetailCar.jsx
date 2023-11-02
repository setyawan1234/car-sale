import { LoadingAnimation } from "@/components/loading";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { Number } from "@/components/number";
import React from "react";
import { Button2 } from "@/components/button";
import { detailProduct } from "@/utils/apis/products/api";

export default function DetailCar() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productId = useParams(); //mengambil id dari url 

  useEffect(() => {
    detailDataProduct();
  }, []);

  async function detailDataProduct() {
    try {
      const result = await detailProduct(productId.id);
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Navbar />

          <div className="bg-neutral-100 font-poppins ">
            <div className="container mx-auto flex lg:justify-between lg:items-center lg:flex-row flex-col py-6">
              <div className="py-10 px-10">
                <div className="flex gap-1 items-center text-xs">
                  <Link
                    to="/list-car"
                    className="rounded-full bg-slate-500 px-4 py-1 text-white"
                  >
                    Back to List Car
                  </Link>
                  <p className="font-semibold">/ {products.nameProduct}</p>
                </div>
                <p className="text-3xl font-bold py-4">
                  {products.nameProduct}
                </p>
                <hr className="border-dashed border-black mb-5" />
                <p>Prices start form</p>
                <div className="flex gap-2 font-bold text-3xl mb-1">
                  <p>Rp</p>
                  <Number number={products.priceProduct} />
                </div>
                <p className="text-[10px]">*Car Price Car-Sale Malang</p>
              </div>
              <div>
                <img src={products.image} alt="image" className="h-56 visible lg:visible hidden lg:block" />
              </div>
            </div>
          </div>
          <hr className="border-1 border-black border-dotted" />
          <div className="bg-neutral-100">
            <div className=" container mx-auto font-poppins lg:p-20 p-10">
            <p className="font-bold text-[26px] mb-2">{products.nameProduct}</p>
              <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-5">
                <p className="lg:w-[600px] text-[14px]">
                  {products.description}
                </p>
                <div className="flex lg:flex-row flex-col gap-5">
                  <Button2
                    label="Download the Brosue"
                    bgColor="#C40000"
                    color="white"
                  />
                  <Button2 label="Contact Us" bgColor="#0C71C3" color="white" />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-5 justify-between my-12 lg:items-center text-center lg:mt-24">
                <img
                  src={products.image}
                  alt="image"
                  className="lg:h-[400px] md:h-[250px] rounded-2xl"
                />
                <div className="flex flex-col">
                  <p className="mb-5">Specification</p>
                  <div className="flex lg:gap-32 gap-[80px] bg-slate-200 mb-3">
                    <p>OVERALL LENGTH</p>
                    <div className="flex gap-1 items-center justify-center">
                      <Number number={products.ovrLength} /> mm
                    </div>
                  </div>
                  <div className="flex lg:gap-[135px] gap-[90px] mb-3">
                    <p>OVERALL WIDTH</p>
                    <div className="flex gap-1 items-center justify-center">
                      <Number number={products.ovrWidth} /> mm
                    </div>
                  </div>
                  <div className="flex lg:gap-[130px] gap-[85px] bg-slate-200 mb-3">
                    <p>OVERALL HEIGHT</p>
                    <div className="flex gap-1 items-center justify-center">
                      <Number number={products.ovrHeight} /> mm
                    </div>
                  </div>
                  <div className="flex lg:gap-[190px] gap-[145px] mb-3">
                    <p>SEATING</p>
                    <p>{products.seat} Persons</p>
                  </div>
                  <div className="flex lg:gap-[165px] gap-[120px] mb-3 bg-slate-200">
                    <p>FUEL TANKS</p>
                    <p>{products.fuelTank} L</p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto text-center mt-24">
                <p className="font-bold text-[26px]">FULL SPECIFICATION</p>
                <div className="flex lg:items-center gap-20 lg:justify-center lg:flex-row flex-col mt-10">
                  <img
                    src={products.imgSpec1}
                    alt="image"
                    className="lg:h-[600px]"
                  />
                  <img
                    src={products.imgSpec2}
                    alt="image"
                    className="lg:h-[600px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
