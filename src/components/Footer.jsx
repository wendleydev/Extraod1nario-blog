// Importações necessárias
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  HiHome,
  HiLink,
  HiTag,
  HiUser,
  HiViewList,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// Componente Footer - Rodapé do site
const Footer = ({ categories = [] }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Padrão de Fundo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marca */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-gray-400/40 transition-all duration-300">
                  <img
                    src={logo}
                    alt="Logo Extraord1nário"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="text-xl font-medium title-poppins">
                  Extraord1nário
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Um espaço para reflexões profundas e pensamentos únicos que
                inspiram mudanças na forma de ver o mundo.
              </p>

              {/* Links de Redes Sociais */}
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
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-medium mb-6 title-poppins flex items-center space-x-2 text-white">
                <HiLink className="w-5 h-5 text-primary-400" />
                <span>Links Rápidos</span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiHome className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Início</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiUser className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Sobre</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiViewList className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Todas as Reflexões</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categorias */}
            <div>
              <h3 className="text-lg font-medium mb-6 title-poppins flex items-center space-x-2 text-white">
                <HiTag className="w-5 h-5 text-primary-400" />
                <span>Temas</span>
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      to={`/categoria/${category.slug}`}
                      className="group flex items-center justify-between text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-primary-400">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Extraord1nário. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacidade"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              Desenvolvido por{" "}
              <a
                href="https://wendley.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
              >
                wendley.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
