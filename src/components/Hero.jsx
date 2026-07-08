// Importações necessárias
import { motion } from "framer-motion";
import { HiArrowDown, HiPlay } from "react-icons/hi";
import { Link } from "react-router-dom";
import { banner } from "../assets/staticImages";

// Componente Hero - Seção principal da página inicial
const Hero = ({ totalReflexoes = 0 }) => {
  // Função para rolar para a seção de posts
  const scrollToPosts = () => {
    const postsSection = document.querySelector("section");
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={banner}
          alt="Banner Extraord1nário"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Elementos Animados de Fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-primary-500/10 backdrop-blur-sm mt-12 border border-primary-400/20 text-white px-4 py-2 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Reflexões</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-7xl text-white mb-6 title-poppins leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
            Extraord1nário
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Reflexões honestas sobre vida, amor e tudo o que nos torna humanos
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center mb-10"
        >
          {/* Botão Primário */}
          <Link to="/posts">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg hover:shadow-orange-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <HiPlay className="w-5 h-5" />
                <span>Explorar Todas as Reflexões</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Total de reflexões disponíveis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 gap-8 mb-24 max-w-md mx-auto"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {totalReflexoes}
            </div>
            <div className="text-white/80">Reflexões Disponíveis</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToPosts}
          className="group flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Rolar para baixo"
        >
          <span className="text-sm font-medium">Descobrir</span>
          <HiArrowDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
