import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LOGOImg from "../images/LOGOImg.png"
import LOGOName from "../images/LOGOName.png"
import { Link as ScrollLink } from 'react-scroll';
import SideBar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <header className="sticky top-0 left-0 z-30 w-full flex justify-between items-center px-12 py-3 mobile:px-3.5 tablet:px-8 montserrat bg-[#165e27] text-white">
        <div className="flex items-center">
          <img src={LOGOImg} className="w-[3rem] h-auto mobile:w-[2rem]" alt="" />
          <img src={LOGOName} className="w-auto h-[3rem] mobile:h-[2rem]" alt="" />
        </div>
        <div className="flex gap-12 items-center mobile:hidden">
          <div className="flex gap-12 font-semibold">
            <ScrollLink to="home" smooth={true} className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Home</ScrollLink>
            <ScrollLink to="about" smooth={true} className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">About Us</ScrollLink>
            <ScrollLink to="features" smooth={true} className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Features</ScrollLink>
            <ScrollLink to="contact" smooth={true} className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Contact</ScrollLink>
          </div>
          <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg">Login</button>
        </div>
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="hidden mobile:block laptop:hidden tablet:block hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer" />
      </header>
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  )
}

export default Header