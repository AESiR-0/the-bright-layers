import React from 'react'
import ServiceSection from '@/components/sections/service/Services'
import ServiceCards from '@/components/sections/service/Card'

export default function page() {
  return (
    <div className='w-full overflow-x-hidden '>
      <ServiceSection />
      <ServiceCards />
    </div>
  )
}
