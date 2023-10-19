import Card from "@/components/card";
import { Footer } from "@/components/footer";
import { ServiceProduct } from "@/components/homepage/serviceProduct";
import { LoadingAnimation } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { fetchCar } from "@/utils/state/car/reduce/reducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

    if (loading) return <LoadingAnimation/>;
    if (error) return <p>error</p>;
  return (
    <>
      <Navbar />

      <Card
      datas={car}
      />

      <Footer />
    </>
  );
}
