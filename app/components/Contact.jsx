import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bd8ba22a-ed28-4edf-a7e7-99b8cf580778");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none '>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className=' text-center text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' >I'd love to hear from you! If you have any question, comments, or feedback, please use the form below.</p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-auto-fit gap-6 mt-10 mb-8'>

                    <input type="text" name="name" id="" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 '/>

                    <input type="email" name="email" id="" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>

                </div>
                <textarea name="message" id="" rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' ></textarea>

                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image src={assets.right_arrow_white} alt='arrow' className='w-4'/></button>
                <p className='mt-4' > {result} </p>
            </form>
        </div>
    )
}

export default Contact