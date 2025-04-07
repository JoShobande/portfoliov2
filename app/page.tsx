import AboutMe from "@components/components/AboutMe/AboutMe";
import Hero from "@components/components/Hero/Hero";


export default function Home() {
  return (
    <main>
      <div className="h-screen ">
        <Hero/>
      </div>
      <AboutMe/>
      
    </main>
  );
}
