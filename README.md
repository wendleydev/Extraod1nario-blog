# 🌟 Extraord1nário - Blog Visual em React

Projeto de blog pessoal com foco em experiência visual, navegação fluida e leitura de reflexões.

No momento, o projeto é **100% front-end** (sem backend), ideal para apresentação de conteúdo estático.

## ✨ Estado Atual do Projeto

- Interface moderna e responsiva
- Navegação por categorias funcionando
- Página de Sobre implementada
- Transições e animações com Framer Motion
- Estrutura preparada para futura integração com backend

## 🛠️ Tecnologias

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 16+
- npm

### Passos

```bash
npm install
npm run dev
```

Acesse no navegador:

```txt
http://localhost:3000
```

## 🧭 Rotas Disponíveis

- `/` - Página inicial
- `/posts` - Todas as reflexões
- `/post/:slug` - Página individual de post
- `/categoria/:slug` - Posts filtrados por categoria
- `/sobre` - Página sobre o projeto/autor

## 📁 Estrutura Principal

```txt
src/
  components/
    Header.jsx
    Footer.jsx
    Hero.jsx
    PostCard.jsx
    LoadingSpinner.jsx
    PageTransition.jsx
    ScrollToTop.jsx
  pages/
    HomePage.jsx
    AllPostsPage.jsx
    PostPage.jsx
    CategoryPage.jsx
    AboutPage.jsx
  utils/
    categories.js
  App.jsx
```

## 📝 Conteúdo e Escopo

Funcionalidades que podem ser adicionadas futuramente com backend.

- Autenticação/login
- Comentários
- Edição via painel admin
- Integração de curtidas/visualizações reais

## 🔧 Scripts

```bash
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run preview  # pré-visualizar build
npm run lint     # linter (requer configuração ESLint no projeto)
```

## 👨‍💻 Autor

### Wendley Santos

- GitHub: [@wendleydev](https://github.com/wendleydev)
- LinkedIn: [Wendley Santos](https://linkedin.com/in/wendley-santos)
- Facebook (página): [Extraord1nário](https://www.facebook.com/share/1aHBSGkHmn)
