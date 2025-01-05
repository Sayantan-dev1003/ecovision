import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LOGOImg from "../images/LOGOImg.png"
import LOGOName from "../images/LOGOName.png"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-30 w-full flex justify-between items-center px-12 py-3 mobile:px-3.5 tablet:px-8 montserrat bg-[#165e27] text-white">
        <div className="flex items-center">
          <img src={LOGOImg} className="w-[3rem] h-auto mobile:w-[2rem]" alt="" />
          <img src={LOGOName} className="w-auto h-[3rem] mobile:h-[2rem]" alt="" />
        </div>
        <div className="flex gap-12 items-center mobile:hidden">
          <div className="flex gap-12 font-semibold">
            <span className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Home</span>
            <span className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">About Us</span>
            <span className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Features</span>
            <span className="hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer">Contact</span>
          </div>
          <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg">Login</button>
        </div>
        <FontAwesomeIcon icon={faBars} className="hidden mobile:block laptop:hidden tablet:block hover:text-[#FFC107] active:text-[#5CDBF0] cursor-pointer" />
      </header>
    </>
  )
}

export default Header