import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputElement } from "@/components/input";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import { Link } from "react-router-dom";

import { useToken } from "@/utils/context/token";
import { userLogin, loginSchema } from "@/utils/apis/auth";

export default function Login() {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-[93.3vh] bg-zinc-300 bg-opacity-50">
        <div className="flex justify-center items-center tex gap-28">
          <form
            aria-label="form-login"
            className="ml-16"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <img
                src="./Union.svg"
                alt=""
                className="lg:h-[39px] lg:w-[51px] h-[20px] w-[20px]  "
              />
              <p className="lg:mt-[-2px] font-bold lg:text-[32px] text-[14px]">
                Car-sale.
              </p>
              <p className="text-[20px] font-semibold mt-2">Log In</p>
            </div>
            <div className="flex items-center justify-center gap-5 font-semibold">
              <p className="cursor-pointer">Log In</p> |
              <Link to="/register">Register</Link>
            </div>
            <div className="mt-16">
              <InputElement
                id="input-username"
                aria-label="input-username"
                label="Username"
                name="username"
                placeholder="Input Username"
                register={register}
                error={errors.username?.message}
                width="400px"
                autoComplete="username"
              />
              <InputElement
                id="input-password"
                aria-label="input-password"
                label="Password"
                name="password"
                placeholder="****"
                register={register}
                error={errors.password?.message}
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div className="mt-8">
              <Button
                aria-label="btn-submit"
                label="Log Me In"
                type="submit"
                bgColor="#FF7A00"
                color="white"
              />
            </div>
          </form>
          <img
            src="./Login.png"
            alt=""
            className="h-[750px] mt-9 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
