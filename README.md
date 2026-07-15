# 💰 RETNI - Sistema de Controle Financeiro

## 📖 Sobre o Projeto

O **RETNI** é uma aplicação web desenvolvida para gerenciamento financeiro pessoal, permitindo que usuários acompanhem receitas, despesas e o saldo financeiro de forma simples, organizada e segura.

O projeto foi desenvolvido como parte do **Tech Challenge da Pós-Graduação**, aplicando conceitos modernos de desenvolvimento web, arquitetura de software, autenticação, persistência de dados, microfrontends e computação em nuvem.


# ✨ Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login seguro com autenticação
- ✅ Gerenciamento de sessão
- ✅ Dashboard financeiro
- ✅ Cadastro de receitas
- ✅ Cadastro de despesas
- ✅ Edição de transações
- ✅ Exclusão de transações
- ✅ Pesquisa de movimentações
- ✅ Filtros por categoria
- ✅ Controle de gastos fixos
- ✅ Upload de comprovantes
- ✅ Dashboard com gráficos financeiros
- ✅ Persistência em banco de dados PostgreSQL
- ✅ Interface responsiva
- ✅ Arquitetura baseada em Microfrontends

---

# 🏗 Arquitetura

O sistema foi desenvolvido utilizando arquitetura baseada em **Microfrontends**, separando responsabilidades entre diferentes aplicações.

```
                +----------------------+
                |      Shell App       |
                |      (Next.js)       |
                +----------+-----------+
                           |
          +----------------+----------------+
          |                                 |
+-----------------------+      +------------------------+
| Dashboard Remote      |      | Transactions Remote    |
| (Vite + React)        |      | (Vite + React)         |
+-----------------------+      +------------------------+
```

### Shell

Responsável por:

- autenticação;
- gerenciamento de sessão;
- integração entre os microfrontends;
- comunicação com APIs;
- layout da aplicação.

### Dashboard Remote

Responsável pela exibição dos indicadores financeiros, gráfico e resumo das movimentações.

### Transactions Remote

Responsável pelo gerenciamento das transações financeiras (CRUD, filtros e consultas).

---

# 🛠 Tecnologias Utilizadas

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Redux Toolkit

## Microfrontends

- Module Federation
- Vite

## Backend

- Next.js API Routes

## Banco de Dados

- PostgreSQL
- Neon Database

## Autenticação

- Better Auth

## Upload de Arquivos

- Vercel Blob

## Deploy

- Vercel

## Ferramentas

- Docker
- Docker Compose
- Git
- GitHub

---

# 📂 Estrutura do Projeto

```
.
├── app/
├── apps/
│   ├── dashboard-remote/
│   └── transactions-remote/
├── components/
├── hooks/
├── lib/
├── packages/
│   ├── contracts/
│   └── ui/
├── public/
├── styles/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# ⚙️ Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Manoellavs/RETNI--controle-finans.git
```

## 2. Acessar o projeto

```bash
cd retni-controle-financeiro
```

## 3. Instalar as dependências

```bash
pnpm install
```

## 4. Configurar as variáveis de ambiente

Criar um arquivo:

```
.env.local
```

Preencher:

```env
DATABASE_URL=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

NEXT_PUBLIC_DASHBOARD_REMOTE_URL=

NEXT_PUBLIC_TRANSACTIONS_REMOTE_URL=
```

## 5. Executar

```bash
pnpm dev
```

Ou, para executar todos os microfrontends:

```bash
pnpm dev:all
```

---

# 📊 Funcionalidades Implementadas

| Funcionalidade | Status |
|----------------|--------|
| Cadastro de usuário | ✅ |
| Login | ✅ |
| Dashboard | ✅ |
| CRUD de transações | ✅ |
| Pesquisa | ✅ |
| Filtros | ✅ |
| Upload de comprovantes | ✅ |
| Controle de gastos fixos | ✅ |
| Persistência em banco | ✅ |
| Microfrontends | ✅ |
| Docker | ✅ |
| Deploy em nuvem | ✅ |

---

# ☁️ Deploy

O projeto encontra-se hospedado na plataforma **Vercel**, utilizando banco de dados PostgreSQL hospedado no **Neon Database**.

---

# 🔒 Segurança

A autenticação é realizada utilizando **Better Auth**, garantindo:

- autenticação por e-mail e senha;
- gerenciamento de sessões;
- proteção de rotas privadas;
- controle de acesso aos dados do usuário.

---

# 👩‍💻 Autora

**Manoella Vieira**
