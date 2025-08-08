// Importações necessárias
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  HiHome,
  HiLink,
  HiMail,
  HiTag,
  HiUser,
  HiViewList,
} from "react-icons/hi";

// Componente Footer - Rodapé do site
const Footer = () => {
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
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-orange-200/50 transition-all duration-300">
                  <span className="text-white font-bold text-lg">E</span>
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
                  href="https://facebook.com/Wendlley007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://instagram.com/wendlley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:border-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
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
                  <a
                    href="/"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiHome className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Início</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiUser className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Sobre</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/categorias"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiViewList className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Categorias</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contato"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <HiMail className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                    <span>Contato</span>
                  </a>
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
                <li>
                  <a
                    href="/categoria/reflexoes-pessoais"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      💭
                    </span>
                    <span>Reflexões Pessoais</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/categoria/desenvolvimento-pessoal"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      🌱
                    </span>
                    <span>Desenvolvimento Pessoal</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/categoria/experiencias-de-vida"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      📖
                    </span>
                    <span>Experiências de Vida</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/categoria/pensamentos-filosoficos"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      🤔
                    </span>
                    <span>Pensamentos Filosóficos</span>
                  </a>
                </li>
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
