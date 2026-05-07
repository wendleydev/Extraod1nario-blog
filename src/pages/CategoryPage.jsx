import { motion } from "framer-motion";
import { HiArrowLeft, HiTag } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

const CategoryPage = ({ posts, categories }) => {
  const { slug } = useParams();
  const currentCategory = categories.find((category) => category.slug === slug);

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 title-poppins mb-4">
            Categoria não encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            Essa categoria não existe ou ainda não possui publicações.
          </p>
          <Link
            to="/posts"
            className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors duration-200"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Ver todas as reflexões</span>
          </Link>
        </div>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) => post.category === currentCategory.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/posts"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Voltar para todos os posts</span>
          </Link>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-4">
              <HiTag className="w-4 h-4" />
              <span className="text-sm font-medium">Categoria</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-2">
              {currentCategory.icon} {currentCategory.name}
            </h1>
            <p className="text-gray-600">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "publicação" : "publicações"}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

