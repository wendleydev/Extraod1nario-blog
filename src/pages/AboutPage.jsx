import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 dark:bg-gray-900/60 dark:border-white/10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 title-poppins mb-6">
            Sobre o Extraord1nário
          </h1>

          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            O Extraord1nário nasceu como um espaço para transformar vivências em
            palavras. Aqui, cada texto busca provocar reflexão, acolher
            sentimentos e abrir novos caminhos para enxergar a vida.
          </p>

          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
            Entre temas pessoais e sociais, a proposta do blog é simples:
            compartilhar pensamentos honestos, com sensibilidade e verdade.
          </p>

          <div className="border-t border-gray-100 dark:border-white/10 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Autor</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              <strong>Wendley Santos</strong> - escritor e pensador apaixonado
              por reflexões profundas sobre a vida.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1aHBSGkHmn"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-[#1877F2] border border-[#1877F2] rounded-xl flex items-center justify-center hover:bg-[#166FE5] hover:border-[#166FE5] transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="w-5 h-5 text-white transition-colors duration-300" />
              </a>
              <a
                href="https://instagram.com/wendlley"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] border border-transparent rounded-xl flex items-center justify-center hover:brightness-110 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="w-5 h-5 text-white transition-colors duration-300" />
              </a>
            </div>
            <a
              href="https://www.facebook.com/share/1aHBSGkHmn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 rounded-xl bg-primary-500 text-white hover:bg-primary-200 transition-colors duration-200"
            >
              Acompanhar no Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
