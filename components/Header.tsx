import Image from "next/image";
import Link from "next/link"
import clsx from 'clsx';

const Header = () => {
    return(
        <header>
            <nav className='flex items-center justify-between w-[80%] m-auto'>
                <Image 
                    src={'/roundedLogo.png'}
                    alt='jossy_logo'
                    width={120}
                    height={120}
                /> 
                <ul className='flex justify-around'>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>My Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;