import logo from '@/public/static/logo/logo.png';
import Image from 'next/image';
import React from 'react'

export default function Logo() {
  return (
    <Image src={logo} height={128} width={128} alt='The Bright Layers Logo' />
  )
}
