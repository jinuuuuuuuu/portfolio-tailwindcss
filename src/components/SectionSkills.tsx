import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss, SiTypescript, SiGit, SiGithub } from 'react-icons/si';

const skills = [
  {
    name: 'HTML5',
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        className="text-orange-600 text-4xl mb-1"
      />
    ),
  },
  {
    name: 'CSS3',
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        className="text-blue-600 text-4xl mb-1"
      />
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <FontAwesomeIcon icon={faJs} className="text-yellow-400 text-4xl mb-1" />
    ),
  },
  {
    name: 'React',
    icon: (
      <FontAwesomeIcon icon={faReact} className="text-sky-400 text-4xl mb-1" />
    ),
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-600 text-4xl mb-1" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-sky-400 text-4xl mb-1" />,
  },
  {
    name: 'SCSS',
    icon: (
      <FontAwesomeIcon icon={faSass} className="text-pink-500 text-4xl mb-1" />
    ),
  },
  {
    name: 'Git',
    icon: <SiGit className="text-orange-500 text-4xl mb-1" />,
  },
  {
    name: 'GitHub',
    icon: (
      <SiGithub className="text-gray-800 dark:text-gray-100 text-4xl mb-1" />
    ),
  },
];

const SectionSkills = () => {
  return (
    <section id="skills" className="scroll-mt-18 mb-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
