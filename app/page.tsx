import AboutMe from "@components/components/AboutMe/AboutMe";
import Hero from "@components/components/Hero/Hero";
import Portfolio from "@components/components/Portfolio/Portfolio";
import Resume from "@components/components/Resume/Resume"

export default function Home() {
  return (
    <main>
      <div className="h-screen ">
        <Hero/>
      </div>
      <div className='w-[90%] lg:w-[80%] m-auto'>
        <AboutMe/>
        <Resume/>
      </div>
      <div className='w-[95%] m-auto mt-[20px]'>
        <Portfolio/>
      </div>
      
    </main>
  );
}
