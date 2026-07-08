// Importações necessárias
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCalendar,
  HiTag,
} from "react-icons/hi";
import { Link } from "react-router-dom";

// Componente PostCard - Exibe um card de post individual
const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-orange-200/50 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-white/10 flex flex-col h-full"
    >
      {/* Imagem de Fundo que cobre a parte superior */}
      {post.featuredImage && (
        <div className="relative h-96 overflow-hidden">
          <motion.img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay Gradiente Mais Escuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

          {/* Badge da Categoria sobre a imagem */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/30">
              <HiTag className="w-3 h-3 mr-1.5" />
              {post.category}
            </span>
          </div>

          {/* Conteúdo sobreposto na imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            {/* Título do Post */}
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-orange-200 transition-colors duration-200 line-clamp-2 title-poppins leading-tight">
              <Link
                to={`/post/${post.slug}`}
                className="hover:underline decoration-2 underline-offset-4"
              >
                {post.title}
              </Link>
            </h3>

            {/* Resumo do Post */}
            <p className="text-white/90 mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags do Post */}
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white/90 text-xs rounded-lg border border-white/30 hover:bg-white/30 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
                {/* Indicador de tags adicionais */}
                {post.tags.length > 2 && (
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white/70 text-xs rounded-lg border border-white/30">
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>
            )}

            {/* Botão Ler Mais */}
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to={`/post/${post.slug}`}
                className="inline-flex items-center space-x-1.5 text-white hover:text-orange-200 font-medium text-sm transition-colors duration-200 group/btn bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg hover:bg-white/30"
              >
                <span>Ler mais</span>
                <HiArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      {/* Conteúdo inferior - informações do post */}
      <div className="p-6 flex flex-col flex-1">
        {/* Informações do Autor */}
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-3">
            {/* Avatar do Autor */}
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                loading="lazy"
              />
              {/* Indicador de status online */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>

            {/* Informações do Autor */}
            <div>
              <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {post.author.name}
              </div>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-gray-500 dark:text-gray-400 flex items-center"
              >
                <HiCalendar className="w-3 h-3 mr-1" />
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
};

export default PostCard;
