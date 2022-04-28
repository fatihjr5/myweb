import React from 'react'
import Layouts from '../layouts/Layouts'

function Portofolio() {
  return (
    <Layouts>
        <div className="mt-16 mb-10">
            <p className="text-sm font-bold text-gray-600 pb-4">Portofolio</p>
            <hr />
        </div>
        <section className="space-y-4">
            <div className="flex items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">Stylish Homepage</h5>
                    <p className="text-sm font-normal text-gray-500">UI Design</p>
                </section>
                <a href="https://www.instagram.com/p/CZa_omtBRco/?utm_source=ig_web_copy_link" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
            <div className="flex flex-row items-start space-y-2 md:space-y-0 md:items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">Stylish Detail Page</h5>
                    <p className="text-sm font-normal text-gray-500">UI Design</p>
                </section>
                <a href="https://www.instagram.com/p/CZPhnUABHW9/?utm_source=ig_web_copy_link" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
            <div className="flex items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">Pejuang NFT Landing Page</h5>
                    <p className="text-sm font-normal text-gray-500">Frontend Development</p>
                </section>
                <a href="https://pejuangnft.netlify.app/" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
            <div className="flex items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">Literature Yoga Landing Page</h5>
                    <p className="text-sm font-normal text-gray-500">Frontend Development</p>
                </section>
                <a href="https://literatureyoga.netlify.app/" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
            <div className="flex items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">Manji Restaurant Landing Page</h5>
                    <p className="text-sm font-normal text-gray-500">Frontend Development</p>
                </section>
                <a href="https://manji-restaurant.netlify.app/" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
            <div className="flex items-center justify-between pb-3">
                <section className="flex flex-col">
                    <h5 className="text-base font-medium text-black mb-1">The Hyatt - UI Mobile Apps</h5>
                    <p className="text-sm font-normal text-gray-500">UI Design</p>
                </section>
                <a href="https://www.instagram.com/p/Cc4P8SRBdqg/?utm_source=ig_web_copy_link" className='px-4 py-2 text-sm font-medium rounded-lg text-white bg-black'>See Detail</a>
            </div>
        </section>
    </Layouts>
  )
}

export default Portofolio