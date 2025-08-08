// Importações necessárias
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Componente PageTransition - Adiciona animações de transição entre páginas
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll automático para o topo quando a rota muda
  useEffect(() => {
    setIsTransitioning(true);

    // Scroll automático para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Simular um pequeno delay para a transição
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Barra de progresso durante transição */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 z-50"
        >
          <motion.div
            className="h-full bg-white/30"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
