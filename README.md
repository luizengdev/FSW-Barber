<div align="center">

# ✂️ FSW Barber 🪒

**FSW Barber** Este foi o projeto da Full Stack Week 5ª edição que foi apresentado de AGO/05/2024 ~ AGO/12/2024. É uma aplicação com layout mobile first de reservas para barbearias. A plataforma permite que usuários encontrem barbearias, visualizem serviços disponíveis, façam reservas e gerenciem seus agendamentos.

Este projeto também utiliza a autenticação do Google com integração OAuth.

🌎 Deploy: [Live](https://fsw-barber-five-gules.vercel.app) 🖥️
<br/><br/>
![Mobile](https://github.com/user-attachments/assets/148b88c7-13ad-4f9b-a61f-bd39ed8bcca6)
![Desktop1](https://github.com/user-attachments/assets/c1d1896f-22ad-44e9-b241-f5eeb5d56ef3)

</div>

## 🚀 Funcionalidades

- 🔍 **Pesquisa de Barbearias**: Encontre rapidamente barbearias próximas e populares.
- 🗓️ **Agendamento de Serviços**: Reserve cortes de cabelo, barba e outros serviços com facilidade.
- 🔐 **Autenticação com Google**: Login seguro e rápido utilizando sua conta Google, integrado com **NextAuth**.
- 📅 **Gerenciamento de Agendamentos**: Visualize e cancele seus agendamentos diretamente na plataforma.
- 📱 **Interface Responsiva**: Design otimizado para dispositivos móveis, utilizando **Tailwind CSS**.
- 🛠️ **Sistema de Reservas**: Backend robusto com **Prisma** e **PostgreSQL** para gerenciar dados de usuários e reservas.

## 🛠️ Tecnologias Utilizadas

| <img src="https://img.icons8.com/color/48/000000/nextjs.png"/> | <img src="https://avatars.githubusercontent.com/u/77690634?s=64&v=4"/> | <img src="https://img.icons8.com/color/48/000000/typescript.png"/> | <img src="https://img.icons8.com/color/48/000000/prisma-orm.png"/> | <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/> |
|-----------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------|
| <img src="https://next-auth.js.org/img/logo/logo-sm.png" width="32px"/> | <img src="https://img.icons8.com/color/48/000000/tailwindcss.png"/> | <img src="https://img.icons8.com/color/48/000000/react-native.png"/> | <img src="https://avatars.githubusercontent.com/u/139895814?s=48&v=4"/> | <img src="https://img.icons8.com/color/48/000000/google.png"/> |

- 💻 **Frontend**: React, Next.js, Tailwind CSS, TypeScript, Shadcn/ui
- 🗄️ **Backend**: Node.js, Prisma, PostgreSQL, NeonDB Tech
- 🔑 **Autenticação**: NextAuth
- 🛠️ **Bibliotecas Adicionais**: Lucide-react, Date-fns

## 🔧 Configuração do Projeto

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/luizengdev/FSW-Barber.git

## Instale as dependências:
bash
npm install

Configure as variáveis de ambiente: Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:
DATABASE_URL=postgres://usuario:senha@localhost:5432/fsw-barber
NEXTAUTH_SECRET=sua_chave_secreta
GOOGLE_CLIENT_ID=seu_cliente_id
GOOGLE_CLIENT_SECRET=seu_cliente_secreto

Execute as migrações do banco de dados:
npx prisma migrate dev

Inicie o servidor de desenvolvimento:
npm run dev

==============================

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
