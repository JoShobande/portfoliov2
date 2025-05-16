import AboutMe from "@components/components/AboutMe/AboutMe";
import Contact from "@components/components/Contact/Contact";
import Footer from "@components/components/Footer/Footer";
import Hero from "@components/components/Hero/Hero";
import Portfolio from "@components/components/Portfolio/Portfolio";
import Resume from "@components/components/Resume/Resume"

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <div className="h-screen" id='Home'>
        <Hero/>
      </div>
      <div className='w-[90%] lg:w-[80%] m-auto'>
        <div id='About'>
          <AboutMe/>
        </div>
        <div id='Resume'>
          <Resume/>
        </div>
      </div>
      <div className='w-[95%] m-auto mt-[20px]' id='Projects'>
        <Portfolio/>
      </div>
      <div id='Contact'>
        <Contact/>
        <Footer/>
      </div>
      
    </main>
  );
}
