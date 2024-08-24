'use client'

import Image from "next/image";
import { useState } from "react";
import styles from './componentStyles.module.scss'

const Header = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return(
        <header>
            <nav className={`${openMobileMenu ? '': 'items-center' } flex md:items-center justify-between lg:w-[80%] m-auto`}>
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
                    className={`${openMobileMenu ? 'hidden' : 'block' } md:hidden pr-[10px]`}
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
                            <li className='text-[22px]'>Home</li>
                            <div className={`${styles['underline']}`}/>
                        </div>
                        <div className='md:flex items-center flex-col'>
                            <li className='text-[22px]'>About</li>
                            <div className={`${styles['underline']}`}/>
                        </div>
                        <div className='md:flex items-center flex-col'>
                            <li className='text-[22px]'>Resume</li>
                            <div className={`${styles['underline']}`}/>
                        </div>
                        <div className='md:flex items-center flex-col'>
                            <li className='text-[22px]'>Services</li>
                            <div className={`${styles['underline']}`}/>
                        </div>
                       <div className='md:flex items-center flex-col'>
                            <li className='text-[22px]'>Projects</li>
                            <div className={`${styles['underline']}`}/>
                       </div>
                              
                        <div className='md:flex items-center flex-col'>
                            <li className='text-[22px]'>Contact</li>
                            <p className={`${styles['underline']}`}/>
                        </div>
                             
                    </ul>
                </div>
                
               
            </nav>
        </header>
    )
}

export default Header;