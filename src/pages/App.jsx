import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { MostSoldCars } from "@/components/homepage/mostSoldCars";
import { ProfileSeller } from "@/components/homepage/profileSeller";
import { Navbar } from "@/components/navbar";
import {
  BsFillEmojiSmileFill,
  BsFillCartCheckFill
} from "react-icons/bs";

import { GiPriceTag } from "react-icons/gi";
function App() {
  return (
    <>
      <Navbar />

      {/* section body */}
      <div className="relative font-poppins text-white mb-12">
        <img
          src="./bg-body-hero.png"
          alt="bg-body-hero"
          className="w-full h-[750px] lg:h-[863px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto lg:mt-[185px] mt-[6rem] p-2">
            <p className=" text-white text-3xl lg:text-[75px] lg:mb-24 mb-12 font-bold uppercase">
              welcome your <span className="text-[#FF7A00]">dream</span> car
            </p>
            <p className="text-[36px] font-semibold mb-5">
              Want to Know? We Have 10+ New Cars Available
            </p>
            <p className="lg:w-[690px] h-[64px] lg:mb-24 mb-32">
              Car Sale is the place where you can find your dream car. We always
              provide the best car products at competitive prices. We are
              committed to providing a great customer experience and providing
              you with quality car options.
            </p>
            <div className="flex items-center justify-start gap-16">
              <Button label="Explore More" bgColor="#FF7A00" />
              <Button label="Register" />
            </div>
          </div>
        </div>
      </div>

      {/* section profile seller */}
      <ProfileSeller/>

      {/* section car often bought */}
      <MostSoldCars/>

      {/* section service */}
      <div className="w-full font-poppins lg:mt-24 mb-24">
        <div className="relative">
          <img
            src="/bg-body-hero-2.png"
            alt="body2"
            className="lg:h-[27rem] h-[57rem] w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 p-7 lg:p-2">
            <p className="lg:pt-16 text-center text-white text-2xl lg:text-3xl font-semibold">
              Here's what you get when you buy a car through me.
            </p>
            <div className="flex p-8 items-center justify-center flex-col md:flex-row gap-12">
              <div className="lg:h-[15rem] lg:w-[26rem] flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-75">
                <BsFillEmojiSmileFill className="h-10 w-10 lg:mt-1 mt-3" />
                <p className="font-semibold text-[24px] p-4">Good Service</p>
                <p className="text-center font-thin w-[20rem] mb-3">
                  Free consultation by meeting directly, via telephone or Chat
                  WA, guaranteed to get the best service.
                </p>
              </div>
              <div className="lg:h-[15rem] lg:w-[26rem] flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-75">
                <GiPriceTag className="h-10 w-10 lg:mt-2 mt-3" />
                <p className="font-semibold text-[24px] p-4">Best Price</p>
                <p className="text-center font-thin w-[20rem] mb-3">
                  Serving cash purchases, you are guaranteed to get the best
                  price for cash purchases.
                </p>
              </div>
              <div className="lg:h-[15rem] lg:w-[26rem] p-2 w-[20rem] flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-75">
                <BsFillCartCheckFill className="h-10 w-10 lg:mt-6 mt-3" />
                <p className="font-semibold text-[24px] p-4">After Sales</p>
                <p className="text-center font-thin lg:w-[20rem] mb-3">
                  Provide after sales services for you, such as booking service,
                  insurance claims and 24-hour emergency service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
