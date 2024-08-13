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
                    <div className='w-[30px] h-[5px] rounded-[8px] bg-[red] mb-[1px]'/>
                    <div className='w-[30px] h-[5px] rounded-[8px] bg-[red] mb-[1px]'/>
                    <div className='w-[30px] h-[5px] rounded-[8px] bg-[red] mb-[1px]'/>
                </div>

                <div className={`${openMobileMenu ? styles['menu-open']: styles['menu']}`}>
                    <div 
                        className='flex md:hidden flex-col items-end'
                        onClick={()=>setOpenMobileMenu(false)}
                    >
                        <p className='text-[24px] mb-[20px]'>X</p>
                    </div>
                    <ul className='md:flex justify-around gap-x-[20px]' >
                        <li className='text-[18px]'>Home</li>
                        <li className='text-[18px]'>About</li>
                        <li className='text-[18px]'>Experience</li>
                        <li className='text-[18px]'>Services</li>
                        <li className='text-[18px]'>Projects</li>
                        <li className='text-[18px]'>Contact</li>
                    </ul>
                </div>
                
               
            </nav>
        </header>
    )
}

export default Header;