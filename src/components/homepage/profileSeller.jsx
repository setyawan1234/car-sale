import React from "react";
import {
    BsFilePerson,
    BsWhatsapp,
    BsFacebook,
    BsPinMapFill,
} from "react-icons/bs";
export const ProfileSeller = () => {
  return (
    <div className="container mx-auto font-poppins mb-12">
      <p className="text-center font-semibold text-2xl lg:text-4xl mb-6 lg:mb-12">
        PROFILE SELLER
      </p>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="text-[14px] lg:w-1/3">
          <img
            src="/seller-profile.png"
            alt=""
            className="w-[90%] rounded-md mx-auto"
          />
          <div className="mt-4 ml-2 p-2">
            <div className="flex items-center gap-3">
              <BsFilePerson className="text-[#FF7A00] text-2xl mt-2 lg:text-3xl" />
              <p className="mt-2 font-semibold">
                PAK SUGENG JAYA{" "}
                <span className="opacity-60">(MARKETING HEAD)</span>
              </p>
            </div>
            <hr className="border-1 border-black border-opacity-50 my-2 lg:my-2" />
            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-green-700 text-2xl lg:text-3xl" />
              <p className="font-semibold">+62 857-0701-1668</p>
            </div>
            <hr className="border-1 border-black border-opacity-50 my-2 lg:my-2" />
            <div className="flex items-center gap-3">
              <BsFacebook className="text-[#3B5998] text-2xl lg:text-3xl" />
              <p className="font-semibold">Car Sale</p>
            </div>
            <hr className="border-1 border-black border-opacity-50 my-2 lg:my-2" />
            <div className="flex items-center gap-3">
              <BsPinMapFill className="text-[#FF7A00] text-2xl lg:text-3xl" />
              <div className="flex flex-col">
                <p className="font-semibold">PT. SUKA MAJU MUNDUR</p>
                <p>Main Dealer Car Sale</p>
                <p className="font-thin w-[300px]">
                  Jl Gummy Bear No. 42 Candyland City, East Java, Zip Code:
                  12345
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 mt-4 lg:mt-0 lg:p-8 p-4">
          <p className="text-[#FF7A00] text-2xl lg:text-3xl font-bold">
            Car-Sale Malang
          </p>
          <p className="font-semibold mb-3 lg:mb-6">
            Welcome To visit the website of{" "}
            <span className="text-[#e08f42]">Car-Sale Malang</span>.
          </p>
          <p className="font-thin mb-6 lg:mb-12">
            Introducing my name{" "}
            <span className="font-bold text-[#FF7A00]">
              Pak Sugeng Jaya
            </span>{" "}
            <span className="text-black font-semibold opacity-75">MARKETING HEAD</span> quality cars at Car-Sale Malang authorized dealer we
            offer cash purchase service with competitive Price, and also test
            drive, easy and very fast process, and the best quality service.
          </p>
          <p>
            Want to order your dream car at our Authorized Dealer{" "}
            <span className="font-semibold text-[#FF7A00]">
              PT. SUKA MAJU MUNDUR
            </span>{" "}
            ? I am ready to help you:
          </p>
          <ol className="list-disc pl-6 font-thin mt-4">
            <li>Valid throughout the province of East Java.</li>
            <li>Cash Purchase.</li>
            <li>Free Accessories.</li>
            <li>Fast Unit, Fast and Easy Process.</li>
            <li>Free Service and Oil.</li>
            <li>
              Customer satisfaction is always our priority in serving your needs
              in purchasing your dream car. Get the Promo price of your dream
              car at the car-sale dealer in Malang. Prove it Now.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
