// Importações necessárias
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import AllPostsPage from "./pages/AllPostsPage";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import {
  avatar,
  image1,
  image3,
  image5,
  image6,
  image7,
  image8,
  image9,
  image13,
  image14,
  image16,
} from "./assets/staticImages";
import { buildCategoriesFromPosts } from "./utils/categories";

// Dados mock dos posts
const mockPosts = [
  {
    id: 10,
    title: "Amar Antes do Tocar",
    slug: "amar-antes-do-tocar",
    excerpt:
      "Um amor que reconhece a essência antes da pele — conexão à distância, verdade e o jardim silencioso onde a intimidade nasce sem pressa.",
    content: `Em um tempo em que tudo parece correr depressa demais, onde gestos viram impulso e encontros se desfazem no primeiro sopro, existe um tipo de amor que caminha na contramão. Um amor que nasce antes das mãos se encontrarem, antes que os lábios descubram qualquer proximidade. Um amor que reconhece a essência antes da pele.

Eu penso nisso como um jardim silencioso, onde a conexão germina aos poucos. Nas conversas que aquecem, mesmo ditas à distância. Nos olhares que, mesmo através de uma tela, parecem atravessar quilômetros. Nas risadas que chegam como um abraço. Nada disso precisa de toque, precisa apenas de verdade.

É uma chama que não depende do físico, mas do sentir. É como se algo dentro do peito dissesse: "Eu te reconheço, mesmo antes de te ter nos braços."
E é verdadeiro justamente porque é puro… porque escolhe a alma antes da pressa, o profundo antes do raso.

Quantas vezes o mundo nos engana com o efêmero? O toque pode iludir, o beijo pode prometer o que não sustenta… mas a alma, essa sim, sabe quando encontra repouso. Amar antes do físico é um ato de fé, é escolher o oceano inteiro, e não apenas a onda que passa.

É se encantar pela forma como alguém fala da vida com brilho nos olhos. Pela risada que cura pedaços que a gente nem lembrava que doíam. Pela sintonia que acontece sem esforço, mesmo a quilômetros de distância. E se esse amor for raro? Talvez seja por isso mesmo que ele é tão sagrado.

Ele ensina que intimidade nasce da paciência, da escuta, da construção lenta e bonita. Esperar pelo toque não é fraqueza, é força. É maturidade. É carinho em estado puro.

E para quem já sentiu essa faísca espiritual, esse "acontecer" que a gente não controla, saiba: esse amor existe, sim. Ele pulsa, transforma, fortalece… mesmo antes de um único toque. 🎈`,
    featuredImage: image16,
    category: "Reflexões Sociais",
    publishedAt: "2026-05-07T12:00:00Z",
    readingTime: 6,
    views: 1240,
    likes: 186,
    tags: ["amor", "conexão", "intimidade", "distância", "alma"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 1,
    title: "Ser Mulher: A Força da Delicadeza",
    slug: "ser-mulher-dia-internacional",
    excerpt:
      "Uma reflexão sobre a essência feminina, celebrando a força, delicadeza e resiliência das mulheres no Dia Internacional da Mulher.",
    content:
      "Escrevo sobre a mulher com admiração: ela caminha na dúvida cheia de certezas, corre atrás das nuvens num dia de sol e alcança o sol num dia de chuva. Chora de alegria e, muitas vezes, sorri com tristeza; adia sonhos em prol de terceiros, acredita quando ninguém mais acredita e espera quando ninguém mais espera.\n\nParabéns a todas as mulheres delicadas, fortes e guerreiras.\n\nFeliz Dia Internacional da Mulher. 🎈🎈",
    featuredImage: image1,
    category: "Reflexões Pessoais",
    publishedAt: "2024-03-08T10:00:00Z",
    readingTime: 3,
    views: 2156,
    likes: 156,
    tags: ["mulher", "força", "delicadeza", "dia-da-mulher"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 2,
    title: "A Solidão Essencial",
    slug: "solidao-essencial",
    excerpt:
      "Uma reflexão sobre a solidão inerente à condição humana e como aceitar essa verdade pode nos libertar.",
    content:
      "Creio que no fundo somos sempre sós. Pode ser que você encontre um amor, um punhado de amigos, o conforto familiar. Mas ninguém nos livra dos pesos da vida. A gente nasce e morre sozinho. E está tudo bem — não há drama nisso. É claro que é bom ter gente para rir e chorar, mas entenda: no fundo é sempre você. E você. 🎈🎈",
    featuredImage: image14,
    category: "Reflexões Pessoais",
    publishedAt: "2018-03-02T10:00:00Z",
    readingTime: 4,
    views: 3421,
    likes: 289,
    tags: ["solidão", "reflexão", "vida", "aceitação"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 3,
    title: "Talvez Amanhã",
    slug: "talvez-amanha",
    excerpt:
      "Uma reflexão poética sobre as incertezas do amor, os talvez da vida e a beleza de viver no presente com esperança no futuro.",
    content:
      "Quem sabe amanhã faça sol, mas talvez até chova um pouco. Talvez o vento sopre forte, talvez eu ainda sinta seu gosto. Talvez eu tome um pouco de café e talvez eu nem lave o rosto. Talvez eu esqueça seu nome ou talvez queira seu sobrenome, amanhã ou quem sabe em agosto. Talvez eu te mande um áudio, com a voz trêmula, estando nervoso. Talvez eu te mande mensagem e sorria até tarde ou, quem sabe, até a hora do almoço. Talvez eu reveja suas fotos. Talvez eu durma um pouco mais tarde, desligue o alarme e te queira cada vez mais. Talvez eu queira muito estar ao seu lado, com a certeza de que ainda é pouco. Talvez eu queira seu sobrenome, talvez o número do seu telefone — talvez o amor seja isso, talvez seja essa coisa de louco. 🎈",
    featuredImage: image3,
    category: "Reflexões Pessoais",
    publishedAt: "2024-02-14T15:30:00Z",
    readingTime: 5,
    views: 2789,
    likes: 342,
    tags: ["amor", "poesia", "incerteza", "vida"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 4,
    title: "Deixar Partir",
    slug: "deixar-partir",
    excerpt:
      "Uma reflexão sobre o amor que às vezes precisa ser deixado ir, mesmo quando isso dói. Amar também é saber quando deixar partir.",
    content:
      "Não me escondi e jamais desisti, mas se me afastei de você num instante, foi só para que pudesse ser feliz. Amar você foi a coisa mais gratificante — e também a mais dolorosa — que já fiz. E porque nos fazíamos sorrir, e porque nos adorávamos beijar, não foi fácil deixar você partir — muito menos será deixar de amar. Infelizmente, amar é também, às vezes, ter que deixar partir. 🎈🎈",
    featuredImage: image13,
    category: "Reflexões Pessoais",
    publishedAt: "2025-08-07T10:00:00Z",
    readingTime: 4,
    views: 1956,
    likes: 178,
    tags: ["amor", "desapego", "dificuldade", "crescimento"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 5,
    title: "As Mulheres Chatas",
    slug: "mulheres-chatas",
    excerpt:
      "Uma reflexão sobre as mulheres que são chamadas de chatas, mas que na verdade são as que mais demonstram amor e cuidado verdadeiro.",
    content:
      "As mulheres que mais poderão marcar a sua vida são as chamadas de chatas — também de loucas, ciumentas, confusas, esquisitas. Ligam de madrugada cobrando algo que você fez na semana passada, brigam com você, olham feio para as mulheres que estão em volta de você, fazem cara feia, batem o pé, fazem bico, discutem sem pensar nas consequências e, principalmente, são ciumentas. Porém vou te perguntar uma coisa: quem não gosta de se sentir desejado? Uma mulher que não te procura ou não está nem aí para você, que tem medo de te perder e prefere fingir que não viu ou ouviu nada, perdeu a própria identidade no silêncio. As chamadas de chatas podem incomodar, mas estão ali do seu lado em qualquer situação, não ligam para sua conta bancária ou quantos carros tem na garagem — cercam você de um jeito que não deixam o mal se aproximar. 🎈🎈",
    featuredImage: image5,
    category: "Reflexões Pessoais",
    publishedAt: "2025-08-07T14:30:00Z",
    readingTime: 6,
    views: 3245,
    likes: 456,
    tags: ["mulher", "amor", "ciúme", "cuidado", "identidade"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 6,
    title: "Cuida Bem Dela",
    slug: "cuida-bem-dela",
    excerpt:
      "Um lembrete sobre a importância de cuidar e valorizar quem está ao nosso lado, especialmente aquela pessoa especial que permaneceu conosco.",
    content:
      "Sabe, você pode andar por aí e dar de cara com muitas, pode abraçar muitas, mas nenhuma delas vai ser como ela. Cuide até cansar, até desanimar, até enjoar — mas cuide. Diga que ela fica ainda mais linda quando fica brava; diga isso a ela. Valorize enquanto você a tem nas mãos. E ela foi a única que permaneceu, que te confortou. Cuide bem do que te faz bem; cuide bem dela, até o final.",
    featuredImage: image6,
    category: "Reflexões Pessoais",
    publishedAt: "2025-08-07T16:45:00Z",
    readingTime: 3,
    views: 2876,
    likes: 389,
    tags: ["cuidado", "valorização", "amor", "unicidade"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 7,
    title: "Eu Quero Casar com Você",
    slug: "eu-quero-casar-com-voce",
    excerpt:
      "Uma declaração de amor sincera sobre querer construir uma vida juntos, compartilhando momentos simples e especiais.",
    content:
      "Eu quero sim casar com você, morar com você, acordar ao seu lado, ouvir você contar sobre o seu dia, sair à noite de mãos dadas. Correr em direção ao mar só para vê-la brilhar sob a luz da lua, ouvir você suspirar que me ama, que me quer — sim, eu quero ficar sem palavras quando você disser certas coisas. Quero que você me cale com um beijo quando eu falar demais. Quero te amar pelo resto da minha vida e viver feliz ao seu lado.",
    featuredImage: image7,
    category: "Reflexões Pessoais",
    publishedAt: "2025-08-08T09:15:00Z",
    readingTime: 4,
    views: 4123,
    likes: 567,
    tags: ["casamento", "amor", "futuro", "compartilhar"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 8,
    title: "Hábitos Destruidores",
    slug: "habitos-destruidores",
    excerpt:
      "Uma reflexão sobre os hábitos que nos machucam por dentro, especialmente aqueles relacionados a cuidar dos outros e esquecer de nós mesmos.",
    content:
      "Preciso parar com os velhos hábitos, mas não me refiro a hábitos como morder a boca quando fico nervoso ou roer a unha quando fico com tédio. Refiro-me aos hábitos destruidores: machucar minha alma para não ferir outra pessoa, cuidar tanto de outras pessoas que acabo esquecendo de cuidar de mim, ou mentir para que pensem que está tudo bem apenas porque não quero que ninguém se preocupe. Mas o que acontece quando os hábitos estão cravados dentro da alma? Às vezes, me sinto melhor sozinho...",
    featuredImage: image8,
    category: "Reflexões Pessoais",
    publishedAt: "2025-08-08T11:30:00Z",
    readingTime: 5,
    views: 2987,
    likes: 234,
    tags: ["hábitos", "autocuidado", "solidão", "mudança"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
  {
    id: 9,
    title: "Adeus à Inocência",
    slug: "adeus-a-inocencia",
    excerpt:
      "Uma reflexão profunda sobre um caso trágico de abuso infantil e a hipocrisia da sociedade que usa a religião para justificar atrocidades.",
    content:
      "Adeus à inocência... Uma menina de dez anos, violentada pelo tio por quatro anos, sofrendo calada todos os tipos de abusos possíveis. Não tendo ninguém — absolutamente ninguém — que a protegesse, que percebesse o que vinha ocorrendo com ela (ou até se tinha, mas é mais fácil fingir que nada aconteça e proteger o abusador). Após esse sofrimento dentro de casa, ficou à mercê da justiça para autorizar um aborto, sofre com os traumas e agora com essa exposição toda. E não bastou essa história horrenda: religiosos foram à frente do hospital protestar contra o procedimento, pois são a favor da vida... Mas de qual vida? A da criança violada? Que precisava de socorro e ninguém fez absolutamente nada? Inacreditável como as pessoas são hipócritas e usam a religião para se esconder... Querer que uma criança de dez anos tenha o filho do seu abusador é crime — sim! Que esse procedimento seja feito o mais rápido possível e que ela receba todo o apoio necessário. E as pessoas preocupadas com o feto, fruto de um crime desprezível. Realmente, o ser humano não deu certo.",
    featuredImage: image9,
    category: "Reflexões Sociais",
    publishedAt: "2025-08-08T15:00:00Z",
    readingTime: 8,
    views: 5678,
    likes: 892,
    tags: ["justiça", "abuso", "sociedade", "hipocrisia", "proteção"],
    author: {
      name: "Wendley Santos",
      avatar: avatar,
      bio: "Escritor e pensador apaixonado por reflexões profundas sobre a vida.",
      social: {
        facebook: "https://facebook.com/Wendlley007",
        instagram: "https://instagram.com/wendlley",
      },
    },
  },
];

// Componente principal da aplicação
function App() {
  const [posts] = useState(mockPosts);
  const [isLoading, setIsLoading] = useState(true);
  const categories = buildCategoriesFromPosts(posts);

  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  // Mostrar loading se ainda estiver carregando
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header categories={categories} />

        {/* Main Content */}
        <main className="flex-1">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage posts={posts} />} />
              <Route path="/posts" element={<AllPostsPage posts={posts} />} />
              <Route path="/post/:slug" element={<PostPage posts={posts} />} />
              <Route
                path="/categoria/:slug"
                element={<CategoryPage posts={posts} categories={categories} />}
              />
              <Route path="/sobre" element={<AboutPage />} />
            </Routes>
          </PageTransition>
        </main>

        {/* Footer */}
        <Footer categories={categories} />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
