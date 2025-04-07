'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './componentStyles.module.scss'

const Header = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50); // Change background when scroll is more than 50px
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className={``}>
            <div className='grid grid-cols-2 relative'>
                <div className='bg-[#3e64ff] opacity-[0.1]'/>
                <div/>
                <nav className={`${openMobileMenu ? '': 'items-center' } flex md:items-center justify-between lg:justify-around w-[100%] absolute`}>
                    <div className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative'>
                        <Image 
                            src={'/roundedLogo.png'}
                            alt='jossy_logo'
                            fill={true}
                            objectFit="contain" 
                            className='cursor-pointer'
                        /> 
                    </div>

                    <div 
                        className={`z-[1000] ${openMobileMenu ? 'hidden' : 'block' } md:hidden mr-[15px]`}
                        onClick={()=>setOpenMobileMenu(true)}
                    >
                        <div className='w-[30px] h-[5px] rounded-[8px] bg-[grey] mb-[1px]'/>
                        <div className='w-[30px] h-[5px] rounded-[8px] bg-[grey] mb-[1px]'/>
                        <div className='w-[30px] h-[5px] rounded-[8px] bg-[grey] mb-[1px]'/>
                    </div>

                    <div className={`${openMobileMenu ? styles['menu-open']: styles['menu']}`}>
                        <div 
                            className='flex md:hidden flex-col items-end'
                            onClick={()=>setOpenMobileMenu(false)}
                        >
                            <p className='text-[24px] mb-[20px] text-[white]'>X</p>
                        </div>
                        <ul className='md:flex justify-around gap-x-[30px]' >
                            <div className='md:flex items-center flex-col'>
                                <li className={`text-[22px] font-[300]`}>Home</li>
                                <div className={`${styles['underline']}`}/>
                            </div>
                            <div className='md:flex items-center flex-col'>
                                <li className='text-[22px] font-[300]'>About</li>
                                <div className={`${styles['underline']}`}/>
                            </div>
                            <div className='md:flex items-center flex-col'>
                                <li className='text-[22px] font-[300]'>Resume</li>
                                <div className={`${styles['underline']}`}/>
                            </div>
                            <div className='md:flex items-center flex-col'>
                                    <li className='text-[22px] font-[300]'>Projects</li>
                                    <div className={`${styles['underline']}`}/>
                            </div>    
                            <div className='md:flex items-center flex-col'>
                                <li className='text-[22px] font-[300]'>Contact</li>
                                <p className={`${styles['underline']}`}/>
                            </div>    
                        </ul>
                    </div>
                </nav>
            </div>
          
            
        </header>
    )
}

export default Header;