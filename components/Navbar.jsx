import Link from "next/link"
import { RiHome3Line } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
function Navbar() {
  return (
    <div className="fixed max-w-xs sm:max-w-sm md:max-w-lg mx-auto inset-x-0 bottom-10 bg-[#fefefe] border border-[#ebebeb] px-3 py-3 rounded-xl" style={{ boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.08)" }}>
        <div className="flex justify-around items-center">
            <Link href="/">
                <div className="flex text-gray-400 hover:text-[#3700b3] gap-x-1 items-center hover:bg-[#F3F4FB] px-4 py-3 cursor-pointer rounded-lg transform duration-300">
                    <RiHome3Line className="w-6 h-8 md:w-4 md:h-4"/>
                    <p className="text-sm font-semibold hidden md:block mb-0">Home</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex text-gray-400 hover:text-[#3700b3] gap-x-1 items-center hover:bg-[#F3F4FB] px-4 py-3 cursor-pointer rounded-lg transform duration-300">
                    <BsCardChecklist className="w-6 h-8 md:w-4 md:h-4"/>
                    <p className="text-sm font-semibold hidden md:block mb-0">Portofolio</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex text-gray-400 hover:text-[#3700b3] gap-x-1 items-center hover:bg-[#F3F4FB] px-4 py-3 cursor-pointer rounded-lg transform duration-300">
                    <FiLayers className="w-6 h-8 md:w-4 md:h-4"/>
                    <p className="text-sm font-semibold hidden md:block mb-0">Resources</p>
                </div>
            </Link>
            <Link href="/">
                <div className="flex text-gray-400 hover:text-[#3700b3] gap-x-1 items-center hover:bg-[#F3F4FB] px-4 py-3 cursor-pointer rounded-lg transform duration-300">
                    <BsCardChecklist className="w-6 h-8 md:w-4 md:h-4"/>
                    <p className="text-sm font-semibold hidden md:block mb-0">Contact</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar