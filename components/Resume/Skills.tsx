
import type { IconType } from "react-icons";
import Image from "next/image";

const Skills = () => {

  type Skill = {
      name: string;
      percent: number;
      Icon: IconType;
  };

  const skillLogos = [
    { name: 'HTML', src: '/skills/html.png' },
    { name: 'CSS', src: '/skills/css.png' },
    { name: 'Javascript', src: '/skills/js.png' },
    { name: 'React', src: '/skills/react.png' },
    { name: 'NextJs', src: '/skills/nextjs.png' },
    { name: 'TypeScript', src: '/skills/typescript.png' },
    { name: 'Redux', src: '/skills/redux.png' },
    { name: 'Tailwind CSS', src: '/skills/tailwind.png' },
    { name: 'Vercel', src: '/skills/vercel.png' },
    { name: 'AWS', src: '/skills/aws.png' },
    { name: 'MUI', src: '/skills/mui.png' },
    { name: 'NPM', src: '/skills/npm.png' },
    { name: 'Figma', src: '/skills/figma.png' },
    { name: 'Node.js',    src: '/skills/node-js.png' },
    { name: 'Git',        src: '/skills/github.png' },
    { name: 'SQL',        src: '/skills/sql.png' },
    { name: 'Docker',     src: '/skills/docker.png' },
    { name: 'Mongodb',     src: '/skills/mongodb.png' },
    { name: 'Prisma',     src: '/skills/docker.png' },
  ]

      
  return(
      <div className='pb-[20px]'>
          <h1 className='text-[30px] lg:text-[38px] text-blue-500 font-[600] mb-[20px]'>Skills</h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillLogos.map(({ name, src }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-transform duration-200 hover:scale-105"
                title={name}
              >
                <Image
                  src={src}
                  alt={name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <p className='mt-2'>{name}</p>
              </div>
            ))}
          </div>   
      </div>
    )
}

export default Skills;