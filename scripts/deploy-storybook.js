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
    console.log('🌐 Para fazer deploy manual:');
    console.log('1. Faça commit dos arquivos em storybook-static/');
    console.log('2. Configure GitHub Pages para usar a pasta storybook-static');
    console.log('3. Ou use o workflow automático do GitHub Actions');

} catch (error) {
    console.error('❌ Erro durante o deploy:', error.message);
    process.exit(1);
}
