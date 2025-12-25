# Guia Rápido: Configurar Domínio Customizado

Este guia mostra como configurar um domínio customizado como `eduardo-nowakoski-dev.com` para seu portfólio.

## 🎯 Passo a Passo Completo

### 1️⃣ Comprar o Domínio

**Onde comprar:**

- **Namecheap** (recomendado): https://www.namecheap.com (~$10-15/ano)
- **Google Domains**: https://domains.google
- **GoDaddy**: https://www.godaddy.com
- **Registro.br**: https://registro.br (para domínios .br)

**Sugestões de domínios:**

- `eduardo-nowakoski-dev.com`
- `eduardo-nowakoski.com`
- `nowakoski.dev`
- `eduardo-nowakoski.tech`

### 2️⃣ Fazer Deploy na Vercel (se ainda não fez)

1. Acesse https://vercel.com
2. Faça login com GitHub/GitLab/Bitbucket
3. Clique em **"New Project"**
4. Importe seu repositório
5. Clique em **"Deploy"**
6. Aguarde o deploy completar

Você terá um domínio temporário: `seu-projeto.vercel.app`

### 3️⃣ Adicionar Domínio na Vercel

1. No dashboard da Vercel, selecione seu projeto
2. Vá em **Settings** (⚙️) no topo
3. Clique em **Domains** no menu lateral
4. Clique em **Add Domain**
5. Digite seu domínio: `eduardo-nowakoski-dev.com`
6. Clique em **Add**

### 4️⃣ Configurar DNS no Registrador

A Vercel mostrará instruções específicas. Aqui está o que você precisa fazer:

#### Para Namecheap:

1. Acesse https://ap.www.namecheap.com/domains/list/
2. Clique em **Manage** ao lado do seu domínio
3. Vá na aba **Advanced DNS**
4. Adicione os seguintes registros:

**Registro 1 - Domínio raiz:**

```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic (ou 30 min)
```

**Registro 2 - Subdomínio www:**

```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic (ou 30 min)
```

5. Clique em **Save All Changes**

#### Para Google Domains:

1. Acesse https://domains.google.com
2. Selecione seu domínio
3. Vá em **DNS**
4. Adicione os registros conforme instruções da Vercel

#### Para Registro.br (.br):

1. Acesse https://registro.br
2. Faça login
3. Vá em **Meus Domínios**
4. Clique no domínio
5. Vá em **DNS**
6. Adicione os registros conforme instruções da Vercel

### 5️⃣ Aguardar Propagação DNS

- ⏱️ Pode levar de **15 minutos até 48 horas**
- Normalmente leva **1-2 horas**
- Você pode verificar o status na Vercel (Settings > Domains)

**Verificar propagação:**

- Use https://dnschecker.org
- Digite seu domínio e verifique se os registros estão corretos

### 6️⃣ Verificar HTTPS (Automático)

- ✅ A Vercel configura SSL/HTTPS automaticamente
- ✅ Certificado Let's Encrypt gratuito
- ⏱️ Pode levar alguns minutos após DNS propagar
- 🔒 Você verá o cadeado verde no navegador

### 7️⃣ Testar

1. Abra https://eduardo-nowakoski-dev.com no navegador
2. Deve carregar seu portfólio
3. Verifique se o HTTPS está funcionando (cadeado verde)

## 🔧 Configurações Adicionais

### Redirecionar www para domínio raiz

Na Vercel (Settings > Domains), você pode configurar:

- `eduardo-nowakoski-dev.com` → principal
- `www.eduardo-nowakoski-dev.com` → redireciona para o domínio raiz

### Adicionar múltiplos domínios

Você pode adicionar vários domínios:

- `eduardo-nowakoski-dev.com`
- `eduardo-nowakoski.com`
- `nowakoski.dev`

Todos apontarão para o mesmo site.

## ❌ Troubleshooting

### DNS não propagou

**Sintomas:**

- Domínio não carrega
- Erro "DNS_PROBE_FINISHED_NXDOMAIN"

**Soluções:**

1. Aguarde mais tempo (até 48h)
2. Verifique se os registros DNS estão corretos
3. Limpe cache DNS:
   - **Windows:** `ipconfig /flushdns`
   - **Mac:** `sudo dscacheutil -flushcache`
   - **Linux:** `sudo systemd-resolve --flush-caches`

### HTTPS não funciona

**Sintomas:**

- Site carrega mas sem HTTPS
- Erro de certificado

**Soluções:**

1. Aguarde alguns minutos (Vercel precisa gerar certificado)
2. Verifique se o domínio está adicionado corretamente na Vercel
3. Se persistir, remova e readicione o domínio na Vercel

### Erro 404 ou domínio não encontrado

**Soluções:**

1. Verifique se o DNS propagou: https://dnschecker.org
2. Verifique se o domínio está adicionado na Vercel
3. Verifique se os registros DNS estão corretos
4. Aguarde mais tempo para propagação

## 📊 Verificar Status

### Na Vercel:

- Settings > Domains > Veja o status do domínio
- ✅ Verde = Configurado e funcionando
- ⚠️ Amarelo = Aguardando configuração DNS
- ❌ Vermelho = Erro na configuração

### Ferramentas úteis:

- **DNS Checker:** https://dnschecker.org
- **SSL Checker:** https://www.ssllabs.com/ssltest/
- **Ping:** `ping eduardo-nowakoski-dev.com`

## 💰 Custos

- **Vercel:** ✅ Gratuito (inclui domínios customizados)
- **Domínio:** ~$10-15/ano (varia por extensão)
- **SSL/HTTPS:** ✅ Gratuito (Let's Encrypt via Vercel)
- **CDN:** ✅ Gratuito (incluído na Vercel)

## ✅ Checklist Final

- [ ] Domínio comprado
- [ ] Projeto deployado na Vercel
- [ ] Domínio adicionado na Vercel
- [ ] Registros DNS configurados no registrador
- [ ] DNS propagado (verificado em dnschecker.org)
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Site carregando corretamente
- [ ] www redirecionando para domínio raiz (opcional)

## 🎉 Pronto!

Seu portfólio estará disponível em:

- ✅ https://eduardo-nowakoski-dev.com
- ✅ https://www.eduardo-nowakoski-dev.com (se configurado)

---

**Dúvidas?** Consulte a documentação oficial:

- Vercel Domains: https://vercel.com/docs/concepts/projects/domains
- Suporte Vercel: https://vercel.com/support
