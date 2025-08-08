// Importações necessárias
import { motion } from "framer-motion";
import { HiChevronDown, HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

// Componente HomePage - Página inicial do blog
const HomePage = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts Section */}
      <section className="py-16 lg:py-24 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-50/70 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-50/80 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <HiViewGrid className="w-4 h-4" />
              <span className="text-sm font-medium">Últimas Reflexões</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 title-poppins">
              Reflexões em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubra pensamentos profundos e reflexões que inspiram mudanças
              na forma de ver o mundo
            </p>
          </header>

          {/* Posts Grid - Apenas 3 posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/posts">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-lg hover:shadow-orange-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Ver Todas as Reflexões</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <HiChevronDown className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
