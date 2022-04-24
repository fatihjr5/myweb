import Layouts from "../layouts/Layouts";
import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <Layouts>
      {/* header-start */}
      <div className="flex items-center gap-x-2 mt-16 mb-10">
        <Image src="/img/gradient.png" alt="Picture of the author" width={50} height={50}/>
        <section className="flex flex-col">
          <h5 className="text-lg sm:text-xl font-medium">Atshilla Fatih Ibrahim</h5>
          <p className="text-sm sm:text-base font-normal text-[#9999]">Clean, Elegant, Modern vibe</p>
        </section>
      </div>
      {/* header-end */}
      {/* about-start */}
      <div className="flex flex-col gap-y-2 py-6">
        <p className="text-sm font-bold text-gray-600">About Me</p>
        <h5 className="text-lg font-normal">Hi, i'm about one and half year in Frontend developer & UI Designer, working at <span className="text-[#1C42B4] font-bold">Ninedragonlabs</span>. For me, Aestethic are good, but User experience is one level above it.</h5>
      </div>
      {/* about-end */}
    </Layouts>
  )
}
