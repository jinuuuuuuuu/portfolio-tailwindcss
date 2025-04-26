import Header from './components/Header';
import SectionIntro from './components/SectionIntro';
import SectionAbout from './components/SectionAbout';
import SectionSkills from './components/SectionSkills';
import SectionProject from './components/SectionProject';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300 ">
      <Header />

      <main className=" container max-w-4xl mx-auto px-6 py-12">
        <SectionIntro />
        <SectionAbout />
        <SectionSkills />
        <SectionProject />
        <SectionContact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
