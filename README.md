# 🍬 Cardápio Dona Lurdes — CRUD Web (MVC + Repository)

Aplicação web desenvolvida em **Node.js** para gerenciamento de doces (cadastro, listagem, edição e exclusão), estruturada sob o padrão arquitetural **MVC + Repository** com renderização no servidor (**SSR**) e persistência em banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

* **Runtime:** Node.js (ES Modules — `"type": "module"`)
* **Framework Web:** Express 5
* **Template Engine (Views):** EJS (Embedded JavaScript)
* **ORM & Banco de Dados:** Prisma ORM 5 + SQLite
* **Suporte REST em Formulários:** `method-override` (habilita `PUT` e `DELETE` via `<form>`)

---

## 📐 Arquitetura e Estrutura de Pastas

O projeto utiliza uma arquitetura em camadas enxuta, separando o roteamento, o controle das requisições HTTP, o acesso ao banco de dados e a camada visual:

```text
Navegador (EJS) ⇄ Rotas (Express) ⇄ Controller ⇄ Repository ⇄ Prisma / SQLite
```

```text
cardapio_dona_lurdes/
├── prisma/
│   ├── migrations/          # Histórico versionado das migrações do banco
│   └── schema.prisma        # Modelagem das tabelas e configuração do SQLite
├── src/
│   ├── controllers/
│   │   └── DoceController.js    # Regras de requisição/resposta HTTP e renderização EJS
│   ├── repositories/
│   │   └── DoceRepository.js    # Operações de banco (CRUD) via Prisma e conversão de tipos
│   ├── routes/
│   │   └── doceRoutes.js        # Mapeamento das rotas RESTful (/doces)
│   ├── views/
│   │   └── doces/
│   │       ├── index.ejs        # Listagem de doces e botão de exclusão
│   │       ├── novo.ejs         # Formulário de cadastro
│   │       └── editar.ejs       # Formulário de edição
│   ├── prisma.js                # Instância única (Singleton) do PrismaClient
│   └── server.js                # Configuração do Express, EJS, middlewares e servidor
├── .env                         # Variáveis de ambiente (não versionado)
├── .env.example                 # Modelo de variáveis de ambiente (versionado)
├── .gitignore                   # Arquivos ignorados pelo Git (node_modules, .env, dev.db)
├── package.json                 # Dependências e scripts de execução
└── README.md                    # Documentação do projeto
```

---

## 🗄️ Modelagem do Banco de Dados

Definida em `prisma/schema.prisma`:

| Campo | Tipo | Atributos | Descrição |
| :--- | :--- | :--- | :--- |
| `id` | `Int` | `@id @default(autoincrement())` | Identificador único do doce |
| `nome` | `String` | Obrigatório | Nome do doce (ex: Brigadeiro) |
| `preco` | `Float` | Obrigatório | Preço unitário em reais |

---

## 🛣️ Mapa de Rotas

| Método HTTP | Rota | Ação / Controller | Descrição |
| :---: | :--- | :--- | :--- |
| `GET` | `/` | Redirecionamento | Redireciona automaticamente para `/doces` |
| `GET` | `/doces` | `DoceController.listar` | Renderiza a tabela com todos os doces |
| `GET` | `/doces/novo` | `DoceController.formCriar` | Exibe o formulário de cadastro |
| `POST` | `/doces` | `DoceController.criar` | Salva um novo doce no banco e redireciona |
| `GET` | `/doces/:id/editar` | `DoceController.formEditar` | Exibe o formulário preenchido para edição |
| `PUT` | `/doces/:id` | `DoceController.atualizar` | Atualiza os dados do doce (via `?_method=PUT`) |
| `DELETE` | `/doces/:id` | `DoceController.deletar` | Remove o doce do banco (via `?_method=DELETE`) |

---

## ⚙️ Como Executar o Projeto Localmente

### 1. Clonar o repositório e instalar as dependências
```bash
git clone [https://github.com/dzzabreu/cardapio_dona_lurdes.git](https://github.com/dzzabreu/cardapio_dona_lurdes.git)
cd cardapio_dona_lurdes
npm install
```

### 2. Configurar as variáveis de ambiente
Copie o arquivo de exemplo para criar o `.env` local:
```bash
cp .env.example .env
```
*(No Windows PowerShell, você também pode usar `copy .env.example .env`)*

### 3. Executar as migrations do Prisma
Crie o banco de dados SQLite e aplique as tabelas versionadas:
```bash
npx prisma migrate dev
```

### 4. Iniciar o servidor
```bash
npm start
```

Acesse a aplicação no navegador em: **`http://localhost:3000`**

---

## 🔍 Ferramentas Auxiliares

* **Inspecionar o banco visualmente (Prisma Studio):**
  ```bash
  npx prisma studio
  ```
* **Visualizar histórico de commits da construção:**
  ```bash
  git log --oneline
  ```
