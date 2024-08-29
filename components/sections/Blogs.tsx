import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  return (
    <section className="py-24 ">
    <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
      <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our latest  blog</h2>
      <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">

      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="group w-full px-6 max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
         <div className="flex w-full  items-center">
             <Image src="/static/bg.jpg" width={512} height={128} alt="blogs tailwind section" className="rounded-t-2xl w-full" />
         </div>
         <div className="block">
                  <h4 className="text-gray-900 font-medium leading-8 mb-9">From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech</h4>
                  <div className="flex items-center justify-between  font-medium">
                      <h6 className="text-sm text-gray-500">By John D.</h6>
                      <span className="text-sm text-indigo-600">2 year ago</span>
                  </div>
              </div>
     </div>
      ))}
      </div>
      <Link href="/blogs" className="cursor-pointer border mt-10 border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</Link>

    </div>
</section>)}
                                        