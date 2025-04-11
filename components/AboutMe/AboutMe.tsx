import Image from "next/image"


const AboutMe = () => {
    return(
      <section className=" mt-[60px] lg:mt-0 ">
        {/* Container for two columns in a responsive layout */}
        <div className="lg:grid items-center grid-cols-2">
          {/* Left column: Image */}
          <div className="hidden lg:flex justify-center md:justify-end ">
            <div className="relative w-full md:h-[550px]">
              {/* Next.js Image with fixed width/height or fill */}
              <Image
                src="/aboutme.jpeg"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
  
          <div className="space-y-4 lg:ml-[30px]">
            <h2 className="text-[38px] lg:text-[48px] font-bold">About Me</h2>
            <p className="text-justify text-gray-500 leading-[30px]">
              I'm a dedicated Full-Stack Developer who builds innovative web and mobile applications that are both powerful and user-friendly.
              I work with modern technologies such as JavaScript, TypeScript, React, Next.js, and Node.js/Express to bring creative ideas to life. 
              I also integrate advanced AI techniques into my projects to develop smart solutions that enhance user experience and improve efficiency.
              When I'm not coding, I enjoy sharing insights and tips through creative content that blends tech know-how with everyday lifestyle ideas—making 
              complex topics easier for everyone to understand. I'm always driven to learn and push the boundaries of what technology can do.
              I welcome the opportunity to work together on exciting projects or simply exchange ideas. Feel free to contact me or connect on my social media platforms 
              if you're interested in collaboration or want to learn more!
            </p>
            <button className="inline-block rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              Download CV
            </button>
          </div>
        </div>
      </section>
    )
}

export default AboutMe;