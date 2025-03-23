import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-lg w-full text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex items-center flex-col">
        
        <div className="text-2xl font-bold flex items-center">
                <div className="relative w-[284px] h-[80px]">
                  {/* <Image
                    className="absolute top-0 left-0 m-0 p-0"
                    width={48}
                    height={48}
                    src="/logo/logo.png"
                    alt="Logo"
                  /> */}
                  <Image
                    className="absolute top-0 left-[50px] m-0 p-0"
                    width={234}
                    height={10}
                    src="/logo/name_1.png"
                    alt="Logo Text"
                  />
                  <Image
                    className="absolute top-[20px] left-[50px] m-0 p-0"
                    width={234}
                    height={10}
                    src="/logo/name_2.png"
                    alt="Logo Subtitle"
                  />
                </div>
              </div>

        
        <div className="flex justify-center space-x-6 text-base mb-10">
          <a href="#" className="hover:underline flex items-center">
            Careers <span className="ml-1">↗</span>
          </a>
          <a href="#" className="hover:underline flex items-center">
            Contact
          </a>
          <a href="#" className="hover:underline flex items-center">
            Amec Group <span className="ml-1">↗</span>
          </a>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-base">
          
          <div>
            <h4 className=" uppercase mb-3">Contact</h4>
            <p>info@amectechnology.com</p>
            <p>hr@amectechnology.com</p>
            <p>tel: +91 9021510318</p>
          </div>

          <div>
            <p>
              Plot No. 5A, 13A MIDC, <br />
              Beside Tata Motors Service Centre, <br />
              Hingna MIDC, Nagpur - 440016
            </p>
          </div>

          <div>
            <h4 className=" uppercase mb-3">Policies</h4>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
            <p className="hover:underline cursor-pointer">Cookie Policy</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-6">
          <FaFacebook className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-gray-400" />
          <IoLogoXing className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </footer>
  );
}
