// 로고 + 네비게이션 바
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    // 초기값: localStorage에 저장된 값 있으면 그걸로
    return localStorage.getItem('theme') === 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (isDark) {
      // document.documentElement는 <html> 태그를 의미
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]); //isDark 값이 바뀔 때마다 동작

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm z-50">
      <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <h1 className="text-2xl font-bold">Jinu.dev</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300 px-2">
            Frontend Developer
          </p>
        </div>
        <div className="hidden md:flex items-center gap-x-6 text-gray-800 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-500"
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className="text-gray-700 dark:text-yellow-400"
            />
          </button>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 dark:text-white"
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </nav>
      {/* 모바일 사이드 메뉴 top-0 bottom-0 대신 inset-y-0 */}
      {/* 사이드 메뉴 외부 클릭 시 닫기 기능 */}
      {menuOpen && (
        <div
          className="fixed inset-0 h-screen bg-black/30 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
      <aside
        className={`md:hidden fixed right-0 inset-y-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="p-2 m-4 text-gray-700 dark:text-white"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>
        <nav className="flex flex-col gap-y-4 mt-10 px-6">
          <a
            href="#home"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => {
              toggleDarkMode();
              toggleMenu();
            }}
            className="p-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-500"
          >
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              className="text-gray-700 dark:text-yellow-400"
            />
          </button>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
