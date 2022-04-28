import React from 'react'
import Layouts from '../layouts/Layouts'
function resources() {
  return (
    <Layouts>
        <div className="mt-16 mb-10">
            <p className="text-sm font-bold text-gray-600">Resources</p>
            <h5 className="text-sm sm:text-base font-normal my-2 text-[#9999]">Hi, you can use my resources as your portofolio for free.But, you should edit atleast 40% from original.</h5>
            <hr />
        </div>
        <section className="flex flex-col justify-center gap-y-4 -mt-8">
          <img className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto' src="./img/tokyo-online-calendar-with-marked-days-in-a-web-browser.png" alt="" />
          <p className="text-sm font-bold -mt-12 text-center text-[#5555]">Will be available soon</p>
        </section>
    </Layouts>
  )
}

export default resources