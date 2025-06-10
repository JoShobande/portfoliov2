// components/ContactSection.tsx
'use client'

import React from 'react';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const handleSendEmail = async(e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    const form = e.currentTarget; 
    const formData = new FormData(form);

    const payload = {
      firstName:formData.get('firstName') as string,
      lastName :formData.get('lastName')  as string,
      email    :formData.get('email')     as string,
      subject  :formData.get('subject')   as string,
      message  :formData.get('message')   as string
    }

  
    console.log(payload);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  
    if (res.ok) {
      alert('Message sent!')
      form.reset()
    } else {
      const json = await res.json()
      alert('Error: ' + json.error)
    }


}

export default function ContactSection() {
  return (
    <section className="bg-blue-500 text-white py-16 px-4 lg:px-20">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <form className="space-y-6" onSubmit={(e)=>handleSendEmail(e)}>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 bg-transparent border border-white rounded px-4 py-3 placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
              required
              name='firstName'
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-transparent border border-white rounded px-4 py-3 mt-4 md:mt-0 placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
              name='lastName'
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-white rounded px-4 py-3 placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
            required
            name='email'
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border border-white rounded px-4 py-3 placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
            required
            name='subject'
          />
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full bg-transparent border border-white rounded px-4 py-3 placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
            required
            name='message'
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-white text-blue-500 font-semibold rounded px-8 py-4 hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Get In Touch</h3>
          <p>
            Whether you’re ready to start a new project or just have a quick question, 
            I’m here to help you achieve your goals online. Drop me a message and 
            you’ll hear back within 24 hours with clear guidance and next steps tailored to your needs.<br/>
            I am also open to remote and onsite full-time, part time and contract software engineering/development jobs
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-white mr-3" />
              London ON, Canada
            </li>
            <li className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-white mr-3" />
                shobande.josephin@gmail.com
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/josephine-shobande" target="_blank" rel="noreferrer">
              <Image
                src="/social/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
            <a href="https://github.com/JoShobande" target="_blank" rel="noreferrer">
              <Image
                src="/social/git.png"
                alt="GitHub"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
            <a href="https://x.com/Jossiieeeeee" target="_blank" rel="noreferrer">
              <Image
                src="/social/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
            {/* <a href="mailto:ezekiel.web.dev@gmail.com">
              <Image
                src="/social/tik-tok.png"
                alt="Email"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
