# Martelinho de Ouro - Landing Page

Landing page profissional para serviços de funilaria e pintura automotiva com integração WhatsApp.

## Características

- ✅ Design responsivo (mobile-first)
- ✅ Integração completa com WhatsApp
- ✅ Galeria interativa antes/depois
- ✅ Formulário de contato com validação
- ✅ SEO otimizado com structured data (JSON-LD)
- ✅ Páginas de Serviços e Sobre
- ✅ Depoimentos com carousel
- ✅ Garantia de 90 dias destacada
- ✅ Paleta de cores personalizada

## Configuração

### 1. Substituir número do WhatsApp

Procure por `WHATSAPP_NUMBER` em todos os arquivos e substitua por seu número real (apenas dígitos):

\`\`\`typescript
const WHATSAPP_NUMBER = '5511999999999' // Substitua por: 55 + DDD + número
\`\`\`

Arquivos que contêm esta variável:
- `components/header.tsx`
- `components/hero.tsx`
- `components/before-after-gallery.tsx`
- `components/how-it-works.tsx`
- `components/contact-form.tsx`
- `app/servicos/page.client.tsx`
- `app/sobre/page.client.tsx`

### 2. Atualizar domínio

Substitua `https://www.seudominio.com` pelo seu domínio real em:
- `app/layout.tsx`
- `components/structured-data.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

### 3. Adicionar imagens reais

Substitua as imagens placeholder por fotos reais:
- Galeria antes/depois: `/public/car-*.jpg`
- Depoimentos: fotos dos clientes
- Sobre: foto da oficina e equipe

### 4. Personalizar conteúdo

- Endereço e dados de contato no `components/footer.tsx`
- Coordenadas GPS em `components/structured-data.tsx`
- Depoimentos reais em `app/page.tsx`
- Informações da equipe em `app/sobre/page.client.tsx`

### 5. SEO

- Adicione código de verificação do Google Search Console em `app/layout.tsx`
- Configure Google Analytics se necessário
- Envie o sitemap para o Google Search Console após deploy

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- shadcn/ui components

## Deploy

Recomendado: Vercel

\`\`\`bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build
\`\`\`

## Estrutura de Cores

- Primária (Ouro): #C99B3B
- Secundária (Azul): #0B3D91
- CTA (Vermelho): #E53935
- Neutros: #F6F7F9, #E1E5EA
- Texto: #111827, #6B7280

## Tipografia

- Headings: Poppins (600, 700)
- Body: Roboto (400, 500)

## Suporte

Para dúvidas sobre implementação, consulte a documentação do Next.js: https://nextjs.org/docs
