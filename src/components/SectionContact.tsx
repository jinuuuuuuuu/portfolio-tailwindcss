import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SiGmail } from 'react-icons/si';

const SectionContact = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form id="contactForm" className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500
            "
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-1 font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500
            "
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500
            "
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-300 flex items-center gap-x-2 hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-300 flex items-center gap-x-2 hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:jinu6287@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-300 flex items-center gap-x-2 hover:text-blue-500 transition-colors"
          >
            <SiGmail className="text-lg" />
            <span>jinu6287@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
