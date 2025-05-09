import Image from "next/image";


const Portfolio = () => {

    const IMAGES = [
        { src: "/wine.jpg",       alt: "Wine rack" },
        { src: "/wine.jpg",    alt: "AirPods" },
        { src: "/wine.jpg",    alt: "Portrait" },
        { src: "/wine.jpg",      alt: "Chair & basket" },
        { src: "/wine.jpg",     alt: "Geometric wall" },
        { src: "/wine.jpg", alt: "Watermelon" },
        { src: "/wine.jpg",    alt: "Granola bowl" },
        { src: "/wine.jpg",    alt: "MacBook + plant" },
        { src: "/wine.jpg",       alt: "Hanging lamps" },
        // …add as many as you like
    ];

    const CARDS = [
        {
          title: "Web Design",
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "🎨",
        },
        {
          title: "Photography",          // the featured (blue) card
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "📷",
          featured: true,
        },
        {
          title: "Web Developer",
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "💻",
        },
        {
          title: "App Developing",
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "📱",
        },
        {
          title: "Branding",
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "💳",
        },
        {
          title: "Product Strategy",
          copy: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: "💡",
        },
      ];

      const PROJECTS = [
        { src: "/wine.jpg",       title: "Wine Cellar UI" },
        { src: "/wine.jpg",    title: "Minimal Product Shot" },
        { src: "/wine.jpg",    title: "Portrait Lighting Study" },
        { src: "/wine.jpg",      title: "Scandi Chair Render" },
        { src: "/wine.jpg",     title: "Faceted Facade Concept" },
        { src: "/wine.jpg", title: "Food Blog Hero" },
        { src: "/wine.jpg",    title: "Breakfast Flat-lay" },
        { src: "/wine.jpg",    title: "Startup Landing Page" },
        { src: "/wine.jpg",       title: "Pendant Lamps Ad" },
      ];

    return(
        <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Portfolio</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(({ src, title }, i) => (
                <article
                    key={i}
                    className="group relative h-72 w-full overflow-hidden rounded-md shadow cursor-pointer"
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
                    <h3 className="mx-4 text-center text-lg font-semibold tracking-wide text-white">
                        {title}
                    </h3>
                    </div>
                </article>
            ))}
        </div>
    </main>
    )
}

export default Portfolio;