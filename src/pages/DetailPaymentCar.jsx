import React from "react";
import { Link, useParams } from "react-router-dom";
import Union from "../assets/Union.png";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "@/utils/apis/products/api";
import { Navbar } from "@/components/navbar";
import ListHistory from "@/components/listHistory";
import { Footer } from "@/components/footer";

export default function History() {
  const productId = useParams();
  const [listHistory, setListHistory] = useState([]);

  useEffect(() => {
    detailHistoryShop();
  }, []);

  async function detailHistoryShop() {
    try {
      const result = await getProducts();
      setListHistory(result);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <Navbar />

      <ListHistory datas={listHistory} />
      
      <Footer />
    </>
  );
}
