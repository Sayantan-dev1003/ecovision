import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <>
        <header className="sticky top-0 left-0 z-30 w-full flex justify-between items-center px-6 py-3 montserrat bg-[#165e27] text-white">
            <span className="text-2xl font-extrabold tracking-wider mobile:text-lg tablet:text-xl laptop:text-2xl">EcoVision</span>
            <div className="flex gap-6 items-center mobile:hidden">
                <div className="flex gap-6 font-semibold">
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