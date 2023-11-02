import React from "react";
import Union from "../assets/Union.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Number } from "@/components/number";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputPayment, SelectOption } from "@/components/input";
import { ShippingMethod } from "@/components/shippingMethod";
import { LoadingAnimation } from "@/components/loading";

import { createProduct, detailProduct } from "@/utils/apis/products/api";

const schema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Email is required" }),
  fullName: z.string().min(1, { message: "Name is required" }),
  nameCar: z.string().min(1, { message: "Name Car is required" }),
  numberCard: z.number().min(5, { message: "Number Card is required" }),
  price: z.number().min(1, { message: "Price Product is required" }),
  selectPayment: z
    .string()
    .min(1, { message: "Select Payment is required " })
    .nullable(),
  image: z.any().refine((files) => files?.length == 1, {
    message: "Image Payment is required",
  }),
});

export default function BuyCar() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const productId = useParams();
  const navigate = useNavigate();

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      selectPayment: "",
    },
  });

  useEffect(() => {
    detailDataProduct();
  }, []);

  async function detailDataProduct() {
    try {
      const result = await detailProduct(productId.id);
      setValue("price", result.priceProduct);
      setValue("nameCar", result.nameProduct);
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  async function onSubmitForm(data) {
    try {
      await createProduct(data);
      reset();
      navigate("/status");
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
          <div className="py-5 flex lg:flex-col lg:items-start justify-between items-center border-b px-3 sm:px-10 lg:px-20 xl:px-32">
            <div className="font-poppins flex justify-center lg:gap-2 gap-1">
              <img
                src={Union}
                alt=""
                className="lg:h-[39px] lg:w-[51px] h-[30px] w-[30px]"
              />
              <p className="lg:mt-[-2px] mt-[3px] font-bold lg:text-[32px] text-[20px]">
                Car-sale.
              </p>
            </div>
            <div className="lg:mt-[-45px] mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base lg:mb-0 mb-5">
              <div className="relative">
                <ul className="relative w-full flex items-center justify-between space-x-2 sm:space-x-4 ">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      1
                    </a>
                    <span className="font-semibold text-gray-900">Payment</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </ul>
              </div>
            </div>
          </div>
          
          <hr className="border-1 border-gray-300 pt-[-15px] lg:mb-10 mb-3" />
          <Link
            to="/list-car"
            className="lg:ml-36 ml-2 rounded-full bg-slate-500 px-4 py-2 text-white font-poppins text-[14px]"
          >
            Back to List Car
          </Link>
          <div className="font-poppins grid sm:px-10 gap-5 lg:grid-cols-2 lg:px-20 xl:px-32 lg:py-5">
            {/* menu order */}
            <div className=" px-4 py-10">
              <p className="text-xl font-medium">Order Summary</p>
              <p className="text-gray-400">
                Check your items. And select a suitable shipping method.
              </p>
              <div className="mt-8 space-y-3 rounded-lg border bg-gray-200 px-2 py-4 sm:px-6">
                <div className="flex gap-2 rounded-lg bg-gray-100">
                  <img
                    className="m-2 h-50 w-32 rounded-md border object-cover object-center"
                    src={products.image}
                    alt=""
                  />
                  <div className="flex w-full gap-2 flex-col px-4 py-4">
                    <span className="font-bold text-[20px]">
                      {products.nameProduct}
                    </span>
                    <div className="flex gap-1 text-[16px] mb-1">
                      <p>Rp</p>
                      <Number number={products.priceProduct} />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg font-medium">Shipping Methods</p>

              <div className="mt-5 grid gap-6">
                <ShippingMethod
                  id="sicepat"
                  aria-label="Si Cepat"
                  for="sicepat"
                  name="SiCepat"
                  src="data:image/png;base64,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"
                  delivery="2-3"
                />
                <ShippingMethod
                  id="jne"
                  aria-label="JNE Express"
                  for="jne"
                  name="JNE Express"
                  src="data:image/png;base64,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"
                  delivery="1-2"
                />
                <ShippingMethod
                  id="jnt"
                  aria-label="J&T Express"
                  for="jnt"
                  name="J&T Express"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAllBMVEX////+AAD+ysn/lJb+zs7/0M//7+/+yMj/+Pj+YmH/r67+lpX+xcX/1db/ycj/y8z+4eH+5+f+Nzf/9PT+2dn+fHz+kJD+wcD+vLz+29v+trb+c3P+wcH+oqH+6+v+Zmb+QkL9ISH+Ly/9UVH9W1z+Dg/+a2r9iIj9Skr+np7+TU7+GBf+fn7+hob+pqf+Vlb+Pj39JydUEUn7AAAJ2ElEQVR4nO2bDVciOwyG0UVAEEUHEUH5cAVFXFf//5+7NP2YJm8HGGUR78lzzq4w7ZQ2kyZp2qlUFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEX5aRwL6re+5PJclqU47/r6o1X9uuPcUy/grIi79vfIYRtGR5I3X3QNRUlOfP3JdvU3MM2+RxDbcAe9DZr1sNXgxr762U5kddX4HjlsRQ+660uy7UbX8fU/diGrh0OWVeVFdve3LznZanTXvvrgE6IZn0oOWlYNGMAvX7TYarzBwnxCVt10nw6WLoyg7osetxlvy9e+Ly+r40pD8D0y2Jo3GELo8XKbAfvKqKEbmc3EhWXte2SwNXM5hCtfclk4yOhzCDOeygtLsjzgmMEC6jP0JdXUgJ7vjOLV+n/d+Hzl2tdlNTt4WeEgm74oFTbdhRutq+z7r1vGrzlnF6vg3/zz/50fvKwqNzCKEDYd4wg70Z2d1fdJ/KUMs0O3Tkn+wDBCEQrggt36Gi10TksK62nQ5Az2N+TPA8u5EJLiDB3zW/tHj/4jxh9l6VR+ANDrVl42FUW3/NabfIRfXkH/iFm5JiSFqGIm7m0GTUtYt3KM9jTcr4EhafSMxWLvUdzbC0P86gr6ck+j/SIQkj5EhSLrMBf3hknYefpVwOJdtn/agkq9HyKrilxw5DkEAxfluKiRNYAS/bSlcwSuaJgL5xZtuov2D32pvIY+DIa78N+srPx0acrmX3bV828AV7+8nMel1+lG1jCUzbc233OwgP2VHo9Ls3TkCCbxZPM9hwom2ReyCosK3ku2/78yWZhkhyfPJ2LJWQQma7Kbfn8LmAnGOnynrNz+J5is3o46/h2M5WAeoMrlM69RKukEkf3xzrq+f2Awr7IGbG9dpdopAPe6d9j3fYOD6Ysar1BDREq1dbryJUkfGhiSirDzL8pKrHpW8pgPivIrYLKe/tFA9gFkSfk0aUAUZhlCE5NFcskHRyXqqVo/BEjZMaVpFB4LmSeaWA770vbjLP/BURamBO7j0qsiWR0dnfo6LKpdiubBZE32MKZ/BYakcRT1DKURz64S21qU+a7/lcnCcx/RNNmwD+gOUbHjSjK8h8DkbH9j2zmwffWcl6Gj/OBHk6a0qGZTVUQRaLIOfxe1GBhMPk1wn3oOmz3HcuEozDfIu+wy/JDAlEAekoLSDRI33PO5OhHtw0SG5cH2ZAmlTF1DuoNF6/4uyi1d3ty3FoOyZ3zxoF7YrQHTb39M7njxPOq9aB9OnIjlAf/9F5OWnc2O/tjC2my5XM6mK2XtnU5tjedW6F9r7Ozhw3UI3fgxFpsCz0I6buZO+zRDPFQukwkhaZ5jl57QB/Zrz6uJ6B9nsgj0+e/3fELHFtqtkqpoxtkJFrBcua1fvqlHgXN8joPUehTb2FLCgjgqhKS3oiDfiV7jI59F82CyZEaD6+XAH4ejtUCbPpqETp3VsolccRbKdo8HKkbNB7ISczmQ5lwHntQL59KEzsXNFu/Ty5MdoLjSZPFpaiY6HcuklNfUfJqYTyK+ofNQYmfYPgX+7KtCNLSEZ8u3UpvgGJKG9Z24zkQMWfVUrTDeGGGyaCyzlqNnXCkp40eQEBnwoRNRzU5SOkJA+r16tJnTnXbodM83l3lVW6wabhyPjabZ82ZzYy66vb9lZLUmJBUBEreERQexZA4UoyzxKCkDO+HXqN6ls1M2hF3aSxXvXowGkpGmyWc3Nt/8J3Yag+6MvQ5J73N7cXAUOXT8gl8XXq7gNQqZpgGTJVeOLXPxD7/m1Ij+uFlL90YfbxPXjLBIyU6jtuzTirMhNFE/txcHnj3ohogpZPOtlKxg2QdpQ+mqx1YwDHpMYxqmyxOSwjhtIAvQcf7HuQtq2pyx+yO7eskH5Uf8qcgYQ9KwchN7MhN5KxwmOUokXyC/Ix3A1A2dYcbzQTrvAhF6cFb/7OTM3DWbVKuHH6fFWLzgcvFFJD+byixnrKJeMLKiIoh20SU2ZZWNJss64757ac4LLbjQQXzBfhn7J/cUfnGUy8N2w72X181lc3QVZqJXAujsRiBiyo1jW5R8yHsbcgqjbuNCXFTgsdKNu+pPooRsDz2XTt5h41IpZL6pjU5szsPIT0wUCoJCtDj3au/TIA/iCKOjVkQGKeM8WQwRmIg3GwsZP2CiCqKsoajAY6XgHuzszR8Pfe293Q9nuWBSDXO30xYPzAlnFPqdUq4yB66j+2GafUQzcYSv3CUyVfAspMniAbe/6hTkUXwP1OS1oesZ9zpOlarsvhVZWMclDkeXOXAd2VrYdV+Zxb6xOdnJoiCEFwtDPEQhjyuxzGAIfnwY7u0nP6U/yeCaV1g20qCYDe+TwxHsMDRIWZQ6yR/d94l3lqbcHcLbsfLwbiXZ4zB5fWwXK8zDILr2/uiWls7b0QRLmKKRq5Y/K5eIeJM1t3oFzsE86ifehuMeGUyWzM9b6ysuUiBATs/rBo1gPn+c95pB8+maycyQu7OpklqqOYsNdKJpN0h2SHq1tfxit67Z2SmCrXfAZEmLSj0Wh1StQtvfdv6eJquI4abmmjEKduJQSEILXZn3sGTw+2RJTkW15H5yEdxEl30VxxAtlHEey+iTJoNYG1B/F3YTJIpDxVFWujbLxUbZP5oK0uE6YHh/E5W3e8PZI8wHvv+0mVwg8BIBnN19liNwK/spWxKTOxOHEalt6xFIRWiC+dxEVM0HwdakjyojH95bbypUnSfXNgBHNm7LvwgwC/MFlo9wKpyudkPUV/FWzMhv6j/YYEzoH12zgR2ZN/IFNHXvMt9exQRs40Gn0ejYQOfF7Nq937ezhkv1COUop1iJjHRywcyQDiQ4aDAA0mSJ+MkYTHo4pEU0RcmmkMKIPBhds/aaKpoJKyKVIbxm05WJA26i1+8oA6k32LJU+Bn4WGTg9HwyFCpLkyXyPGc+SCUPbx2TefSTcC3nPW+PJq5xa8LENmXM+yZ/UUzt83UDRQrOITcLRD7t2ZhGHh20Mpc5fIyyROax5pYmzqNO3QDJT8y4M7S+w04icqmTCiz9u+JxGd1kqRK5PCuSSgFpWa3I+q/Cek2e+nmmT044OsALb09BWkTYUz8tXSkp7IcTurCmbVeWP5QKJM8ys371OaIHt4XQD795LVcTtbOL9VQZ6/ccG52L5qLVai3e+rfyh9ocio86ovULeDWjfRLTrdxWV3+qvlrt+OKifrf6W223q0Lna6amC9Ub9dVAzlaa12XNuRPXtduzwU07yuCuhtHvV3/KW1WKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKsi/+A1LDi0tbG84sAAAAAElFTkSuQmCC"
                  delivery="1-2"
                />
              </div>
            </div>

            <div className="mt-10 bg-gray-200 rounded-md px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-600">
                Complete your order by providing your payment details.
              </p>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                {/* email */}
                <InputPayment
                  id="email"
                  aria-label="Email"
                  for="Email"
                  name="email"
                  label="Email"
                  placeholder="your.email@gmail.com"
                  register={register}
                  error={errors.email?.message}
                  type="text"
                />
                {/* fullName */}
                <InputPayment
                  id="fullName"
                  aria-label="Full Name"
                  for="fullName"
                  name="fullName"
                  label="Full Name"
                  placeholder="Your full name here"
                  register={register}
                  error={errors.fullName?.message}
                  type="text"
                />
                {/* nameCar */}
                <InputPayment
                  id="nameCar"
                  aria-label="Name Car"
                  for="nameCar"
                  name="nameCar"
                  label="Name Car"
                  value={products.nameProduct}
                  disabled={true}
                  register={register}
                  error={errors.nameCar?.message}
                />
                {/* numberCard */}
                <InputPayment
                  id="numberCard"
                  aria-label="Number Card Details"
                  for="numberCard"
                  name="numberCard"
                  label="Number Card"
                  placeholder="xxxx-xxxx-xxxx"
                  register={register}
                  error={errors.numberCard?.message}
                  type="number"
                />
                {/* price */}
                <InputPayment
                  id="price"
                  aria-label="Price"
                  for="price"
                  name="price"
                  label="Price Product"
                  value={products.priceProduct}
                  register={register}
                  disabled={true}
                  error={errors.price?.message}
                  type="number"
                />
                {/* selectPayment */}
                <SelectOption
                  id="selectpayment"
                  aria-label="Select Payment"
                  for="selectPayment"
                  name="selectPayment"
                  label="Select Payment"
                  register={register}
                  error={errors.selectPayment?.message}
                  options={["BCA", "MANDIRI", "BRI", "BSI"]}
                  placeholder="Select your payment..."
                />
                {/* price */}
                <InputPayment
                  id="image"
                  aria-label="Image Payment"
                  for="image"
                  name="image"
                  label="Image Payment"
                  register={register}
                  error={errors.image?.message}
                  type="file"
                />

                <div className="mt-5 border-t border-b">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <div className="flex gap-2 font-medium text-[16px ] mb-1">
                      <p>Rp</p>
                      <Number number={products.priceProduct} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Tax +10%
                    </p>
                    <p className="font-medium text-gray-900">Rp 0</p>
                  </div>
                  <hr className="border" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <div className="flex gap-2 font-medium text-[16px ] mb-1">
                    <p>Rp</p>
                    <Number number={products.priceProduct} />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                >
                  Purchase
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
