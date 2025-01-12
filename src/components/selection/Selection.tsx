import Image from "next/image";
import React from "react";

const items = [
  "Location Assessment for Pool Installation",
  "Environmental Considerations for Pool Placement",
  "Legal and Regulatory Compliance for Installation",
  "Soil and Ground Conditions Analysis",
  "Accessibility and Transportation Logistics",
  "Utility Infrastructure Evaluation for Pool Installation",
  "Budgetary Analysis and Cost Considerations",
  "Safety and Security Measures for Pool Placement",
  "Future Expansion and Maintenance Considerations",
];

const Selection = () => {
  return (
    <div>
      <div>
        <div className="  w-full flex ">
          <div className="lg:pl-20 mx-auto container">
            <div className="flex lg:flex-row flex-col-reverse gap-5  w-full h-full">
              {/* Left Content */}
              {/* Left Content */}
              <div className="lg:w-9/12 w-full px-4 flex flex-col justify-center mx-auto">
                <div className="flex justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <Image
                      height={16}
                      width={48}
                      src="https://i.ibb.co.com/g3QJnpC/Group-71.png"
                      alt="Swimming Pool Image"
                    />
                    <p className="text-sm lg:text-base">
                      Site Selection and Preparation
                    </p>
                  </div>
                </div>

                <h2 className="font-bold text-[20px] lg:text-[28px] text-center lg:text-start leading-tight">
                  Site Selection and Preparation for Swimming Pool Installation
                  in Barrie
                </h2>
                <p className="mt-2 text-sm lg:text-base text-center lg:text-start leading-relaxed">
                  Considering swimming pool installation in Barrie, site
                  selection, and preparation are crucial steps that can
                  significantly impact the success and longevity of your
                  investment. Here's a guide to help you navigate through these
                  important stages:
                </p>

                <div className="flex flex-col lg:flex-row gap-4 mt-5">
                  {/* Left Flex */}
                  <div className="bg-white p-4 border border-[#005E2F] rounded-lg">
                    <h2 className="text-sm lg:text-base font-bold">
                      Site Selection
                    </h2>
                    <div>
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="mt-2 flex items-center gap-2"
                        >
                          <Image
                            src="https://i.ibb.co.com/gr39F8c/select-2.png"
                            height={16}
                            width={16}
                            alt="select"
                          />
                          <p className="text-xs lg:text-sm truncate">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Flex */}
                  <div className="bg-[#E1FFFE] p-4 border border-[#005E2F] rounded-lg">
                    <h2 className="text-sm lg:text-base font-bold">
                      Site Selection
                    </h2>
                    <div>
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="mt-2 flex items-center gap-2"
                        >
                          <Image
                            src="https://i.ibb.co.com/gr39F8c/select-2.png"
                            height={16}
                            width={16}
                            alt="select"
                          />
                          <p className="text-xs lg:text-sm truncate">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className=" lg:block ">
                <Image
                  height={554}
                  width={554}
                  className="w-full lg:h-full h-[398px] "
                  src="https://i.ibb.co.com/ZJYY9J8/IMG-2737-8.png"
                  alt="Swimming Pool Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
