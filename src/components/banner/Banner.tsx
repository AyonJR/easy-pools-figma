import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:h-[554px] h-[428px] w-full bg-[#E1FFFE] flex items-center">
      <div className="lg:pl-20 mx-auto container">
        <div className="flex lg:gap-4 items-center justify-between w-full h-full">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:px-0 px-6">
            <h2 className="font-bold lg:text-[50px] text-[36px]">
              Swimming Pool <br className="lg:hidden block" /> Installation in Barrie
            </h2>
            <p className="mt-2">
              Easy Pools specializes in swimming pool installation services in
              Barrie, where your dream of a luxurious and refreshing pool oasis
              becomes a reality!
            </p>
            <button className="lg:mt-10 mt-5 bg-[#049E43] w-[188px] h-[37px] flex items-center justify-center text-white rounded-[50px] font-bold space-x-2">
              <span>Get an Estimate</span>
              <Image
                src="https://i.ibb.co.com/SdBmBQB/Vector-9.png"
                alt="Arrow Icon"
                width={20}
                height={20}
                className="w-auto h-auto"
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-1/2 lg:block hidden">
            <Image
              height={554}
              width={554}
              className="w-full h-auto"
              src="https://i.ibb.co.com/b6t2CwD/IMG-2737-4.png"
              alt="Swimming Pool Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
