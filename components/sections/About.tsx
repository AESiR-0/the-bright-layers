import React from 'react'
import Image from 'next/image'
import SecondaryButton from '../SecondaryButton'


export default function About() {
  return (
    <div className="h-[85vh] bg-secondary  flex flex-col items-center justify-center"> <div className="container mx-auto px-20 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <Image src={"./vercel.svg"} alt="GIF of services " height={512} width={512} /> 
    </div>
    <div className="md:w-1/2 md:pl-8">
      <h1 className="text-4xl font-bold mb-4">
    Heading
    <br />
    of
    <br />
    4
    <br />
    Lines
      </h1>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sunt accusantium at numquam magnam et quaerat obcaecati sint cupiditate dolorum deleniti, qui veniam odit id tempore? Aperiam ipsa consequatur nemo natus explicabo corporis animi aspernatur recusandae velit! Earum atque at nulla eveniet, iste totam, laboriosam porro, libero consectetur consequatur officiis.
      </p>
      <SecondaryButton title="Learn More" link="/services" />

    </div>
  </div>
</div>
  )
}
