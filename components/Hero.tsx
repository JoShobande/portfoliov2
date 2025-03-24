'use client'

import Image from "next/image";
import { useState } from "react";
import styles from './componentStyles.module.scss'

const Hero = () => {

  

    return(
        <section className='absolute top-0 z-[999]'>
           <div className='grid grid-cols-2'>
                <div className='bg-[#3e64ff] opacity-[0.1]'>
                    {/* <p className='text-[#00000] font-bold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus itaque nulla minima obcaecati cupiditate ullam dicta tempore perspiciatis ea error debitis saepe esse adipisci fugiat, labore quae repellat, similique atque!</p> */}
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rerum harum, maiores in sint, exercitationem beatae velit obcaecati qui, fugiat architecto a ea esse sequi iure totam nobis quae dignissimos.20</p>
                </div>
           </div>
          
        </section>
    )
}

export default Hero;