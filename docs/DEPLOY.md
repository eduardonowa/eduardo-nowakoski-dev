# Guia de Deploy

## Vercel (Recomendado)

### Deploy Automático

1. **Conecte seu repositório:**

   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório Git (GitHub, GitLab, Bitbucket)

2. **Configuração Automática:**

   - Vercel detecta Next.js automaticamente
   - Configurações padrão funcionam perfeitamente
   - Clique em "Deploy"

3. **Pronto!**
   - Deploy automático a cada push na branch principal
   - Preview deployments para PRs
   - HTTPS automático
   - CDN global

### Configurações Opcionais

**Variáveis de Ambiente:**

- Não necessárias para este projeto (aplicação estática)

**Domínio Customizado:**

### Opção 1: Domínio Gratuito da Vercel (Recomendado para começar)

A Vercel oferece um subdomínio gratuito no formato: `seu-projeto.vercel.app`

1. Após o deploy, você receberá automaticamente: `portfolio-eduardo-nowakoski.vercel.app`
2. Este domínio já está configurado e funcionando

### Opção 2: Domínio Customizado (eduardo-nowakoski-dev.com)

#### Passo 1: Comprar o Domínio

Você pode comprar um domínio em:

- **Namecheap** (recomendado): https://www.namecheap.com
- **Google Domains**: https://domains.google
- **GoDaddy**: https://www.godaddy.com
- **Registro.br** (para .br): https://registro.br

**Exemplo de domínios sugeridos:**

- `eduardo-nowakoski-dev.com`
- `eduardo-nowakoski.com`
- `nowakoski.dev`
- `eduardo-nowakoski.tech`

#### Passo 2: Configurar Domínio na Vercel

1. **Acesse o Dashboard da Vercel:**

   - Vá para https://vercel.com/dashboard
   - Selecione seu projeto

2. **Adicione o Domínio:**

   - Vá em **Settings** > **Domains**
   - Clique em **Add Domain**
   - Digite seu domínio (ex: `eduardo-nowakoski-dev.com`)
   - Clique em **Add**

3. **Configure DNS:**

   A Vercel fornecerá instruções específicas. Geralmente você precisa:

   **Para domínio raiz (eduardo-nowakoski-dev.com):**

   - Tipo: `A`
   - Nome: `@` ou deixe em branco
   - Valor: `76.76.21.21` (IP da Vercel - verifique na interface)

   **Para subdomínio www (www.eduardo-nowakoski-dev.com):**

   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `cname.vercel-dns.com`

   **OU use apenas CNAME (mais fácil):**

   - Tipo: `CNAME`
   - Nome: `@`
   - Valor: `cname.vercel-dns.com` (alguns registradores permitem)

#### Passo 3: Configurar no Registrador de Domínio

**Exemplo para Namecheap:**

1. Acesse seu painel no Namecheap
2. Vá em **Domain List** > Selecione seu domínio > **Advanced DNS**
3. Adicione os registros conforme instruções da Vercel:

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Exemplo para Registro.br (.br):**

1. Acesse https://registro.br
2. Vá em **Meus Domínios** > Selecione o domínio
3. Configure os registros DNS conforme instruções da Vercel

#### Passo 4: Aguardar Propagação DNS

- Pode levar de alguns minutos até 48 horas
- Normalmente leva 1-2 horas
- Verifique o status na Vercel (Settings > Domains)
- Use ferramentas como https://dnschecker.org para verificar propagação

#### Passo 5: Configurar HTTPS (Automático)

- A Vercel configura SSL/HTTPS automaticamente via Let's Encrypt
- Pode levar alguns minutos após o DNS propagar
- Você verá um certificado válido automaticamente

#### Passo 6: Redirecionar www para domínio raiz (Opcional)

Na Vercel, você pode configurar:

- `eduardo-nowakoski-dev.com` → principal
- `www.eduardo-nowakoski-dev.com` → redireciona para o domínio raiz

### Opção 3: Usar Domínio Existente

Se você já tem um domínio:

1. Siga os mesmos passos da Opção 2
2. Configure os registros DNS no seu registrador atual
3. A Vercel detectará automaticamente

### Verificação e Troubleshooting

**Verificar se está funcionando:**

```bash
# Verificar DNS
nslookup eduardo-nowakoski-dev.com

# Verificar SSL
curl -I https://eduardo-nowakoski-dev.com
```

**Problemas comuns:**

1. **DNS não propagou:**

   - Aguarde mais tempo (até 48h)
   - Verifique se os registros estão corretos
   - Limpe cache DNS: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

2. **HTTPS não funciona:**

   - Aguarde alguns minutos após DNS propagar
   - Verifique se o domínio está adicionado corretamente na Vercel

3. **Erro de certificado:**
   - A Vercel renova automaticamente
   - Se persistir, remova e readicione o domínio

### Custos

- **Vercel:** Gratuito para domínios customizados
- **Domínio:** ~$10-15/ano (varia por extensão)
- **SSL/HTTPS:** Gratuito (Let's Encrypt via Vercel)

**Analytics (Opcional):**

- Habilite Vercel Analytics em Settings > Analytics

## Netlify

### Deploy Manual

1. **Build Settings:**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Deploy:**
   - Arraste a pasta do projeto ou conecte Git
   - Netlify detecta Next.js automaticamente

### Netlify.toml (Opcional)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## GitHub Pages

**Nota:** GitHub Pages não suporta Next.js SSR nativamente. Use export estático:

1. **Adicione ao `next.config.js`:**

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. **Build e Deploy:**

```bash
npm run build
# Deploy da pasta 'out'
```

## Docker (Opcional)

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Build e Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Checklist Pré-Deploy

- [ ] Testar build local: `npm run build`
- [ ] Verificar erros de TypeScript: `npm run type-check`
- [ ] Verificar lint: `npm run lint`
- [ ] Testar em diferentes navegadores
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar dark/light mode
- [ ] Testar troca de idioma
- [ ] Verificar links e navegação
- [ ] Testar performance (Lighthouse)
- [ ] Verificar acessibilidade (Lighthouse)

## Otimizações Pós-Deploy

### Performance

1. **Lighthouse Audit:**

   - Execute no Chrome DevTools
   - Almeje 90+ em todas as métricas

2. **Image Optimization:**

   - Use formato WebP/AVIF
   - Lazy loading automático (Next.js)

3. **Font Optimization:**
   - Já otimizado via Next.js Font

### SEO

1. **Google Search Console:**

   - Adicione propriedade
   - Submeta sitemap (se criado)

2. **Open Graph:**

   - Já implementado
   - Teste com [ogp.me](https://ogp.me/)

3. **Structured Data:**
   - Pode adicionar JSON-LD se necessário

## Troubleshooting

### Build Fails

**Erro:** Module not found

- Solução: `rm -rf node_modules .next && npm install`

**Erro:** TypeScript errors

- Solução: `npm run type-check` e corrigir erros

**Erro:** ESLint errors

- Solução: `npm run lint` e corrigir erros

### Runtime Errors

**Erro:** Hydration mismatch

- Verificar `suppressHydrationWarning` no layout
- Verificar uso de `useEffect` para estado client-side

**Erro:** Theme not working

- Verificar `ThemeProvider` no layout
- Verificar `next-themes` instalado

## Monitoramento

### Recomendações

1. **Vercel Analytics:** Built-in, gratuito
2. **Google Analytics:** Adicionar se necessário
3. **Sentry:** Para error tracking (opcional)
4. **Uptime Monitoring:** UptimeRobot ou similar

## Backup

- Código: Git repository
- Configurações: Documentadas no README
- Deploy: Automático via Git

---

**Recomendação Final:** Use Vercel para melhor experiência e integração com Next.js.
