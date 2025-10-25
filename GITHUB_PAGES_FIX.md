# 🔧 Correção do GitHub Pages - Storybook

## ✅ Problemas Identificados e Corrigidos

### 1. **Dependências Dessincronizadas**
- **Problema**: `package-lock.json` estava dessincronizado com `package.json`
- **Solução**: Reinstalação das dependências com `npm install`

### 2. **Falta do arquivo `.nojekyll`**
- **Problema**: GitHub Pages ignorava arquivos que começam com `_`
- **Solução**: Criado arquivo `.nojekyll` na raiz do projeto

### 3. **Configuração Incorreta do Repositório**
- **Problema**: Inconsistência entre repositórios nos arquivos de configuração
- **Solução**: Atualizado `.github/pages.yml` para usar o repositório correto

### 4. **Configuração do Storybook para GitHub Pages**
- **Problema**: Storybook não estava configurado para funcionar em subdiretórios
- **Solução**: Adicionada configuração `managerHead` no `.storybook/main.ts`

## 🚀 Como Fazer o Deploy

### **Opção 1: Deploy Automático (Recomendado)**

1. **Configure o GitHub Pages:**
   - Acesse o repositório no GitHub
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione **GitHub Actions**

2. **Faça commit e push:**
   ```bash
   git add .
   git commit -m "Fix GitHub Pages Storybook deploy"
   git push origin main
   ```

3. **Verifique o deploy:**
   - Acesse **Actions** tab no GitHub
   - Aguarde o workflow `Deploy Storybook to GitHub Pages` completar
   - Acesse: `https://led-telecom.github.io/design-tokens`

### **Opção 2: Deploy Manual**

```bash
# 1. Build do Storybook
npm run build-storybook

# 2. Commit dos arquivos
git add storybook-static/
git commit -m "Deploy Storybook"

# 3. Push para o repositório
git push origin main
```

## 📋 Checklist de Verificação

### **No GitHub:**
- [ ] Repositório é público
- [ ] GitHub Pages está habilitado (Settings > Pages)
- [ ] Source está configurado como "GitHub Actions"
- [ ] Workflow `.github/workflows/deploy-storybook.yml` existe
- [ ] Branch `gh-pages` foi criada automaticamente

### **No Projeto:**
- [ ] Arquivo `.nojekyll` existe na raiz
- [ ] Pasta `storybook-static/` é gerada após build
- [ ] Configuração do Storybook está correta
- [ ] Dependências estão sincronizadas

## 🔍 Troubleshooting

### **Erro: "Build failed"**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build-storybook
```

### **Erro: "GitHub Pages not found"**
1. Verifique se o repositório é público
2. Confirme se GitHub Pages está habilitado
3. Aguarde alguns minutos para propagação
4. Verifique se o workflow foi executado com sucesso

### **Erro: "404 Not Found"**
1. Verifique se o arquivo `.nojekyll` existe
2. Confirme se a pasta `storybook-static/` foi commitada
3. Verifique se o base href está correto no Storybook

### **Erro: "Workflow failed"**
1. Verifique os logs em **Actions** tab
2. Confirme se todas as dependências estão instaladas
3. Verifique se o token `GITHUB_TOKEN` tem permissões

## 📊 Monitoramento

- **Status do Deploy**: GitHub > Actions
- **Logs**: Clique no workflow para ver detalhes
- **URL do Storybook**: `https://led-telecom.github.io/design-tokens`

## 🔄 Atualizações Automáticas

O Storybook será atualizado automaticamente a cada:
- Push na branch `main`
- Merge de Pull Requests
- Atualizações nos componentes

## 📞 Suporte

Para problemas com deploy:
1. Verifique os logs do GitHub Actions
2. Confirme se o build local funciona: `npm run build-storybook`
3. Abra uma issue no repositório
4. Verifique se todas as configurações estão corretas

---

**Status**: ✅ Problemas identificados e corrigidos
**Próximo passo**: Fazer commit e push para ativar o deploy automático
