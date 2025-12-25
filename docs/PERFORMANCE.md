# Performance e Lighthouse

## Problema com bfcache em Desenvolvimento

O Lighthouse está reportando erros relacionados ao **bfcache (back/forward cache)** quando executado em modo de desenvolvimento (`localhost:3000`).

### Por que isso acontece?

1. **WebSocket do Next.js**: Em modo de desenvolvimento, o Next.js usa WebSockets para Hot Module Replacement (HMR). O uso de WebSockets **impede automaticamente o bfcache** por questões de segurança e consistência.

2. **Cache-Control**: Alguns recursos podem ter `cache-control: no-store` em desenvolvimento para garantir que as mudanças sejam sempre refletidas.

### Solução

**⚠️ IMPORTANTE**: O bfcache **não funciona em modo de desenvolvimento**. Para obter métricas precisas do Lighthouse:

1. **Build de produção**:
   ```bash
   npm run build
   npm start
   ```

2. **Ou teste em ambiente de produção** (ex: Vercel preview/production)

3. **Ou use modo estático**:
   ```bash
   npm run build
   npx serve out
   ```

### Otimizações Implementadas

1. **Headers de Cache**: Configurados no `next.config.js` para recursos estáticos
2. **Otimização de CSS**: Habilitada no Next.js
3. **Imagens**: Configuradas para usar formatos modernos (AVIF, WebP)

### Métricas Esperadas em Produção

- ✅ **First Contentful Paint**: < 1.8s
- ✅ **Largest Contentful Paint**: < 2.5s
- ✅ **Total Blocking Time**: < 200ms
- ✅ **Cumulative Layout Shift**: < 0.1
- ✅ **Speed Index**: < 3.4s

### Nota sobre bfcache

O bfcache é uma otimização do navegador que permite que páginas sejam restauradas instantaneamente quando o usuário navega para frente/trás. Em desenvolvimento, isso é intencionalmente desabilitado pelo Next.js para garantir que as mudanças sejam sempre refletidas.

**Em produção, o bfcache funcionará normalmente** desde que:
- Não haja WebSockets ativos
- Os recursos tenham headers de cache apropriados
- Não haja listeners de eventos que impeçam o bfcache

