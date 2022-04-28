import Link from "next/link"
import { RiHome3Line } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter();
  return (
    <div className="fixed max-w-xs sm:max-w-sm md:max-w-lg mx-auto inset-x-0 bottom-8 bg-[#fefefe] border border-[#ebebeb] px-3 py-3 rounded-xl" style={{ boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.08)" }}>
        <div className="flex justify-around items-center">
            <Link href="/">
                <div  className={router.asPath == "/" ? "bg-[#f4f4fb] text-[#3700b3] flex px-4 py-3  gap-x-1 items-center cursor-pointer rounded-lg" : "flex text-gray-400 gap-x-1 px-4 py-3 items-center hover:text-[#3700b3] hover:bg-[#F3F4FB] cursor-pointer rounded-lg transform duration-300"}>
                    <RiHome3Line className="w-6 h-8 md:w-4 md:h-4 bg-transparent"/>
                    <p className="text-sm font-semibold hidden md:block mb-0 bg-transparent">Home</p>
                </div>
            </Link>
            <Link href="/portofolio">
                <div className={router.asPath == "/portofolio" ? "bg-[#F3F4FB] text-[#3700b3] flex px-4 py-3  gap-x-1 items-center cursor-pointer rounded-lg" : "flex text-gray-400 gap-x-1 px-4 py-3 items-center hover:text-[#3700b3] hover:bg-[#F3F4FB] cursor-pointer rounded-lg transform duration-300"}>
                    <BsCardChecklist className="w-6 h-8 md:w-4 md:h-4 bg-transparent"/>
                    <p className="text-sm font-semibold hidden md:block mb-0 bg-transparent">Portofolio</p>
                </div>
            </Link>
            <Link href="/resources">
                <div className={router.asPath == "/resources" ? "bg-[#F3F4FB] text-[#3700b3] flex px-4 py-3  gap-x-1 items-center cursor-pointer rounded-lg" : "flex text-gray-400 gap-x-1 px-4 py-3 items-center hover:text-[#3700b3] hover:bg-[#F3F4FB] cursor-pointer rounded-lg transform duration-300"}>
                    <FiLayers className="w-6 h-8 md:w-4 md:h-4 bg-transparent"/>
                    <p className="text-sm font-semibold hidden md:block mb-0 bg-transparent">Resources</p>
                </div>
            </Link>
            <Link href="/contact">
                <div className={router.asPath == "/contact" ? "bg-[#F3F4FB] text-[#3700b3] flex px-4 py-3  gap-x-1 items-center cursor-pointer rounded-lg" : "flex text-gray-400 gap-x-1 px-4 py-3 items-center hover:text-[#3700b3] hover:bg-[#F3F4FB] cursor-pointer rounded-lg transform duration-300"}>
                    <FiSend className="w-6 h-8 md:w-4 md:h-4 bg-transparent"/>
                    <p className="text-sm font-semibold hidden md:block mb-0 bg-transparent">Contact</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar