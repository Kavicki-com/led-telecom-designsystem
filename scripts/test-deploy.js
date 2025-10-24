#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testando deploy do Storybook para GitHub Pages...');
console.log('📁 Repositório: Kavicki-com/led-telecom-designsystem');
console.log('🌐 URL final: https://kavicki-com.github.io/led-telecom-designsystem');
console.log('');

try {
    // 1. Verificar se estamos no diretório correto
    if (!fs.existsSync('package.json')) {
        throw new Error('Execute este script na raiz do projeto!');
    }

    // 2. Verificar se o Storybook está configurado
    if (!fs.existsSync('.storybook')) {
        throw new Error('Configuração do Storybook não encontrada!');
    }

    // 3. Limpar build anterior
    console.log('🧹 Limpando build anterior...');
    if (fs.existsSync('storybook-static')) {
        fs.rmSync('storybook-static', { recursive: true, force: true });
    }

    // 4. Instalar dependências
    console.log('📦 Instalando dependências...');
    execSync('npm ci', { stdio: 'inherit' });

    // 5. Build do Storybook
    console.log('🔨 Fazendo build do Storybook...');
    execSync('npm run build-storybook', { stdio: 'inherit' });

    // 6. Verificar se o build foi criado
    if (!fs.existsSync('storybook-static')) {
        throw new Error('Build do Storybook não foi criado!');
    }

    // 7. Verificar arquivos essenciais
    const essentialFiles = ['index.html', 'iframe.html'];
    for (const file of essentialFiles) {
        if (!fs.existsSync(path.join('storybook-static', file))) {
            throw new Error(`Arquivo essencial não encontrado: ${file}`);
        }
    }

    // 8. Mostrar informações do build
    const buildSize = getDirectorySize('storybook-static');
    console.log('✅ Build do Storybook concluído com sucesso!');
    console.log(`📊 Tamanho do build: ${buildSize}`);
    console.log('📁 Arquivos gerados em: ./storybook-static');
    console.log('');
    console.log('🚀 Próximos passos:');
    console.log('1. Faça commit e push dos arquivos:');
    console.log('   git add .');
    console.log('   git commit -m "Deploy Storybook"');
    console.log('   git push origin main');
    console.log('');
    console.log('2. Configure GitHub Pages:');
    console.log('   - Acesse: https://github.com/Kavicki-com/led-telecom-designsystem/settings/pages');
    console.log('   - Source: GitHub Actions');
    console.log('   - Aguarde o deploy automático');
    console.log('');
    console.log('3. Acesse seu Storybook em:');
    console.log('   https://kavicki-com.github.io/led-telecom-designsystem');

} catch (error) {
    console.error('❌ Erro durante o teste:', error.message);
    console.log('');
    console.log('🔧 Soluções possíveis:');
    console.log('- Verifique se todas as dependências estão instaladas');
    console.log('- Execute: npm install');
    console.log('- Verifique se o Storybook está configurado corretamente');
    process.exit(1);
}

function getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            totalSize += getDirectorySize(filePath);
        } else {
            totalSize += stats.size;
        }
    }

    return formatBytes(totalSize);
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
