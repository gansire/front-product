Product CRUD
  Este projeto foi desenvolvido usando React, TypeScript, Vite, React Router, SASS e Axios.

Como Rodar o Projeto
  1. clone o repositório
  2. acessar a pasta onde foi colocado o projeto
  3. instale as dependências (npm install)
  4. inicie o servidor (npm run dev)
  5. projeto vai abrir no http://localhost:5173

Estrutura do Projeto
  src/
├── api/
│   ├── axios.ts         # Configuração do Axios
│   └── routes.ts        # Rotas da API
├── components/
│   ├── ProductCard.tsx   # Card individual de produto
│   └── ProductSearchName.tsx # Filtro de busca
├── context/
│   └── CategoryContext.tsx # Contexto global de categorias
├── pages/
│   ├── ProductForm.tsx  # Página de formulário de produto
│   └── ProductList.tsx   # Página de listagem de produtos
├── routes/
│   └── AppRoutes.tsx     # Definição das rotas
├── styles/
│   └── main.scss         # Estilos principais
├── App.tsx
├── main.tsx
└── vite.config.ts

OBSERVAÇÃO
  Este projeto é apenas a parte frontend.
