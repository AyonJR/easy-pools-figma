import Image from "next/image";

const Process = () => {
  // Array holding data for each grid item
  const processSteps = [
    {
      image: "https://i.ibb.co.com/LvkqHXg/clock-3.png",
      text: "Schedule a consultation with the client to discuss their requirements, preferences, and budget.",
    },
    {
      image: "https://i.ibb.co.com/9NtXd8G/clock-4.png",
      text: "Present a customized pool design proposal that aligns with the client's vision.",
    },
    {
      image: "https://i.ibb.co.com/v4tpwJg/clock-2.png",
      text: "Handle the necessary permits and approvals from local authorities to ensure compliance with regulations.",
    },
    {
      image: "https://i.ibb.co.com/SQY2ptB/clock-1.png",
      text: "Mobilize excavation equipment and prepare the site for pool installation.",
    },

    {
      image: "https://i.ibb.co.com/vDCmhMj/clock-5.png",
      text: "Ensure proper grading and soil compaction to provide a stable foundation for the pool.",
    },
    {
      image: "https://i.ibb.co.com/F54fvKJ/clock-7.png",
      text: "Construct the pool shell using high-quality materials, considering durability and longevity.",
    },
    {
      image: "https://i.ibb.co.com/6Fb9q4r/clock-7-1.png",
      text: "Install the necessary plumbing and electrical components according to the design specifications.",
    },
    {
      image: "https://i.ibb.co.com/HHWBJWT/clock-8.png",
      text: "Reinforce the pool structure as needed for safety and longevity.",
    },

    {
      image: "https://i.ibb.co.com/SPHS3kv/clock-7-2.png",
      text: "Apply finishes such as tiles, plaster, or other selected materials to enhance the pool's aesthetic appeal.",
    },
    {
      image: "https://i.ibb.co.com/W070hpb/clock-3-1.png",
      text: "Install pumps, filters, and other equipment to ensure proper water circulation and sanitation.",
    },
    {
      image: "https://i.ibb.co.com/H4JqLjr/clock-4-1.png",
      text: "Construct pool decking and any additional features, like steps or seating areas.",
    },
    {
      image: "https://i.ibb.co.com/xHrmfrP/clock-1-1.png",
      text: "Provide the client with a thorough orientation on pool operation, maintenance, and safety measures.",
    },
  ];

  return (
    <div>
      <div className="lg:h-[770px] w-full bg-[#E1FFFE] flex items-center justify-center">
        <div className="lg:px-0 py-5">
          <div className="flex flex-col items-center justify-center lg:px-0 px-6">
            <div className="flex items-center gap-2">
              <Image
                height={16}
                width={48}
                src="https://i.ibb.co.com/g3QJnpC/Group-71.png"
                alt="Swimming Pool Image"
              />
              <p>Process</p>
            </div>
            <h2 className="font-bold lg:text-[35px] text-[25px] lg:text-start text-center">
              Process of Our Swimming Pool Installation in Barrie{" "}
            </h2>
            <p className="lg:text-[18px] lg:text-start mt-2 text-center">
              Easy Pools ensures a seamless and satisfying swimming pool
              installation experience By following these steps.
            </p>
          </div>
          {/* Grids rendered using map */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 container mx-auto mt-4 gap-5  px-6 lg:px-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="border border-[#005E2F] rounded-2xl bg-white"
              >
                <div className="p-3">
                  <div>
                    <Image
                      src={step.image}
                      height={47}
                      width={47}
                      alt={`Step ${index + 1}`}
                    />
                  </div>
                  <p className="mt-2">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
