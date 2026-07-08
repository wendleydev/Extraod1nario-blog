// Importações necessárias
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiCalendar,
  HiChevronDown,
  HiLightBulb,
  HiTag,
} from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import CharacteristicList from "../components/CharacteristicList";
import { postCharacteristics } from "../data/postCharacteristics";

// Componente PostPage - Página individual de post
const PostPage = ({ posts }) => {
  const { slug } = useParams();

  // Encontrar o post pelo slug
  const post = posts.find((p) => p.slug === slug);

  // Se não encontrar o post, mostrar página 404
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            Post não encontrado
          </h2>
          <p className="text-gray-600 mb-8">
            O post que você está procurando não existe.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors duration-200"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header do Post */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] py-4 flex items-center justify-center overflow-hidden"
      >
        {/* Imagem de Fundo */}
        {post.featuredImage && (
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Overlay Gradiente Sofisticado */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          </div>
        )}

        {/* Elementos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge da Categoria */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-400/30 text-orange-200 text-sm font-semibold rounded-full shadow-xl">
                <HiTag className="w-4 h-4 mr-2" />
                {post.category}
              </span>
            </div>

            {/* Título do Post com Efeito */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 title-poppins leading-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Resumo do Post */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed font-light">
              {post.excerpt}
            </p>

            {/* Meta Informações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              {/* Autor */}
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full ring-2 ring-orange-400/50 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                </div>
                <div>
                  <div className="font-semibold text-white text-base">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-white/80">{post.author.bio}</div>
                </div>
              </div>

              {/* Informações complementares */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <HiCalendar className="w-4 h-4 text-orange-300" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Publicado</div>
                    <div className="font-semibold text-white text-sm">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-2 text-white/70">
                <span className="text-sm font-medium">Ler reflexão</span>
                <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Conteúdo do Post */}
      <main className="py-20 relative">
        {/* Background de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-50/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-50/20 rounded-full blur-2xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Conteúdo Principal */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-primary max-w-none"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-12">
                {/* Conteúdo do post */}
                <div className="space-y-8 text-gray-700 leading-relaxed">
                  {post.slug === "ser-mulher-dia-internacional" ? (
                    // Conteúdo específico para o post sobre mulheres
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Escrevo sobre a mulher com admiração: ela caminha na
                          dúvida cheia de certezas, corre atrás das nuvens num
                          dia de sol e alcança o sol num dia de chuva. Chora de
                          alegria e, muitas vezes, sorri com tristeza; adia
                          sonhos em prol de terceiros, acredita quando ninguém
                          mais acredita e espera quando ninguém mais espera.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                          A Essência da Mulher
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              A mulher é um ser de contrastes harmoniosos. Ela
                              consegue ser forte e delicada ao mesmo tempo,
                              guerreira e romântica, independente e acolhedora.
                              Sua capacidade de adaptação e resiliência é algo
                              que merece ser celebrado todos os dias, não apenas
                              no 8 de março.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 border border-pink-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-pink-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "A verdadeira força da mulher não está na
                                ausência de medo, mas na coragem de enfrentá-lo
                                com graça e determinação."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-2xl p-8 border border-pink-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Quem observa de perto percebe: a força dela não
                            está na ausência de medo, mas na coragem de
                            enfrentá-lo com graça e determinação.
                          </p>
                          <div className="mt-4 pt-4 border-t border-pink-200/50">
                            <p className="text-sm text-pink-600 font-medium">
                              — Wendley Santos
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Cada mulher carrega consigo uma história única de
                        superação, de sonhos realizados e outros adiados, de
                        momentos de alegria e de tristeza. Mas o que mais
                        impressiona é sua capacidade de continuar acreditando,
                        esperando e lutando, mesmo quando tudo parece perdido.
                      </p>

                      {/* Seção O Poder da Mulher */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                          O Poder da Mulher
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              A força da mulher não está apenas na sua
                              capacidade física ou intelectual, mas
                              principalmente na sua sensibilidade e intuição.
                              Ela consegue perceber nuances que passam
                              despercebidas, sentir emoções que não são
                              expressas e criar conexões profundas com as
                              pessoas ao seu redor.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-pink-50 to-pink-100/30 rounded-2xl p-6 border border-pink-200/50"
                          >
                            <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                              {postCharacteristics["ser-mulher-dia-internacional"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["ser-mulher-dia-internacional"].items}
                              dotColor={postCharacteristics["ser-mulher-dia-internacional"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            Parabéns a todas as mulheres delicadas, fortes e
                            guerreiras. Que continuem inspirando, transformando
                            e iluminando o mundo com sua presença única.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Ser Mulher - Força da Delicadeza"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-pink-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Feliz Dia Internacional da Mulher!
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Que cada mulher seja celebrada, respeitada e amada
                              todos os dias
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🌸
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                💖
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                ✨
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "solidao-essencial" ? (
                    // Conteúdo específico para o post sobre solidão
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Creio que no fundo somos sempre sós. Pode ser que você
                          encontre um amor, um punhado de amigos, o conforto
                          familiar. Mas ninguém nos livra dos pesos da vida. A
                          gente nasce e morre sozinho. E está tudo bem — não há
                          drama nisso.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          A Verdade da Solidão
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              É claro que é bom ter gente para rir e chorar, mas
                              entenda: no fundo é sempre você. E você. Essa é
                              uma das verdades mais profundas da existência
                              humana - a solidão essencial que nos acompanha
                              desde o nascimento até o último suspiro.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "A solidão não é uma punição, mas uma condição
                                natural da alma. É no silêncio que encontramos
                                nossa verdadeira essência."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            No fundo, somos sempre sós — e aceitar isso não é
                            derrota. É o começo de uma paz que nenhuma
                            companhia emprestada consegue dar.
                          </p>
                          <div className="mt-4 pt-4 border-t border-blue-200/50">
                            <p className="text-sm text-blue-600 font-medium">
                              — Wendley Santos
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Muitas pessoas temem a solidão, fogem dela, tentam
                        preenchê-la com relacionamentos, trabalho, distrações.
                        Mas a solidão não é algo a ser evitado - ela é parte
                        fundamental de quem somos. É na solidão que nos
                        conhecemos verdadeiramente.
                      </p>

                      {/* Seção Aceitando a Solidão */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          Aceitando a Solidão
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              Quando aceitamos que somos essencialmente sós,
                              algo mágico acontece: nos libertamos da
                              dependência emocional, da necessidade constante de
                              aprovação externa, da busca desesperada por
                              companhia. A solidão se torna nossa aliada, não
                              nossa inimiga.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-2xl p-6 border border-blue-200/50"
                          >
                            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                              {postCharacteristics["solidao-essencial"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["solidao-essencial"].items}
                              dotColor={postCharacteristics["solidao-essencial"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            A solidão não é tristeza, abandono ou fracasso. É
                            simplesmente a condição natural de ser humano. E,
                            quando aceitamos isso, descobrimos uma paz interior
                            que nenhum relacionamento pode nos dar.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="A Solidão Essencial"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-blue-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                É você e você.
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Encontrando paz na solidão essencial
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🌙
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🌙
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🌙
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "talvez-amanha" ? (
                    // Conteúdo específico para o post sobre talvez
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Quem sabe amanhã faça sol, mas talvez até chova um
                          pouco. Talvez o vento sopre forte, talvez eu ainda
                          sinta teu gosto. Talvez eu tome um pouco de café e
                          talvez eu nem lave o rosto.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                          Os Talvez da Vida
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                          <p className="text-lg leading-relaxed">
                              Talvez eu esqueça seu nome ou talvez queira seu
                              sobrenome, amanhã ou quem sabe em agosto. Talvez
                              eu te mande um áudio, com a voz trêmula, estando
                              nervoso. Talvez eu te mande mensagem e sorria até
                              tarde ou, quem sabe, até a hora do almoço.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "A beleza da vida está na incerteza dos talvez,
                                que nos mantêm esperançosos e sonhadores."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Talvez o amor seja isso, talvez seja essa coisa de
                            louco. Uma dança entre certezas e incertezas, entre
                            hoje e amanhã.
                          </p>
                          <div className="mt-4 pt-4 border-t border-purple-200/50">
                            <p className="text-sm text-purple-600 font-medium">
                              — Reflexão sobre o Amor
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Talvez eu reveja suas fotos. Talvez eu durma um pouco
                        mais tarde, desligue o alarme e te queira cada vez
                        mais. O amor, para mim, mora nesses pequenos talvez do
                        cotidiano.
                      </p>

                      {/* Seção A Beleza dos Talvez */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          A Beleza dos Talvez
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              Talvez eu queira muito estar ao seu lado, com a
                              certeza de que ainda é pouco. Talvez eu queira seu
                              sobrenome, talvez o número do seu telefone. Talvez
                              o amor seja isso mesmo — uma sucessão de talvez
                              que nos mantém vivos, esperançosos e sonhadores.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-6 border border-orange-200/50"
                          >
                            <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                              {postCharacteristics["talvez-amanha"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["talvez-amanha"].items}
                              dotColor={postCharacteristics["talvez-amanha"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            E talvez seja exatamente isso que torna a vida tão
                            bonita - não saber ao certo o que vai acontecer
                            amanhã, mas ter a coragem de continuar, de esperar,
                            de acreditar que talvez, só talvez, tudo dê certo.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Talvez Amanhã"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-orange-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Talvez seja essa coisa de louco
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Viver sem saber tudo — e mesmo assim seguir em
                              frente
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "deixar-partir" ? (
                    // Conteúdo específico para o post sobre deixar partir
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Não me escondi e jamais desisti, mas se me afastei de
                          você num instante, foi só para que pudesse ser feliz.
                          Amar você foi a coisa mais gratificante — e também a
                          mais dolorosa — que já fiz.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          O Amor e a Dificuldade de Deixar
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              E porque nos fazíamos sorrir, e porque nos
                              adorávamos beijar, não foi fácil deixar você
                              partir — muito menos será deixar de amar.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "O verdadeiro amor às vezes exige que façamos
                                escolhas difíceis, colocando a felicidade do
                                outro acima da nossa própria."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Infelizmente, amar é também, às vezes, ter que
                            deixar partir.
                          </p>
                          <div className="mt-4 pt-4 border-t border-orange-200/50">
                            <p className="text-sm text-orange-600 font-medium">
                              — Reflexão sobre o Amor
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Deixar partir alguém que amamos pode ser a demonstração
                        mais pura de amor — quando colocamos a felicidade do
                        outro acima da nossa própria, mesmo sabendo o preço que
                        isso cobra.
                      </p>

                      {/* Seção A Dificuldade do Desapego */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          A Dificuldade do Desapego
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              Não é fácil aceitar que o amor às vezes precisa
                              ser deixado ir. Mas quando amamos verdadeiramente,
                              queremos o melhor para quem amamos, mesmo que isso
                              signifique não estar mais ao seu lado.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-6 border border-orange-200/50"
                          >
                            <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                              {postCharacteristics["deixar-partir"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["deixar-partir"].items}
                              dotColor={postCharacteristics["deixar-partir"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            E assim aprendemos que amar também é saber quando
                            deixar partir, quando dar espaço, quando permitir
                            que o outro encontre sua própria felicidade, mesmo
                            que isso nos machuque.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Deixar Partir"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-orange-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Amar é também deixar partir
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Às vezes, soltar é a forma mais honesta de amar
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "mulheres-chatas" ? (
                    // Conteúdo específico para o post sobre mulheres chatas
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          As mulheres que mais poderão marcar a sua vida são as
                          CHATAS. Também chamadas de loucas, ciumentas,
                          bipolares, confusas, esquisitas.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          O Que Faz uma Mulher "Chata"
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              As chamadas de "chatas" ligam de madrugada
                              cobrando algo que você fez na semana passada;
                              brigam com você, olham feio para as mulheres que
                              estão em volta de você, fazem cara feia, batem o
                              pé, fazem bico, discutem sem pensar nas
                              consequências — e, principalmente, são ciumentas.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "Quem não gosta de se sentir desejado? As
                                'chatas' demonstram interesse real e proteção."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Porém vou te perguntar uma coisa: quem não gosta de
                            se sentir desejado?!
                          </p>
                          <div className="mt-4 pt-4 border-t border-orange-200/50">
                            <p className="text-sm text-orange-600 font-medium">
                              — Reflexão sobre o Desejo
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Uma mulher que não te procura ou não está nem aí para
                        você, que tem medo de te perder e prefere fingir que não
                        viu ou ouviu nada, perdeu a própria identidade no
                        silêncio.
                      </p>

                      {/* Seção A Verdade Sobre as Chatas */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                          A Verdade Sobre as "Chatas"
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              As chatas podem incomodar, mas estão ali do seu
                              lado em qualquer situação, não ligam para sua
                              conta bancária ou quantos carros tem na garagem,
                              elas te cercam tanto que não deixam que nada de
                              ruim se aproxime de você.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl p-6 border border-orange-200/50"
                          >
                            <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                              {postCharacteristics["mulheres-chatas"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["mulheres-chatas"].items}
                              dotColor={postCharacteristics["mulheres-chatas"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            Então, antes de reclamar de uma mulher "chata",
                            pense: ela está ali, demonstrando que se importa,
                            que te quer, que te protege. Isso é muito mais
                            valioso do que uma mulher que finge não se importar.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Mulheres Chatas - Proteção e Amor"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-orange-900/40 to-gray-400/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Valorize quem te protege
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Quem cuida de verdade merece ser reconhecido
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "cuida-bem-dela" ? (
                    // Conteúdo específico para o post sobre cuidar bem dela
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Sabe, você pode andar por aí, e dar de cara com
                          muitas, pode abraçar muitas, mas nenhuma delas vai ser
                          como ela.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                          A Unicidade do Amor
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              Cuide até cansar, até desanimar, até enjoar — mas
                              cuide. Diga que ela fica ainda mais linda quando
                              fica brava; diga isso a ela. Valorize enquanto
                              você a tem nas mãos.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "Valorize enquanto tem a chance. Pessoas
                                especiais são raras e preciosas."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            E ela foi a única que permaneceu, que te confortou.
                          </p>
                          <div className="mt-4 pt-4 border-t border-green-200/50">
                            <p className="text-sm text-green-600 font-medium">
                              — Reflexão sobre a Fidelidade
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Quantas pessoas passam pela nossa vida, mas quantas
                        realmente ficam? Quantas nos apoiam nos momentos
                        difíceis? Quantas nos confortam quando precisamos?
                      </p>

                      <h2 className="text-2xl font-semibold text-gray-900 title-poppins">
                        O Valor de Quem Permanece
                      </h2>

                      <p>
                        Cuide bem do que te faz bem. Cuide bem dela, até o
                        final. Porque quando você encontra alguém que permanece,
                        que te conforta e que te apoia, precisa valorizar e
                        cuidar.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-gradient-to-br from-green-50 to-green-100/30 rounded-2xl p-6 border border-green-200/50 my-8"
                      >
                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          {postCharacteristics["cuida-bem-dela"].title}
                        </h3>
                        <CharacteristicList
                          items={postCharacteristics["cuida-bem-dela"].items}
                          dotColor={postCharacteristics["cuida-bem-dela"].dotColor}
                        />
                      </motion.div>

                      <p>
                        Então, se você tem alguém especial que permaneceu ao seu
                        lado, que te confortou, que te apoiou, cuide bem dela.
                        Porque pessoas assim são raras e preciosas.
                      </p>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Cuida Bem Dela"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-green-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Cuida bem dela
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Valorize quem permanece ao seu lado
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "eu-quero-casar-com-voce" ? (
                    // Conteúdo específico para o post sobre casamento
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Eu quero sim casar com você, morar com você, acordar
                          ao seu lado, ouvir você contar sobre o seu dia, sair
                          à noite de mãos dadas.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                          Sonhos de Uma Vida Juntos
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              Correr em direção ao mar só para vê-la brilhar sob
                              a luz da lua, ouvir você suspirar que me ama, que
                              me quer — sim, eu quero ficar sem palavras quando
                              você disser certas coisas.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 border border-pink-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-pink-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "O casamento é a escolha de construir uma vida
                                juntos, de compartilhar momentos simples e
                                especiais."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-2xl p-8 border border-pink-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Quero que você me cale com um beijo quando eu falar
                            demais. Quero te amar pelo resto da minha vida e
                            viver feliz ao seu lado.
                          </p>
                          <div className="mt-4 pt-4 border-t border-pink-200/50">
                            <p className="text-sm text-pink-600 font-medium">
                              — Reflexão sobre o Amor Eterno
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        O casamento não é apenas uma cerimônia: é a escolha de
                        construir uma vida a dois, de compartilhar momentos
                        simples e especiais, de crescer lado a lado.
                      </p>

                      {/* Seção A Beleza do Compartilhar */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-8 bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                          A Beleza do Compartilhar
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-6">
                              Quando amamos verdadeiramente, queremos
                              compartilhar tudo: as manhãs, as noites, os
                              momentos de alegria e tristeza, os sonhos e as
                              realizações.
                            </p>
                          </div>

                          {/* Lista Destacada */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="bg-gradient-to-br from-pink-50 to-pink-100/30 rounded-2xl p-6 border border-pink-200/50"
                          >
                            <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                              {postCharacteristics["eu-quero-casar-com-voce"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["eu-quero-casar-com-voce"].items}
                              dotColor={postCharacteristics["eu-quero-casar-com-voce"].dotColor}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Parágrafo Final */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="my-12"
                      >
                        <div className="relative">
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 rounded-full" />
                          <p className="text-lg leading-relaxed text-gray-700 pl-8">
                            E é isso que torna o amor tão especial - a vontade
                            de construir uma vida juntos, de enfrentar os
                            desafios como uma equipe, de celebrar as conquistas
                            como parceiros.
                          </p>
                        </div>
                      </motion.div>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Eu Quero Casar com Você"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-pink-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Quero viver feliz ao seu lado
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Construindo uma vida de amor e sonhos juntos
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                💕
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                💕
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                💕
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "habitos-destruidores" ? (
                    // Conteúdo específico para o post sobre hábitos destruidores
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-300 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Preciso parar com os velhos hábitos, mas não me refiro
                          a hábitos como morder a boca quando fico nervoso ou
                          roer a unha quando fico com tédio.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                          Os Hábitos que Nos Machucam
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              Me refiro aos hábitos destruidores, como o hábito
                              de machucar minha alma para não 'ferir' outra
                              pessoa, ou o hábito de cuidar tanto de outras
                              pessoas que acabo esquecendo de cuidar de mim.
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "Os hábitos que destroem são os que nos impedem
                                de viver, de amar, de ser feliz."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-8 border border-red-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Ou o simples hábito de mentir para pensarem que
                            'está tudo bem' apenas porque não quero que ninguém
                            se preocupe ou finja preocupação.
                          </p>
                          <div className="mt-4 pt-4 border-t border-red-200/50">
                            <p className="text-sm text-red-600 font-medium">
                              — Reflexão sobre os Hábitos
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        Mas o que acontece quando os hábitos estão cravados
                        dentro da alma? Às vezes, me sinto melhor sozinho...
                      </p>

                      <h2 className="text-2xl font-semibold text-gray-900 title-poppins">
                        A Importância do Autocuidado
                      </h2>

                      <p>
                        Cuidar dos outros é importante, mas não podemos esquecer
                        de cuidar de nós mesmos. Quando nos sacrificamos
                        constantemente pelos outros, acabamos perdendo nossa
                        própria identidade e bem-estar.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-gradient-to-br from-red-50 to-red-100/30 rounded-2xl p-6 border border-red-200/50 my-8"
                      >
                        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                          {postCharacteristics["habitos-destruidores"].title}
                        </h3>
                        <CharacteristicList
                          items={postCharacteristics["habitos-destruidores"].items}
                          dotColor={postCharacteristics["habitos-destruidores"].dotColor}
                        />
                      </motion.div>

                      <p>
                        E talvez seja necessário parar, refletir e mudar esses
                        hábitos que nos machucam por dentro. Porque no final, só
                        podemos cuidar dos outros se estivermos bem conosco
                        mesmos.
                      </p>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Hábitos Destruidores"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-red-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Às vezes me sinto melhor sozinho
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Mudando hábitos que nos machucam por dentro
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "adeus-a-inocencia" ? (
                    // Conteúdo específico para o post sobre adeus à inocência
                    <>
                      {/* Destaque de Abertura */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Adeus à inocência... Uma menina de dez anos, violentada
                          pelo tio por quatro anos, sofrendo calada todos os
                          tipos de abusos possíveis.
                        </p>
                      </motion.div>

                      {/* Título com Destaque */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                          A Tragédia do Silêncio
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Conteúdo Principal */}
                          <div className="lg:col-span-2">
                            <p className="text-lg leading-relaxed">
                              Não tendo ninguém — absolutamente ninguém — que a
                              protegesse, que percebesse o que vinha ocorrendo
                              com ela (ou até se tinha, mas é mais fácil fingir
                              que nada aconteça e proteger o abusador).
                            </p>
                          </div>

                          {/* Aside */}
                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
                              <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                "O silêncio diante da violência é cúmplice.
                                Precisamos proteger os vulneráveis."
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      {/* Blockquote Melhorado */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              "
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Após esse sofrimento dentro de casa, ficou a mercê
                            da justiça para autorizar um aborto, está sofrendo
                            com os traumas e agora com essa exposição toda.
                          </p>
                          <div className="mt-4 pt-4 border-t border-purple-200/50">
                            <p className="text-sm text-purple-700 font-medium">
                              — Reflexão sobre a Justiça
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p>
                        E não bastou essa história horrenda: religiosos foram
                        à frente do hospital protestar contra o procedimento,
                        pois são a favor da vida... Mas de qual vida? A da
                        criança violada?
                      </p>

                      <h2 className="text-2xl font-semibold text-gray-900 title-poppins">
                        A Hipocrisia da Sociedade
                      </h2>

                      <p>
                        Que precisava de socorro e ninguém fez absolutamente
                        nada? Inacreditável como as pessoas são hipócritas e
                        usam a religião para se esconder... Querer que uma
                        criança de dez anos tenha o filho do seu abusador é
                        crime — sim!
                      </p>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-2xl p-6 border border-purple-200/50 my-8"
                      >
                        <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                          {postCharacteristics["adeus-a-inocencia"].title}
                        </h3>
                        <CharacteristicList
                          items={postCharacteristics["adeus-a-inocencia"].items}
                          dotColor={postCharacteristics["adeus-a-inocencia"].dotColor}
                        />
                      </motion.div>

                      <p>
                        Que esse procedimento seja feito o mais rápido possível
                        e que ela receba todo o apoio necessário, pois essa
                        menina terá uma vida de traumas a superar, terá medo de
                        todo tipo de homem que se aproximar dela e não saberá
                        em quem poderá confiar.
                      </p>

                      <p>
                        E as pessoas preocupadas com o feto, fruto de um crime
                        desprezível. Realmente, o ser humano não deu certo.
                      </p>

                      {/* Destaque Final */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          {/* Imagem de fundo */}
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt="Adeus à Inocência"
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-purple-800/40 to-gray-600/20 backdrop-blur-sm" />
                          </div>

                          {/* Elementos decorativos */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
                          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-200/30 rounded-full blur-lg animate-ping" />

                          <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-6">
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                                Adeus à Inocência
                              </h3>
                            </div>

                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              Quebrando o silêncio diante da violência
                            </p>

                            <div className="flex justify-center space-x-6 mb-8">
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 0.5,
                                }}
                              >
                                🎈
                              </motion.span>
                              <motion.span
                                className="text-3xl drop-shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 1,
                                }}
                              >
                                🎈
                              </motion.span>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : post.slug === "amar-antes-do-tocar" ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-rose-400 rounded-full" />
                        <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 pl-8 italic">
                          Em um tempo em que tudo parece correr depressa demais,
                          onde gestos viram impulso e encontros se desfazem no
                          primeiro sopro, existe um tipo de amor que caminha na
                          contramão.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                          O jardim silencioso
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2 space-y-4">
                            <p className="text-lg leading-relaxed">
                              Um amor que nasce antes das mãos se encontrarem,
                              antes que os lábios descubram qualquer
                              proximidade. Um amor que reconhece a essência
                              antes da pele.
                            </p>
                            <p className="text-lg leading-relaxed">
                              Eu penso nisso como um jardim silencioso, onde a
                              conexão germina aos poucos. Nas conversas que
                              aquecem, mesmo ditas à distância. Nos olhares que,
                              mesmo através de uma tela, parecem atravessar
                              quilômetros. Nas risadas que chegam como um
                              abraço. Nada disso precisa de toque, precisa
                              apenas de verdade.
                            </p>
                          </div>

                          <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="lg:col-span-1"
                          >
                            <div className="bg-gradient-to-br from-orange-50 to-rose-50/80 rounded-2xl p-6 border border-orange-200/50 shadow-lg h-full">
                              <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                                Reflexão do Dia
                              </h3>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                A conexão emocional profunda ativa no cérebro
                                regiões ligadas ao prazer e à segurança de
                                forma semelhante ao toque — o vínculo pode
                                florescer com palavras, presença e escuta, não
                                só com proximidade física.
                              </p>
                            </div>
                          </motion.aside>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="my-12"
                      >
                        <blockquote className="relative bg-gradient-to-r from-orange-50 to-rose-50/70 rounded-2xl p-8 border border-orange-200/50 shadow-lg">
                          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              &quot;
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed font-medium pl-4">
                            Eu te reconheço, mesmo antes de te ter nos braços.
                          </p>
                          <div className="mt-4 pt-4 border-t border-orange-200/50">
                            <p className="text-sm text-orange-700 font-medium">
                              — O reconhecimento da essência
                            </p>
                          </div>
                        </blockquote>
                      </motion.div>

                      <p className="text-lg leading-relaxed">
                        É uma chama que não depende do físico, mas do sentir.
                        E é verdadeiro justamente porque é puro… porque escolhe
                        a alma antes da pressa, o profundo antes do raso.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                        className="my-12"
                      >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 title-poppins mb-6 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                          Quando o mundo aposta no efêmero
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <p className="text-lg leading-relaxed mb-4">
                              Quantas vezes o mundo nos engana com o efêmero? O
                              toque pode iludir, o beijo pode prometer o que não
                              sustenta… mas a alma, essa sim, sabe quando
                              encontra repouso. Amar antes do físico é um ato de
                              fé, é escolher o oceano inteiro, e não apenas a
                              onda que passa.
                            </p>
                            <p className="text-lg leading-relaxed">
                              É se encantar pela forma como alguém fala da vida
                              com brilho nos olhos. Pela risada que cura
                              pedaços que a gente nem lembrava que doíam. Pela
                              sintonia que acontece sem esforço, mesmo a
                              quilômetros de distância.
                            </p>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="bg-gradient-to-br from-orange-50 to-amber-50/80 rounded-2xl p-6 border border-orange-200/50"
                          >
                            <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                              {postCharacteristics["amar-antes-do-tocar"].title}
                            </h3>
                            <CharacteristicList
                              items={postCharacteristics["amar-antes-do-tocar"].items}
                              dotColor={postCharacteristics["amar-antes-do-tocar"].dotColor}
                              baseDelay={1.1}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.15 }}
                        className="my-12"
                      >
                        <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-amber-50 via-white to-rose-50 border-2 border-dashed border-amber-300/70 shadow-md">
                          <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2 title-poppins">
                            <HiLightBulb className="w-6 h-6 text-amber-600 flex-shrink-0" />
                            Curiosidade
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Estudos em psicologia do relacionamento mostram que
                            casais que constroem amizade e revelação emocional
                            antes da intensidade física tendem a relatar maior
                            satisfação e estabilidade — o vínculo prepara o
                            terreno para a proximidade com mais segurança.
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-amber-400 pl-4">
                            Platão já falava em almas que se reconhecem: às
                            vezes o encontro verdadeiro acontece primeiro por
                            dentro.
                          </p>
                        </div>
                      </motion.div>

                      <p className="text-lg leading-relaxed">
                        E se esse amor for raro? Talvez seja por isso mesmo que
                        ele é tão sagrado.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.25 }}
                        className="relative my-10"
                      >
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-rose-400 rounded-full" />
                        <p className="text-lg leading-relaxed text-gray-700 pl-8">
                          Ele ensina que intimidade nasce da escuta e da
                          construção lenta. Esperar pelo toque não é fraqueza:
                          é maturidade. É carinho em estado puro.
                        </p>
                      </motion.div>

                      <p className="text-lg leading-relaxed">
                        E para quem já sentiu essa faísca espiritual, esse
                        «acontecer» que a gente não controla, saiba: esse amor
                        existe, sim. Ele pulsa, transforma, fortalece… mesmo
                        antes de um único toque. 🎈
                      </p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.35 }}
                        className="my-16"
                      >
                        <div className="relative overflow-hidden rounded-3xl p-0 text-center shadow-2xl border-0">
                          <div className="absolute inset-0 -m-8">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-orange-900/35 to-gray-600/25 backdrop-blur-[2px]" />
                          </div>

                          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400/25 rounded-full blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-rose-300/25 rounded-full blur-2xl animate-pulse" />

                          <div className="relative z-10 p-8 md:p-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 title-poppins drop-shadow-xl">
                              Alma antes da pressa
                            </h3>
                            <p className="text-white/95 text-lg mb-8 drop-shadow-xl leading-relaxed">
                              O amor que escolhe o profundo — mesmo à distância
                            </p>
                            <div className="flex justify-center space-x-6 mb-2">
                              {[0, 0.5, 1].map((delay, index) => (
                                <motion.span
                                  key={`amar-balloon-${index}`}
                                  className="text-3xl drop-shadow-xl"
                                  animate={{ y: [0, -10, 0] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay,
                                  }}
                                >
                                  🎈
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    // Conteúdo padrão para outros posts
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed">{post.content}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              {post.tags.length > 0 && (
                <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200/50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 title-poppins flex items-center">
                    <HiTag className="w-5 h-5 mr-2 text-orange-600" />
                    Tags Relacionadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm text-orange-700 text-sm rounded-xl border border-orange-200/50 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 shadow-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Botão Voltar ao Início */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex justify-center">
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

export default PostPage;
