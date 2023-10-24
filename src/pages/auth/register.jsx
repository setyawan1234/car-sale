import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputElement } from "@/components/input";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import { Link } from "react-router-dom";
import Union from "@/assets/Union.png";

import { userRegister, registerSchema } from "@/utils/apis/auth";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function handleRegister(data) {
    try {
      const result = await userRegister(data);
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-[93.3vh] bg-zinc-300 bg-opacity-50">
        <div className="flex lg:justify-center lg:items-center lg:flex-row flex-col items-center justify-center gap-28">
          <form
            aria-label="form-login"
            className="lg:ml-16"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="flex flex-col items-center justify-center mb-6 lg:mt-0 mt-16">
              <img
                src={Union}
                alt=""
                className="lg:h-[39px] lg:w-[51px] h-[25px] w-[30px]  "
              />
              <p className="lg:mt-[-2px] font-bold lg:text-[32px] text-[20px]">
                Car-sale.
              </p>
              <p className="text-[26px] font-semibold mt-2">Register</p>
            </div>
            <div className="flex items-center justify-center gap-5 font-semibold mb-2">
              <Link to="/login">Log In</Link> |
              <p className="cursor-pointer">Register</p>
            </div>
            <InputElement
              id="input-username"
              aria-label="input-username"
              label="Username"
              name="username"
              register={register}
              error={errors.username?.message}
              placeholder="Input Username"
              width="350px"
              autoComplete="username"
            />
            <InputElement
              id="input-password"
              aria-label="input-password"
              label="Password"
              name="password"
              placeholder="Input Password"
              register={register}
              error={errors.password?.message}
              type="password"
              autoComplete="new-password"
            />
            <InputElement
              id="retype-password"
              aria-label="retype-password"
              label="Retype Password"
              name="repassword"
              placeholder="Retype Password"
              register={register}
              error={errors.repassword?.message}
              type="password"
              autoComplete="retype-password"
            />
            <Button
              aria-label="btn-submit"
              label="Register"
              type="submit"
              bgColor="#FF7A00"
              color="white"
            />
          </form>
          <img
            src="./Register.png"
            alt=""
            className="h-[750px] lg:mt-9 rounded-lg isible lg:visible hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
