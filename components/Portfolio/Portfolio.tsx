import Image from "next/image";

const Portfolio = () => {

  const PROJECTS = [
    { src: "/projects/endowd2.png", title: "Endowd Africa", url: 'https://www.endowd.africa/' },
    { src: "/projects/hmc.png",    title: "Heritage Men's Clinic", url:'https://heritagemensclinic.ng/' },
  ];

  return(
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ src, title, url }, i) => (
            <a
              key={i}
              className="group relative h-72 w-full overflow-hidden rounded-md shadow cursor-pointer"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(min-width:1024px) 33vw,
                        (min-width:640px) 50vw,
                        100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              <h3 className="mx-4 text-center text-xl font-semibold tracking-wide text-white">
                  {title}
              </h3>
              </div>
            </a>
          ))}
        </div>
      </main>
    )
}

export default Portfolio;