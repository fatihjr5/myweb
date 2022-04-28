import Link from 'next/link'
import React from 'react'
import { FaTelegramPlane,FaInstagram,FaDribbble,FaBehance } from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import Layouts from '../layouts/Layouts'
function Contact() {
  return (
    <Layouts>
        <div className="mt-16 mb-10">
            <p className="text-sm font-bold text-gray-600 pb-4">Contact & Socials</p>
            <hr />
        </div>
        <div className="my-28">
            <div className="flex justify-center items-center gap-x-4 mb-6">
                <Link href="https://t.me/fatihjr5" className="">
                    <section className="bg-[#f3f4fb] p-3 rounded-lg cursor-pointer hover:scale-125 transform duration-300 ease-out hover:text-[#3700b3]">
                        <FaTelegramPlane className='w-6 h-6 bg-transparent'/>
                    </section>
                </Link>
                <Link href="https://www.instagram.com/_fatihjr/" className="">
                    <section className="bg-[#f3f4fb] p-3 rounded-lg cursor-pointer hover:scale-125 transform duration-300 ease-out hover:text-[#3700b3]">
                        <FaInstagram className='w-6 h-6 bg-transparent'/>
                    </section>
                </Link>
                <Link href="" className="">
                    <section className="bg-[#f3f4fb] p-3 rounded-lg cursor-pointer hover:scale-125 transform duration-300 ease-out hover:text-[#3700b3]">
                        <FaDribbble className='w-6 h-6 bg-transparent'/>
                    </section>
                </Link>
                <Link href="" className="">
                    <section className="bg-[#f3f4fb] p-3 rounded-lg cursor-pointer hover:scale-125 transform duration-300 ease-out hover:text-[#3700b3]">
                        <FaBehance className='w-6 h-6 bg-transparent'/>
                    </section>
                </Link>
            </div>
            <p className="text-base text-center font-normal mb-6">or</p>
            <Link href="mailto:shilla.ibra@gmail.com?subject=Hi, fatih. I'd like to collaborate or sharing with you. I'm ready anytime&cc=" className="">
                <section className="bg-[#f3f4fb] p-3 rounded-lg cursor-pointer hover:scale-125 transform duration-300 ease-out hover:text-[#3700b3]">
                    <div className="flex gap-x-2 items-center justify-center bg-transparent">
                        <MdOutlineEmail className='w-4 h-4 mt-0.5 bg-transparent'/>
                        <span className="text-sm font-bold bg-transparent">Send a Email</span>
                    </div>
                </section>
            </Link>
        </div>

    </Layouts>
  )
}

export default Contact