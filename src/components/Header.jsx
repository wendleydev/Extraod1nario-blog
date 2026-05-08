// Importações necessárias
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiArrowRight,
  HiChevronDown,
  HiHome,
  HiMenu,
  HiUser,
  HiViewGrid,
  HiViewList,
  HiX,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// Componente Header - Navegação principal do site
const Header = ({ categories = [] }) => {
  // Estados para controlar menu mobile e dropdown de categorias
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);
  /** Inclui o acordeão de categorias no menu mobile (fora de categoriesRef do desktop). */
  const mobileCategoriesRef = useRef(null);

  // Função para alternar menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para alternar dropdown de categorias
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Fechar dropdown quando clicar fora (desktop + mobile precisam estar no “inside”)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const insideDesktop =
        categoriesRef.current?.contains(target) ?? false;
      const insideMobileCategories =
        mobileCategoriesRef.current?.contains(target) ?? false;
      if (!insideDesktop && !insideMobileCategories) {
        setIsCategoriesOpen(false);
      }
    };

    if (isCategoriesOpen) {
      // `click` evita fechar no mousedown antes do toque completar a navegação no mobile
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isCategoriesOpen]);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-200/50 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div
                className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-gray-400/40 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
              >
                <img
                  src={logo}
                  alt="Logo Extraord1nário"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-xl font-medium text-gray-900 title-poppins group-hover:text-primary-600 transition-colors duration-300">
                Extraord1nário
              </span>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="group relative text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal flex items-center space-x-2"
            >
              <HiHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Início</span>
            </Link>

            {/* Dropdown de Categorias */}
            <div className="relative" ref={categoriesRef}>
              <button
                type="button"
                onClick={toggleCategories}
                className="group relative text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal flex items-center space-x-2"
              >
                <HiViewList className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Categorias</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Menu Dropdown */}
              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-88 max-w-[92vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-orange-100 overflow-hidden z-50"
                  >
                    <div className="px-4 py-3 border-b border-orange-100/70 bg-gradient-to-r from-orange-50/70 to-white">
                      <h3 className="text-sm font-medium text-gray-900 title-poppins flex items-center space-x-2">
                        <HiViewGrid className="w-4 h-4 text-primary-500" />
                        <span className="text-gray-900">Explore por Tema</span>
                      </h3>
                    </div>
                    <div className="py-2 max-h-80 overflow-y-auto">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/categoria/${category.slug}`}
                          className="group flex items-center space-x-3 mx-2 px-3 py-3 text-gray-700 rounded-xl hover:bg-orange-50/70 hover:text-primary-600 transition-all duration-200"
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                            {category.icon}
                          </span>
                          <div className="flex-1">
                            <div className="font-normal title-poppins group-hover:font-medium transition-all duration-200">
                              {category.name}
                            </div>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-700 group-hover:bg-orange-200 transition-colors duration-200">
                            {category.count}
                          </span>
                          <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/sobre"
              className="group relative text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal flex items-center space-x-2"
            >
              <HiUser className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Sobre</span>
            </Link>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-200/50 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="group flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Início</span>
              </Link>

              {/* Categorias Mobile */}
              <div ref={mobileCategoriesRef}>
                <button
                  type="button"
                  onClick={toggleCategories}
                  className="group flex items-center justify-between w-full text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal"
                >
                  <div className="flex items-center space-x-3">
                    <HiViewList className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>Categorias</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCategoriesOpen && (
                  <div className="mt-3 ml-7 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/categoria/${category.slug}`}
                        className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsCategoriesOpen(false);
                        }}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {category.icon}
                        </span>
                        <span className="text-sm group-hover:font-medium transition-all duration-200">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/sobre"
                className="group flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiUser className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Sobre</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
