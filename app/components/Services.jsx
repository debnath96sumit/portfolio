import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className=' text-center text-5xl font-Ovo'>My services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero non exercitationem nesciunt numquam suscipit, animi culpa aut eos dicta, temporibus voluptate, laudantium veritatis nobis.</p>

      <div className='grid-auto-fit gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className="myServiceCard dark:hover:shadow-white">
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white ">{title}</h3>
            <p className="text-xm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link} className="flex items-center gap-4 text-sm mt-5">
              Read more <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services