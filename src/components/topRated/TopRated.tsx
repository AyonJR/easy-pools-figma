import Image from "next/image";
import React from "react";

const TopRated = () => {
  return (
    <div>
      <div className="  w-full  flex ">
        <div className="lg:pr-20 mx-auto container">
          <div className="flex lg:flex-row flex-col gap-5 items-center  w-full h-full">
            {/* Left Content */}
            <div className=" lg:block ">
              <div>
                <Image
                  src="https://i.ibb.co/xM48Ysn/Group-37.jpg"
                  alt="Decorative Image"
                  width={722} // Specify appropriate width
                  height={629} // Specify appropriate height
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Image */}

            <div className="lg:w-4/6 lg:px-0 px-6 flex flex-col justify-center h-full mx-auto">
              <div className="flex lg:justify-start justify-center">
                <div className="flex items-center gap-2">
                  <Image
                    height={16}
                    width={48}
                    src="https://i.ibb.co.com/g3QJnpC/Group-71.png"
                    alt="Swimming Pool Image"
                  />
                  <p>About Us</p>
                </div>
              </div>

              <h2 className="font-bold lg:text-[35px] text-[25px] lg:text-start text-center">
                Barrie’s Top-Rated Swimming Pool Installation Specialists{" "}
              </h2>
              <p className="mt-2  lg:text-start text-center">
                Transform your backyard into a haven of luxury with Easy Pools’s
                swimming pool installation in Barrie. With a commitment to
                excellence and a reputation for unparalleled craftsmanship, our
                pool company in Barrie brings luxury to your doorstep. Whether
                you envision a sleek, modern oasis or a classic, resort-style
                retreat, their experts will work closely with you to turn your
                dreams into reality.  From the initial consultation to the
                finishing touches, our pool installers ensure a seamless and
                stress-free experience, providing personalized solutions that
                cater to your unique preferences and lifestyle. From innovative
                water features to state-of-the-art lighting and automation
                systems, we combine functionality with aesthetics, creating a
                space that reflects your style and enhances your overall
                well-being. Dive into the lap of luxury with us, where every
                swim is an indulgence and every moment by the poolside is a
                celebration of sophistication and leisure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
