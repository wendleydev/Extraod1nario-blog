// Importações necessárias
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

// Componente ScrollToTop - Botão para rolar ao topo da página
const ScrollToTop = () => {
  // Estado para controlar a visibilidade do botão
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Efeito para detectar quando mostrar o botão
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando o usuário rolar mais de 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", toggleVisibility);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-orange-200/50 transition-all duration-300 group"
          aria-label="Rolar ao topo"
        >
          <HiArrowUp className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
