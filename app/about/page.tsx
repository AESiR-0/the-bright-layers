import React from 'react'
import FounderSection from '@/components/sections/Founder'
import TeamSection from '@/components/sections/Team'
import MarketingSection from '@/components/sections/AboutSecond'

export default function page() {
  return (
    <div>
      <MarketingSection />
      <FounderSection />
      <TeamSection />
    </div>
  )
}
