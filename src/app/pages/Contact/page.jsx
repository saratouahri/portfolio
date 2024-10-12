"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  useEffect(() => {
    emailjs.init('j-PE1Tl4YIEGpVPzJ'); 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_tv12bji', 'template_0j1nkxi', event.target)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        alert('Email sent successfully!');
        
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      });
  };

  return (
    <div className="h-fit lg:h-screen w-full bg-surface-secondary  lg:bg-surface-background flex  justify-center items-center ">
      <div className=" lg:w-11/12 lg:h-5/6 lg:bg-surface-secondary lg:rounded-[9px] flex  lg:flex-row  lg:gap-12 flex-col h-fit">
        <div className="flex flex-col ml-8 lg:ml-24 mt-10 gap-5">
          <Image src="/Avatar.svg" width={210} height={210} alt="Avatar" />
          <Image src="/Contact.svg" width={50} height={50} alt="Contact" />
          <div>
            <h1 className="text-[20px] text-white font-medium">
              Enjoyed my work? Let’s work together
            </h1>
            <p className="text-[14px] text-white font-normal">
              I’m always up for a chat. Pop me an email at 
              {' '}
              <a
                href="mailto:sarahtouahri97@gmail.com"
                className="text-[#7BFFAF]"
              >
                sarahtouahri97@gmail.com
              </a>
              {' ,'}
              <br/>
              or give me a shout on social media.
            </p>
          </div>
          <div className=" flex flex-row lg:space-x-2  space-x-6">
            <Link href="https://github.com/TouahriSara">
              <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                <Image src="/logo-github 1.svg" width={30} height={30} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/sara-touahri">
              <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                <Image src="/logo-linkedin 1.svg" width={30} height={30} />
              </div>
            </Link>
            
          </div>
        </div>

        <div className=" mt-6 lg:mt-16 ml-8  lg:w-full lg:max-w-sm  lg:h-10 ">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className=" w-11/12 lg:w-full p-2 mb-4 bg-surface-background rounded-xl  border-[1px] border-surface-background hover:border-[1px]  hover:border-[#7BFFAF] focus:border-[1px]  focus:border-[1px] focus:border-[#7BFFAF] focus:outline-none  text-white"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className=" w-11/12 lg:w-full p-2 mb-4 bg-surface-background rounded-xl  border-[1px] border-surface-background hover:border-[1px] hover:border-[#7BFFAF] focus:border-[1px]  focus:border-[1px] focus:border-[#7BFFAF] focus:outline-none text-white"
            />
           
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="w-11/12 lg:w-full scroll-full h-40 p-2 mb-7 bg-surface-background rounded-xl text-white border-[1px] border-surface-background hover:border-[1px] hover:border-[#7BFFAF] focus:border-[1px] focus:border-[#7BFFAF] focus:outline-none text-white"
            >

            </textarea>
           
            <div className="lg:mb-0 mb-10 block bg-button-primary-default w-fit text-white p-3 rounded-[9px] flex flex-row space-x-2 transition-all duration-300 hover:bg-button-primary-hover border-[1px] border-button-primary-default hover:border-white hover:border-[1px] ">
              <button
                type="submit"
                className="cursor-pointer outline-none border-none bg-transparent text-white"
              > 
                Send me a message
              </button>
              <Image src="/ArrowRight.png" width={20} height={20} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
