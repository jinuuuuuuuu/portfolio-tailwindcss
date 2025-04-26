// About Section
const SectionAbout = () => {
  return (
    <section id="about" className="scroll-mt-18 mb-16">
      <h2 className="text-3xl font-bold mb-6">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4">🎓Education</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
            <li>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2016 - 2023
              </p>
              <p className="font-semibold">
                Incheon National University, Korea
              </p>
              <p>Bachelor of International Commerce</p>
            </li>

            <li>
              <p className="text-xs text-gray-500 dark:text-gray-400">2022</p>
              <p className="font-semibold">Yokohama City University, Japan</p>
              <p>International Exchange Program</p>
            </li>
          </ul>
        </article>
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4">💻Experience</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
            <li>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2017 - 2019
              </p>
              <p className="font-semibold">
                Public Service Worker (Social Service)
              </p>
              <p>Completed alternative military service in Korea</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SectionAbout;
