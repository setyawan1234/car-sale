import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { MostSoldCars } from "@/components/homepage/mostSoldCars";
import { ProfileSeller } from "@/components/homepage/profileSeller";
import { ServiceProduct } from "@/components/homepage/serviceProduct";
import { Navbar } from "@/components/navbar";
function HomePage() {
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
      <ServiceProduct/>

      {/* section footer */}
      <Footer />
    </>
  );
}

export default HomePage;
