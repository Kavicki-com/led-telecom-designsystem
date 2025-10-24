const { exec } = require('child_process');

console.log('Testando configuração do Storybook...');

// Verificar se os arquivos de configuração existem
const fs = require('fs');
const path = require('path');

const requiredFiles = [
    '.storybook/main.ts',
    '.storybook/preview.ts',
    'src/components/ContainedButton.stories.tsx',
    'src/tokens/Tokens.stories.tsx'
];

console.log('Verificando arquivos necessários:');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - FALTANDO`);
    }
});

// Verificar dependências
console.log('\nVerificando dependências do Storybook:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const devDeps = packageJson.devDependencies || {};

const storybookDeps = [
    '@storybook/react',
    '@storybook/react-vite',
    '@storybook/addon-essentials',
    'vite',
    '@vitejs/plugin-react'
];

storybookDeps.forEach(dep => {
    if (devDeps[dep]) {
        console.log(`✅ ${dep} - ${devDeps[dep]}`);
    } else {
        console.log(`❌ ${dep} - FALTANDO`);
    }
});

console.log('\nConfiguração do Storybook verificada!');
