import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#E1FFFE]">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center">
        <div className="lg:px-0 py-5">
          <div className="flex flex-col items-center justify-center lg:px-0 px-6">
            <div className="flex items-center gap-2">
              <Image
                height={16}
                width={48}
                src="https://i.ibb.co.com/g3QJnpC/Group-71.png"
                alt="Swimming Pool Icon"
              />
              <p>Gallery</p>
            </div>
            <h2 className="font-bold lg:text-[35px] text-[25px] lg:text-start text-center">
              Gallery Of Our Swimming Pool Installation in Barrie
            </h2>
          </div>
        </div>
      </div>

      {/* First Grid */}
      <div className="grid pb-6 lg:pb-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 container lg:px-0 px-6 mx-auto">
        <div className="relative w-full h-[338px]  rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/GPrkDXP/IMG-2730-3.png"
            alt="Swimming Pool 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-[338px]  rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/ChswRGC/IMG-2730-4.png"
            alt="Swimming Pool 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-[338px]  rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/6RrF4nf/IMG-2730-5.png"
            alt="Swimming Pool 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-[338px]  rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/rx84Smy/IMG-2730-6.png"
            alt="Swimming Pool 4"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Second Grid with 5 columns */}
      <div className="lg:block hidden pb-5">
      <div className="grid grid-cols-8 gap-3 container mx-auto mt-0">
        {/* First Image (Half Width) */}
        <div className="col-span-1 relative h-[338px] rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/XVgxrKc/IMG-2730-7.png"
            alt="First Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Second Image (Full Width) */}
        <div className="col-span-2 relative h-[338px] rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/6vKZXyK/IMG-2730-8.png"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Third Image (Full Width) */}
        <div className="col-span-2 relative h-[338px] rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/QJtptGY/IMG-2730-9.png"
            alt="Third Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Fourth Image (Full Width) */}
        <div className="col-span-2 relative h-[338px] rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/bXMXBt9/IMG-2730-10.png"
            alt="Fourth Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Fifth Image (Half Width) */}
        <div className="col-span-1 relative h-[338px] rounded-lg overflow-hidden">
          <Image
            src="https://i.ibb.co.com/8j75Ydz/IMG-2730-11.png"
            alt="Fifth Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
