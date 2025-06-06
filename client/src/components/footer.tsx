import { FaGithub, FaLinkedin, FaYoutube, FaProductHunt, FaGlobe, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between py-6 max-w-6xl mx-auto">
      <div className="text-sm text-gray-500  mb-2 sm:mb-0 text-center sm:text-left">
        <a href="https://bento.me/ysskrishna" target="_blank" rel="noopener noreferrer" aria-label="Website">
          Made with <FaHeart className="inline h-4 w-4 text-black mx-1" /> by ysskrishna
        </a>
      </div>
      <div className="flex space-x-6 justify-center sm:justify-end">
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