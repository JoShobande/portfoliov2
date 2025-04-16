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
        if (educationRef.current) observer.observe(educationRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);
    
        // Cleanup: Unobserve elements when the component unmounts
        return () => {
          if (educationRef.current) observer.unobserve(educationRef.current);
          if (experienceRef.current) observer.unobserve(experienceRef.current);
          if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, []);

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <section className='mt-[100px] lg:mt-[150px]' >
            <div className='w-full lg:grid  grid-cols-[1fr,3fr] '>
                <div className='hidden lg:block w-auto gap-[15px] sticky top-[150px]'>
                    <div onClick={() => handleScrollTo(educationRef)}>
                        <p 
                            className={`font-[600] text-[20px] cursor-pointer mb-[20px] ${
                            activeSection === 'education' ? 'text-blue-500' : 'text-black'
                            }`}
                        >
                            Education
                        </p>
                    </div>
                    <div onClick={() => handleScrollTo(experienceRef)}>
                        <p 
                            className={`font-[600] text-[20px] cursor-pointer mb-[20px] ${
                                activeSection === 'experience' ? 'text-blue-500' : 'text-black'
                            }`}
                        >
                            Experience
                        </p>
                    </div>
                    <div onClick={() => handleScrollTo(skillsRef)}>
                        <p 
                            className={`font-[600] text-[20px] cursor-pointer ${
                            activeSection === 'skills' ? 'text-blue-500' : 'text-black'
                            }`}
                        >
                            Skills
                        </p>
                    </div>
                </div>
                <div >
                    <div 
                        className='mb-[80px]'
                        ref={educationRef}
                        data-section="education"
                    >
                        <Education/>
                    </div>
                    <div  
                        className="mb-[80px]"
                        ref={experienceRef}
                        data-section="experience"
                    >
                        <Experience/>
                    </div>
                    <div ref={skillsRef} data-section="skills">
                        <Skills/>
                    </div> 
                </div>
            </div>
           
        </section>
    )
}

export default Resume;