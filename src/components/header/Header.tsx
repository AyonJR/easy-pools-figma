import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#062524] to-[#188B89]">
      <div className="container mx-auto px-4 lg:px-20 py-2">
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/QPmmTQX/Flag-of-Canada-leaf-1.png"
              alt="Canada Flag"
              width={24}
              height={26}
            />
            <p className="text-white font-bold text-sm">
              Swimming Pool Installation in Toronto
            </p>
          </div>
          {/* Right Side Social Icons */}
          <div className="flex items-center gap-[36px]">
            <Image
              src="https://i.ibb.co/1MD9cx3/Social-Icons.png"
              alt="Facebook Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/YP02p8J/Social-Icons-1.png"
              alt="Twitter Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/2dCmYhM/Social-Icons-2.png"
              alt="Instagram Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/7nhTQ3f/Social-Icons-3.png"
              alt="LinkedIn Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="https://i.ibb.co/F0STPQg/Social-Icons-4.png"
              alt="Google Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
