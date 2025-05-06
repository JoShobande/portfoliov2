import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import type { IconType } from "react-icons";


const Skills = () => {

    type Skill = {
        name: string;
        percent: number;
        Icon: IconType;
    };

    const skills: Skill[] = [
        { name: "React",      percent: 90, Icon: FaReact },
        { name: "TypeScript", percent: 85, Icon: SiTypescript },
        { name: "Node.js",    percent: 75, Icon: FaNodeJs },
        { name: "Git",        percent: 95, Icon: FaGitAlt },
        { name: "SQL",        percent: 80, Icon: FaDatabase },
        { name: "Docker",     percent: 65, Icon: FaDocker },
    ];

      
    return(
        <div>
            <h1 className='text-[38px]'>Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ name, percent, Icon }) => {
          const deg = (percent / 100) * 360;
          return (
            <div
              key={name}
              className="relative bg-white rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: `conic-gradient(#3b82f6 ${deg}deg, #e5e7eb ${deg}deg)`,
                }}
              >
                {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Icon size={32} />
                </div> */}
              </div>
              <div className="text-lg font-medium">{name}</div>
              <div className="text-sm text-gray-500">{percent}%</div>
            </div>
          );
        })}
      </div>
        </div>
    )
}

export default Skills;