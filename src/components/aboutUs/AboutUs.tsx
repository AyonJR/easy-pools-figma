import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="lg:h-[730px]  w-full bg-[#E1FFFE] flex ">
        <div className="lg:pl-20 mx-auto container">
          <div className="flex lg:flex-row flex-col-reverse gap-5  w-full h-full">
            {/* Left Content */}
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
                Introduction to Our Swimming Pool Company in Barrie
              </h2>
              <p className="mt-2 leading-[36px] lg:text-start text-center">
                Welcome to Easy Pools, your trusted partner for exceptional
                swimming pool installations in Barrie. Our team is dedicated to
                transforming your outdoor space into a stunning retreat tailored
                to your preferences. From innovative designs to expert
                craftsmanship, we focus on delivering high-quality results that
                combine functionality and elegance. Whether you want to create a
                peaceful escape or an inviting area for family and friends, we
                are here to make your backyard dreams a reality. <br />
                Easy Pools custom designs and builds pool and spa solutions that
                reflect your unique needs and aesthetic. With over 10 combined
                years of experience in the swimming pool installation industry,
                you can trust our designers and construction specialists to
                create the perfect swimming pool, spa, and landscaped backyard.
                From start to finish, our company does it all. From initial
                consultation to final touches, our dedicated team is committed
                to providing unparalleled craftsmanship and customer
                satisfaction. Whether you envision a serene oasis for relaxation
                or a lively space for entertaining, trust us to bring your
                vision to life in Barrie and beyond.
              </p>
            </div>

            {/* Right Image */}
            <div className=" lg:block ">
              <Image
                height={554}
                width={554}
                className="w-full h-full"
                src="https://i.ibb.co.com/4F4KxyJ/IMG-2755-1.png"
                alt="Swimming Pool Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
