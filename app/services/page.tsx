import React from 'react'
import ServiceSection from '@/components/sections/service/Services'
import Hero from '@/components/sections/service/Hero'
import CTA from '@/components/sections/service/CTA'

export default function page() {
  return (
    <div className='w-full overflow-x-hidden '>
      <Hero />
      <ServiceSection />
      <CTA />
    </div>
  )
}
