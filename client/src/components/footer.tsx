import { FaGithub, FaLinkedin, FaYoutube, FaProductHunt, FaGlobe, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between py-6 mt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0 sm:ml-2 w-full sm:w-auto text-center sm:text-left">
        Made with <FaHeart className="inline h-4 w-4 text-black dark:text-white mx-1" /> by ysskrishna
        </div>
        <div className="flex space-x-6 w-full sm:w-auto justify-center sm:justify-end">
        <a href="https://bento.me/ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <FaGlobe className="w-6 h-6" />
        </a>
        <a href="https://github.com/ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://www.producthunt.com/@ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="Product Hunt">
            <FaProductHunt className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="w-6 h-6" />
        </a>
        </div>
    </footer>
  );
}