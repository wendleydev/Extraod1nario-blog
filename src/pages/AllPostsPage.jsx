// Importações necessárias
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { banner } from "../assets/staticImages";
import PostCard from "../components/PostCard";

// Componente AllPostsPage - Página com todos os posts
const AllPostsPage = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section com Banner */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
        {/* Banner de Fundo */}
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Banner Extraord1nário"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Overlay Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Elementos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            {/* Título da página */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold title-poppins mb-6 text-white"
            >
              Todas as Reflexões
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Explore todas as reflexões, pensamentos e experiências
              compartilhadas
            </motion.p>

            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-8 max-w-sm mx-auto"
            >
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {posts.length}
                  </div>
                  <div className="text-orange-100 text-sm font-medium">
                    Reflexões
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-sm font-medium">Explorar</span>
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lista de posts */}
      <main className="py-20 relative">
        {/* Background de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-50/30 dark:bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-50/40 dark:bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-50/20 dark:bg-orange-500/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            {/* Header da seção */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 dark:from-orange-900/30 dark:to-orange-800/20 dark:text-orange-200 px-6 py-3 rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Biblioteca de Reflexões
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 title-poppins mb-4">
                Explore Nossa Coleção Completa
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubra pensamentos profundos, reflexões sinceras e
                experiências que inspiram mudanças na forma de ver o mundo
              </p>
            </motion.div>

            {/* Grid de posts com layout dinâmico responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
              {/* Elementos de fundo */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-orange-200/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-50/10 rounded-full blur-3xl" />
              {posts.map((post, index) => {
                // Determinar o tamanho do card baseado no índice para criar um layout dinâmico
                const isLargeCard = index % 6 === 0; // A cada 6 posts, um card grande
                const isMediumCard = index % 4 === 1; // A cada 4 posts, um card médio

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`${
                      isLargeCard
                        ? "md:col-span-2 lg:col-span-2 xl:col-span-2" // Card grande ocupa 2 colunas
                        : isMediumCard
                        ? "md:col-span-2 lg:col-span-1 xl:col-span-1" // Card médio ocupa 1-2 colunas
                        : "md:col-span-1 lg:col-span-1 xl:col-span-1" // Card pequeno ocupa 1 coluna
                    }`}
                  >
                    <PostCard post={post} />
                  </motion.div>
                );
              })}
            </div>

            {/* Footer da seção */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/10 rounded-3xl p-8 border border-orange-200 dark:border-white/10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 title-poppins mb-4">
                  Continue Explorando
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Cada reflexão é uma oportunidade de crescimento e
                  autoconhecimento. Continue explorando e descubra novas
                  perspectivas sobre a vida.
                </p>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg hover:shadow-orange-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Voltar ao Início</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <HiChevronDown className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllPostsPage;
