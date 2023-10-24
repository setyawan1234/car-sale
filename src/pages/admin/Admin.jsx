import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputElement } from "@/components/input";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createProduct,
  deleteProduct,
  fetchCar,
  updateProduct,
} from "@/utils/state/car/reduce/reducer";
import Swal from "sweetalert2";
import { LoadingAnimation } from "@/components/loading";
import { Button2 } from "@/components/button";
import { IoPencil, IoTrash } from "react-icons/io5";
import Table from "@/components/table";
import { Number } from "@/components/number";
import { Link } from "react-router-dom";
const schema = z.object({
  id: z.string().optional(),
  nameProduct: z.string().min(3, { message: "Name must be at least 3 characters" }),
  priceProduct: z.number().min(1, { message: "Price must be at least 1" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
  imgSpec1: z.string().url({ message: "Image must be a valid URL" }),
  imgSpec2: z.string().url({ message: "Image must be a valid URL" }),
  description: z.string().min(3, { message: "Description must be more 3 characters" }),
  ovrLength: z.number().min(1, { message: "Ovr Length must be at least 1" }),
  ovrWidth: z.number().min(1, { message: "Ovr Width must be at least 1" }),
  ovrHeight: z.number().min(1, { message: "Ovr Height must be at least 1" }),
  seat: z.number().min(1, { message: "Seat must be at least 1" }),
  fuelTank: z.number().min(1, { message: "Fuel Tank must be at least 1" }),
});

export default function Admin() {
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car.data);
  const loading = useSelector((state) => state.car.loading);
  const error = useSelector((state) => state.car.error);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      priceProduct: 0,
      ovrLength: 0,
      ovrWidth: 0,
      ovrHeight: 0,
      seat: 0,
      fuelTank: 0,
    },
  });

  const columns = useMemo(
    () => [
      {
        header: "No",
        accessorKey: "id",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Name Product",
        accessorKey: "nameProduct",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Price Product",
        accessorKey: "priceProduct",
        cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                Rp <Number number={info.row.original.priceProduct}/>
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Overall Length",
        accessorKey: "ovrLength",cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                <Number number={info.row.original.ovrLength}/> mm
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Overall Width",
        accessorKey: "ovrWidth",
        cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                <Number number={info.row.original.ovrWidth}/> mm
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Overall Height",
        accessorKey: "ovrHeight",
        cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                <Number number={info.row.original.ovrHeight}/> mm
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Seating",
        accessorKey: "seat",
        cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                <Number number={info.row.original.seat}/> Persons
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Fuel Tank",
        accessorKey: "fuelTank",
        cell: (info) => (
            <div className="flex gap-1 items-center justify-center">
                <Number number={info.row.original.fuelTank}/> L
            </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Description",
        accessorKey: "description",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Image",
        accessorKey: "image",
        cell: (info) => (
          <div className="flex items-center justify-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={info.row.original.image}
                  alt={info.row.original.productName}
                />
              </div>
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Image Specification 1",
        accessorKey: "imgSpec1",
        cell: (info) => (
            <div className="flex items-center justify-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={info.row.original.imgSpec1}
                    alt={info.row.original.productName}
                  />
                </div>
              </div>
            </div>
          ),
        footer: (props) => props.column.id,
      },
      {
        header: "Image Specification 2",
        accessorKey: "imgSpec2",
        cell: (info) => (
            <div className="flex items-center justify-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={info.row.original.imgSpec2}
                    alt={info.row.original.productName}
                  />
                </div>
              </div>
            </div>
          ),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionEdit",
        cell: (info) => (
          <IoPencil
            aria-label="action-edit"
            onClick={() => onClickEdit(info.row.original)}
          />
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionDelete",
        cell: (info) => (
          <IoTrash
            aria-label="action-delete"
            onClick={() => onClickDelete(info.row.original.id)}
          />
        ),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

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

  async function onSubmitForm(data) {
    try {
      dispatch(createProduct(data));
      reset();
      dispatch(fetchCar());
    } catch (error) {
      throw error;
    }
  }

  async function onSubmitEditForm(data) {
    try {
      if (selectedId) {
        dispatch(updateProduct({ ...data, id: selectedId }));
        setSelectedId("");
      } else {
        dispatch(createProduct(data));
      }
      reset();
      dispatch(fetchCar());
    } catch (error) {
      throw error;
    }
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("nameProduct", data.nameProduct);
    setValue("priceProduct", data.priceProduct);
    setValue("image", data.image);
    setValue("imgSpec1", data.imgSpec1);
    setValue("imgSpec2", data.imgSpec2);
    setValue("description", data.description);
    setValue("ovrLength", data.ovrLength);
    setValue("ovrWidth", data.ovrWidth);
    setValue("ovrHeight", data.ovrHeight);
    setValue("seat", data.seat);
    setValue("fuelTank", data.fuelTank);
  }

  async function onClickDelete(id_product) {
    const confirmation = await Swal.fire({
      title: "Delete ?",
      text: "You want delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    });
    if (confirmation.isConfirmed) {
      try {
        dispatch(deleteProduct(id_product));
        Swal.fire({
          title: "Data telah berhasil dihapus!",
          text: "Success",
          icon: "success",
        });
        dispatch(fetchData());
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "warning",
        });
      }
    }
  }

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      <Navbar />

      <div className=" container mx-auto p-10 font-poppins">
      <Link to="/list-car" className="px-4 bg-slate-500 text-white rounded-3xl">List Car</Link>
        <div className="text-center flex flex-col items-center gap-5 py-5">
          <p className="text-[26px] font-bold">Admin</p>
          <p className="w-[50%]">
            In this page, the administrator role gives you access to manage all
            data operations with predefined policies. You have full authority to
            manage, edit, delete, and add data according to the needs and
            requirements that have been set.
          </p>
        </div>
        <div className="lg:px-80 py-[50px]">
          <p className="font-bold text-[26px] mb-5">Create Product</p>
          <form
            onSubmit={handleSubmit(
              setSelectedId === "" ? onSubmitForm : onSubmitEditForm
            )}
          >
            <InputElement
              id="nameProduct"
              aria-label="Name Product"
              for="nameProduct"
              name="nameProduct"
              label="Name Product"
              register={register}
              error={errors.nameProduct?.message}
              type="text"
            />
            <InputElement
              id="description"
              aria-label="Description Product"
              for="description"
              name="description"
              label="Description Product"
              register={register}
              error={errors.description?.message}
              type="text"
            />
            <InputElement
              id="priceProduct"
              aria-label="Price Product"
              for="priceProduct"
              name="priceProduct"
              label="Price Product"
              register={register}
              error={errors.priceProduct?.message}
              type="number"
            />
            <InputElement
              id="ovrLength"
              aria-label="Overall Length"
              for="ovrLength"
              name="ovrLength"
              label="Overall Length"
              register={register}
              error={errors.ovrLength?.message}
              type="number"
            />
            <InputElement
              id="ovrWidth"
              aria-label="Overall Width"
              for="ovrWidth"
              name="ovrWidth"
              label="Overall Width"
              register={register}
              error={errors.ovrWidth?.message}
              type="number"
            />
            <InputElement
              id="ovrHeight"
              aria-label="Overall Height"
              for="ovrHeight"
              name="ovrHeight"
              label="Overall Height"
              register={register}
              error={errors.ovrHeight?.message}
              type="number"
            />
            <InputElement
              id="seat"
              aria-label="Seating"
              for="seat"
              name="seat"
              label="Seating"
              register={register}
              error={errors.seat?.message}
              type="number"
            />
            <InputElement
              id="fuelTank"
              aria-label="Fuel Tank"
              for="fuelTank"
              name="fuelTank"
              label="Fuel Tank"
              register={register}
              error={errors.fuelTank?.message}
              type="number"
            />
            <InputElement
              id="image"
              aria-label="Image Product"
              for="image"
              name="image"
              label="Image Product"
              register={register}
              error={errors.image?.message}
              type="text"
            />
            <InputElement
              id="imgSpec1"
              aria-label="Image Specification 1"
              for="imgSpec1"
              name="imgSpec1"
              label="Image Specification 1"
              register={register}
              error={errors.imgSpec1?.message}
              type="text"
            />
            <InputElement
              id="imgSpec2"
              aria-label="Image Specification 2"
              for="imgSpec2"
              name="imgSpec2"
              label="Image Specification 2"
              register={register}
              error={errors.imgSpec2?.message}
              type="text"
            />
            <Button2
              label={selectedId ? "Edit Data" : "Add Data"}
              type="submit"
              bgColor="#0C71C3"
              color="white"
              id="btn-submit"
              aria-label="btn-submit"
            />
          </form>
        </div>
      </div>
      
      <Table datas={car} columns={columns} aria-label="product-table" />
      <Footer />
    </>
  );
}
