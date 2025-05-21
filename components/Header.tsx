'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './componentStyles.module.scss'

const Header = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItem = ['Home', 'About', 'Resume', 'Projects', 'Contact']
    const [activeSection, setActiveSection] = useState('Home')


    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
              }
            })
          },
          {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
          }
        )
      
        menuItem.forEach(menu => {
          const id = menu
          const el = document.getElementById(id)
          if (el) observer.observe(el)
        })
      
        return () => {
          menuItem.forEach(menu => {
            const id = menu
            const el = document.getElementById(id)
            if (el) observer.unobserve(el)
          })
        }
      }, [menuItem])
   
    return(
        <header className={` ${isScrolled ? 'sticky top-0 left-0 z-[9999]': ''}`}>
            <div className='grid grid-cols-2 relative'>
                <nav className={
                        `
                        ${openMobileMenu ? '': 'items-center' } 
                        flex md:items-center justify-between lg:justify-around w-[100%] absolute 
                        ${isScrolled? 'bg-[white] shadow-md ' : ''}   
                        `
                    }
                >
                    <div className={`w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] relative ${isScrolled ? 'w-[80px] h-[80px]': ''}`}>
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
                            {
                                menuItem.map((menu)=>{
                                    return(
                                        <div className='md:flex items-center flex-col'>
                                            <li className={`text-[18px] font-[300] ${activeSection === menu ? styles['activeUnderline'] : ''}`} key={menu} >
                                                <a 
                                                    onClick={()=>setOpenMobileMenu(false)}
                                                    href={`#${menu}`}
                                                    className={` ${activeSection === menu ? `text-blue-500` : ''}`}
                                                >
                                                    {menu}
                                                </a>
                                                
                                            </li>
                                            {activeSection !== menu && <div className={`${styles['underline']}`}/> } 
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;