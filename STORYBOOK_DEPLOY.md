# 📚 Deploy do Storybook - LED Telecom Design System

Este documento explica como fazer o deploy do Storybook para o GitHub Pages.

## 🚀 Deploy Automático (Recomendado)

### 1. Configurar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O workflow será executado automaticamente a cada push na branch `main`

### 2. Workflow Automático

O arquivo `.github/workflows/deploy-storybook.yml` está configurado para:
- ✅ Buildar o Storybook automaticamente
- ✅ Fazer deploy para GitHub Pages
- ✅ Executar apenas na branch `main`
- ✅ Usar cache do npm para builds mais rápidos

## 🛠️ Deploy Manual

### Opção 1: Usando Script NPM

```bash
# Build e preparar para deploy
npm run deploy-storybook

# Fazer commit dos arquivos gerados
git add storybook-static/
git commit -m "Deploy Storybook"
git push origin main
```

### Opção 2: Deploy Manual Completo

```bash
# 1. Limpar build anterior
rm -rf storybook-static

# 2. Build do Storybook
npm run build-storybook

# 3. Verificar se foi criado
ls -la storybook-static/

# 4. Fazer commit e push
git add storybook-static/
git commit -m "Deploy Storybook v$(date)"
git push origin main
```

## 📁 Estrutura de Arquivos

```
.github/
  workflows/
    deploy-storybook.yml    # Workflow de CI/CD
.storybook/
  manager.js               # Configurações do Storybook
scripts/
  deploy-storybook.js      # Script de deploy local
storybook-static/          # Build estático (gerado automaticamente)
```

## 🔧 Configurações

### GitHub Pages
- **URL**: `https://kavicki-com.github.io/led-telecom-designsystem`
- **Repositório**: `Kavicki-com/led-telecom-designsystem`
- **Branch**: `gh-pages` (criada automaticamente)
- **Pasta**: `storybook-static/`

### Storybook
- **Porta local**: `6006`
- **Build**: `storybook-static/`
- **Configuração**: `.storybook/main.ts`

## 🐛 Troubleshooting

### Erro: "Build failed"
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build-storybook
```

### Erro: "GitHub Pages not found"
1. Verifique se o repositório é público
2. Confirme se GitHub Pages está habilitado
3. Aguarde alguns minutos para propagação

### Erro: "Workflow failed"
1. Verifique os logs em **Actions** tab
2. Confirme se todas as dependências estão instaladas
3. Verifique se o token `GITHUB_TOKEN` tem permissões

## 📊 Monitoramento

- **Status do Deploy**: GitHub > Actions
- **Logs**: Clique no workflow para ver detalhes
- **URL do Storybook**: GitHub > Settings > Pages

## 🔄 Atualizações

O Storybook será atualizado automaticamente a cada:
- Push na branch `main`
- Merge de Pull Requests
- Atualizações nos componentes

## 📞 Suporte

Para problemas com deploy:
1. Verifique os logs do GitHub Actions
2. Confirme se o build local funciona: `npm run build-storybook`
3. Abra uma issue no repositório
