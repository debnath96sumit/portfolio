import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20' >
        <div className='text-center' >
            <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={ isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            debsum96@gmail.com
            </div>
        </div>
        {/* <hr/> */}
        <div className='text-center sm:flex items-center justify-between border-top border-gray-400 mx-[10%] mt-12 py-6 ' >
            <p>Copyright © 2025 Sumit Debnath. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0' >
                <li className='hover:-translate-y-2 duration-500' >
                    <a target='_blank' href="https://github.com/debnath96sumit/">Github</a>
                </li>
                <li className='hover:-translate-y-2 duration-500' >
                    <a target='_blank' href="https://x.com/SumitDeb96">X</a>
                </li>
                <li className='hover:-translate-y-2 duration-500' >
                    <a target='_blank' href="https://www.linkedin.com/in/sumit-debnath-2214a6144/">LinkedIn</a>
                </li>
                <li className='hover:-translate-y-2 duration-500' >
                    <a target='_blank' href="https://www.facebook.com/simon.prince.564">Facebook</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer