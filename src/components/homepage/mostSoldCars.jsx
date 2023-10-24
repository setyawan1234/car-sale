import React from "react";

export const MostSoldCars = () => {
  return (
    <div className="w-full font-poppins bg-[#E9E9E9]">
      <div className="container mx-auto lg:p-3 p-6">
        <p className="font-bold text-2xl md:text-4xl lg:text-5xl pt-12 uppercase mb-5">
          Cars are often bought
        </p>
        <p className="max-w-3xl md:max-w-4xl lg:max-w-[800px] mb-8 lg:mb-16">
          The list below features cars that are frequently purchased by our
          customers. Explore a wide selection of dream cars designed with modern
          technology and stylish designs to match your style.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:mb-8">
          <div className="relative transition-transform transform hover:scale-105 font-poppins text-white">
            <img
              src="/car1.png"
              alt="car1.png"
              className="object-cover rounded-lg h-[480px] md:h-[669px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 h-[7rem] lg:h-[8rem] p-4 rounded-t-lg">
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Honda CR-V 2023
              </p>
              <p className="font-thin">
                More than <span className="font-semibold">10+ people</span> have
                bought this car
              </p>
              <div className="flex justify-center items-center mt-[20.5rem] md:mt-[28rem] lg:mt-[33rem]  gap-5">
                <p className="text-[#FF7A00] font-bold text-xl md:text-2xl lg:text-3xl">
                  HOT SELLS
                </p>
                <hr className="border-2 border-white w-20 md:w-48" />
              </div>
            </div>
          </div>
          <div className="relative transition-transform transform hover:scale-105 font-poppins text-white">
            <img
              src="/car2.jpeg"
              alt="car2.jpeg"
              className="object-cover rounded-lg h-[480px] md:h-[669px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 h-[7rem] lg:h-[8rem] p-4 rounded-t-lg">
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Toyota Kijang Innova 2023
              </p>
              <p className="font-thin">
                More than <span className="font-semibold">20+ people</span> have
                bought this car
              </p>
              <div className="flex justify-center items-center mt-[20.5rem] md:mt-[28rem] lg:mt-[30.8rem] xl:mt-[33rem] gap-5">
                <p className="text-[#FF7A00] font-bold text-xl md:text-2xl lg:text-3xl">
                  HOT SELLS
                </p>
                <hr className="border-2 border-white w-20 md:w-48" />
              </div>
            </div>
          </div>
          <div className="relative transition-transform transform hover:scale-105 font-poppins text-white">
            <img
              src="/car3.jpeg"
              alt="car3.jpeg"
              className="object-cover rounded-lg h-[480px] md:h-[669px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 h-[7rem] md:h-[6rem] p-4 rounded-t-lg">
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Mazda 3 Hatchback 2023
              </p>
              <p className="font-thin">
                More than <span className="font-semibold">3+ people</span> have
                bought this car
              </p>
              <div className="flex justify-center items-center mt-[20.5rem] md:mt-[26rem] lg:mt-[30.8rem] xl:mt-[33rem] gap-5">
                <p className="text-[#FF7A00] font-bold text-xl md:text-2xl lg:text-3xl">
                  HOT SELLS
                </p>
                <hr className="border-2 border-white w-20 md:w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
