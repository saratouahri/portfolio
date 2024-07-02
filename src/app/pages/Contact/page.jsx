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
    <div className="h-screen w-full bg-surface-background flex justify-center items-center font-heebo">
      <div className="w-11/12 h-5/6 bg-surface-secondary rounded-[9px] flex gap-16">
        <div className="flex flex-col ml-24 mt-10 gap-5">
          <Image src="/Avatar.svg" width={200} height={200} alt="Avatar" />
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
          <div className=" flex flex-row space-x-2 ">
            <Link href="https://github.com/TouahriSara">
              <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                <Image src="/logo-github 1.svg" width={30} height={30} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/sara-touahri-39284a2a4">
              <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                <Image src="/logo-linkedin 1.svg" width={30} height={30} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/____saa___raa____/">
              <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                <Image src="/logo-instagram 1.svg" width={30} height={30} />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-16 w-full max-w-md h-8">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full p-2 mb-4 bg-surface-background rounded-xl text-white hover:border-[1px] hover:border-[#7BFFAF] focus:border-[1px] focus:border-[#7BFFAF]"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="w-full p-2 mb-4 bg-surface-background rounded-xl text-white hover:border-[1px] hover:border-[#7BFFAF] focus:border-[1px] focus:border-[#7BFFAF]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full h-40 p-2 mb-7 bg-surface-background rounded-xl text-white hover:border-[1px] hover:border-[#7BFFAF] focus:border-[1px] focus:border-[#7BFFAF]"
            ></textarea>
            <div className="block bg-button-primary-default w-fit text-white p-4 rounded-[9px] flex flex-row space-x-2 transition-all duration-300 hover:bg-button-primary-hover hover:border-white hover:border-[1px]">
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
