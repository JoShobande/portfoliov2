'use client'

import { useEffect, useRef, useState } from "react";
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"


const Resume = () => {

    const [activeSection, setActiveSection] = useState<string>('education');

    const educationRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState<boolean>(false);


    const resumeRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
  

    useEffect(() => {
        const options: IntersectionObserverInit = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, 
        };
    
        const observerCallback: IntersectionObserverCallback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute('data-section');
              if (sectionId) {
                setActiveSection(sectionId);
              }
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, options);
    
        // If ref is set, start observing the element
        [educationRef, experienceRef, skillsRef].forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
    
        // Cleanup: Unobserve elements when the component unmounts
        return () => {
            [educationRef, experienceRef, skillsRef].forEach(ref => {
              if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    useEffect(() => {
        const topOffset = 150; // same as your `top-[150px]`
        const handleScroll = () => {
          if (!resumeRef.current || !sidebarRef.current) return;
          const resumeRect = resumeRef.current.getBoundingClientRect();
          const sidebarHeight = sidebarRef.current.offsetHeight;
  
          if (
            resumeRect.top < topOffset &&
            resumeRect.bottom > topOffset + sidebarHeight
          ) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
  
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial check
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <section className="mt-[100px] lg:mt-[150px]">
            <div className="w-full lg:grid grid-cols-[1fr,3fr]">
                {/* Sidebar (left column) */}
                <div className="hidden lg:block">
                    <nav className="sticky top-[100px] lg:top-[150px] space-y-4 ">
                        <div onClick={() => handleScrollTo(educationRef)} className='flex items-center transition-all duration-300 ease-in-out'>
                            <div
                                className={`${
                                    activeSection === 'education' 
                                    ?
                                        'w-[20px] border border-blue-500 h-0 transition-all duration-300 ease-in-out'
                                    :
                                        ''
                                }`}
                            />
                            <p
                                className={`font-[600] text-[20px] cursor-pointer transition-all duration-300 ease-in-out  ${
                                activeSection === 'education' ? 'text-blue-500 ml-[5px]' : 'text-black'
                                }`}
                            >
                                Education
                            </p>  
                        </div>
                        <div onClick={() => handleScrollTo(experienceRef)} className='flex items-center transition-all duration-300 ease-in-out'>
                            <div
                                className={`${
                                    activeSection === 'experience' 
                                    ?
                                        'w-[20px] border border-blue-500 h-0 transition-all duration-300 ease-in-out'
                                    :
                                        ''
                                }`}
                            />
                            <p
                                className={`font-[600] text-[20px]  cursor-pointer transition-all duration-300 ease-in-out ${
                                activeSection === 'experience' ? 'text-blue-500 ml-[5px]' : 'text-black'
                                }`}
                            >
                                Experience
                            </p>
                        </div>
                        <div onClick={() => handleScrollTo(skillsRef)} className='flex items-center transition-all duration-300 ease-in-out'>
                            <div
                                className={`${
                                    activeSection === 'skills' 
                                    ?
                                        'w-[20px] border border-blue-500 h-0 transition-all duration-300 ease-in-out'
                                    :
                                        ''
                                }`}
                            />
                            <p
                                className={`font-[600] text-[20px] cursor-pointer transition-all duration-300 ease-in-out ${
                                activeSection === 'skills' ? 'text-blue-500 ml-[5px]' : 'text-black'
                                }`}
                            >
                                Skills
                            </p>
                        </div>
                    </nav>
                </div>

                <div>
                    <div
                        className="mb-[80px]"
                        ref={educationRef}
                        data-section="education"
                    >
                        <Education />
                    </div>
                    <div
                        className="mb-[80px]"
                        ref={experienceRef}
                        data-section="experience"
                    >
                        <Experience />
                    </div>
                    <div ref={skillsRef} data-section="skills">
                        <Skills />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;