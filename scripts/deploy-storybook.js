#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando deploy do Storybook...');

try {
    // 1. Limpar build anterior
    console.log('🧹 Limpando build anterior...');
    if (fs.existsSync('storybook-static')) {
        fs.rmSync('storybook-static', { recursive: true, force: true });
    }

    // 2. Build do Storybook
    console.log('📦 Fazendo build do Storybook...');
    execSync('npm run build-storybook', { stdio: 'inherit' });

    // 3. Verificar se o build foi criado
    if (!fs.existsSync('storybook-static')) {
        throw new Error('Build do Storybook não foi criado!');
    }

    console.log('✅ Build do Storybook concluído com sucesso!');
    console.log('📁 Arquivos gerados em: ./storybook-static');
    console.log('');
    console.log('🌐 Para fazer deploy:');
    console.log('1. Faça commit dos arquivos: git add . && git commit -m "Deploy Storybook"');
    console.log('2. Push para o repositório: git push origin main');
    console.log('3. O GitHub Actions fará o deploy automaticamente');
    console.log('4. Acesse: https://led-telecom.github.io/design-tokens');
    console.log('');
    console.log('📋 Checklist do GitHub Pages:');
    console.log('- ✅ Repositório público');
    console.log('- ✅ GitHub Pages habilitado (Settings > Pages)');
    console.log('- ✅ Source: GitHub Actions');
    console.log('- ✅ Workflow: .github/workflows/deploy-storybook.yml');

} catch (error) {
    console.error('❌ Erro durante o deploy:', error.message);
    process.exit(1);
}
