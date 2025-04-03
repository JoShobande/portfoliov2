import Image from "next/image"


const AboutMe = () => {
    return(
        <section className="mx-auto max-w-7xl px-4 ">
        {/* Container for two columns in a responsive layout */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left column: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-[500px] md:h-[550px]">
              {/* Next.js Image with fixed width/height or fill */}
              <Image
                src="/aboutme.jpeg" // adjust path to your image
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
  
          {/* Right column: About Me text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary regalia.
            </p>
            <ul className="space-y-1 text-gray-700">
              <li><strong>Name:</strong> Ronaldo Fredrickson</li>
              <li><strong>Date of birth:</strong> November 28, 1989</li>
              <li><strong>Address:</strong> San Francisco CA 97897 USA</li>
              <li><strong>Zip code:</strong> 1000</li>
              <li><strong>Email:</strong> ronaldo@gmail.com</li>
              <li><strong>Phone:</strong> +1-2234-5678-9-0</li>
            </ul>
            <p className="text-blue-500 font-semibold">120 Project complete</p>
            <button className="inline-block rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              Download CV
            </button>
          </div>
        </div>
      </section>
    )
}

export default AboutMe;