import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"


const Resume = () => {
    return(
        <section className='mt-[100px] lg:mt-[150px]' >
            <div className='w-full lg:grid  grid-cols-[1fr,3fr] '>
                <div className='hidden lg:block w-auto gap-[15px]'>
                    <div>
                        <p className='font-[600] text-[20px] cursor-pointer mb-[20px]'>Education</p>
                    </div>
                    <div>
                        <p className='font-[600] text-[20px] cursor-pointer mb-[20px]'>Experience</p>
                    </div>
                    <div>
                        <p className='font-[600] text-[20px] cursor-pointer'>Skills</p>
                    </div>
                </div>
                <div>
                    <div className='mb-[80px]'>
                        <Education/>
                    </div>
                    <div className='mb-[80px]'>
                        <Experience/>
                    </div>
                    <div>
                        <Skills/>
                    </div> 
                </div>
            </div>
           
        </section>
    )
}

export default Resume;