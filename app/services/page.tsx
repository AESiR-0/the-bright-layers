import React from 'react'
import ServiceSection from '@/components/sections/service/Services'
import ServiceCards from '@/components/sections/service/Card'
import Hero from '@/components/sections/service/Hero'

export default function page() {
  return (
    <div className='w-full overflow-x-hidden '>
      <Hero />
      <ServiceSection />
      <ServiceCards />

    </div>
  )
}
