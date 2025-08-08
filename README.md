# Extraord1nário - Blog Semântico

Um blog moderno e semântico construído com React, JavaScript e Tailwind CSS, focado em performance, SEO e experiência do usuário.

## 🚀 Características

- **Semântica HTML**: Estrutura semântica completa para melhor acessibilidade e SEO
- **Performance Otimizada**: Lazy loading, code splitting e otimizações de CLS
- **SEO Avançado**: Meta tags, Open Graph, Twitter Cards e estrutura de dados
- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **JavaScript**: Linguagem moderna e flexível
- **Tailwind CSS**: Estilização moderna e consistente
- **Acessibilidade**: Suporte completo a ARIA e navegação por teclado

## 🛠️ Tecnologias

- **React 18** - Biblioteca de interface
- **JavaScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **PostCSS** - Processamento CSS
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
Extraord1nario/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── Footer.jsx     # Rodapé
│   │   ├── Hero.jsx       # Seção hero
│   │   ├── PostCard.jsx   # Card de artigo
│   │   └── ScrollToTop.jsx # Botão scroll to top
│   ├── pages/             # Páginas da aplicação
│   │   └── HomePage.jsx   # Página inicial
│   ├── utils/             # Utilitários
│   ├── assets/            # Recursos estáticos
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind
└── README.md              # Documentação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Extraord1nario.git
cd Extraord1nario
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🎨 Design System

### Cores

- **Primary**: Azul (#0ea5e9) - Cor principal da marca
- **Secondary**: Cinza (#64748b) - Cor secundária
- **Success**: Verde (#10b981) - Estados de sucesso
- **Warning**: Amarelo (#f59e0b) - Avisos
- **Error**: Vermelho (#ef4444) - Erros

### Tipografia

- **Sans**: Inter - Para textos gerais
- **Serif**: Merriweather - Para títulos

### Componentes

- **Botões**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card`, `.card-hover`
- **Layout**: `.container-custom`

## 📱 Responsividade

O blog é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO

### Meta Tags Implementadas

- Title e description dinâmicos
- Open Graph para redes sociais
- Twitter Cards
- Canonical URLs
- Structured Data (JSON-LD)

### Performance

- Lazy loading de imagens
- Code splitting automático
- Minificação de CSS/JS
- Otimização de fontes
- Preload de recursos críticos

## ♿ Acessibilidade

- Navegação por teclado
- ARIA labels e roles
- Contraste adequado
- Suporte a screen readers
- Reduced motion support

## 📈 Métricas de Performance

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 600ms

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [extraord1nario.com](https://extraord1nario.com)
- **Email**: contato@extraord1nario.com
- **Twitter**: [@extraord1nario](https://twitter.com/extraord1nario)

---

Desenvolvido com ❤️ pelo time Extraord1nário
