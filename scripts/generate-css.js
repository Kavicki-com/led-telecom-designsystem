const fs = require('fs');
const path = require('path');

/**
 * Script para gerar arquivos CSS a partir dos tokens
 */

// Função para gerar CSS com variáveis customizadas
function generateCSSVariables(tokens, prefix = 'led') {
  let css = '';
  
  function processObject(obj, currentPath = '') {
    for (const [key, value] of Object.entries(obj)) {
      const cssVarName = currentPath ? `${currentPath}-${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        processObject(value, cssVarName);
      } else {
        const cssValue = typeof value === 'string' && value.includes('px') 
          ? value 
          : typeof value === 'string' && value.includes('#')
          ? value
          : `${value}px`;
        
        css += `  --${prefix}-${cssVarName}: ${cssValue};\n`;
      }
    }
  }
  
  processObject(tokens);
  return css;
}

// Carregar tokens
const tokensPath = path.join(__dirname, '../tokens/tokens.json');
const typographyPath = path.join(__dirname, '../tokens/typo.json');

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
const typography = JSON.parse(fs.readFileSync(typographyPath, 'utf8'));

// Combinar tokens
const allTokens = {
  ...tokens,
  typography
};

// Gerar CSS
const variables = generateCSSVariables(allTokens);

const fullCSS = `:root {
${variables}
}

/* Utilitários de cores */
.led-surface-primary { background-color: var(--led-surface-primary); }
.led-surface-standard { background-color: var(--led-surface-standard); }
.led-surface-grey { background-color: var(--led-surface-grey); }
.led-surface-primary-light { background-color: var(--led-surface-primary-light); }
.led-surface-secondary { background-color: var(--led-surface-secondary); }
.led-surface-secondary-light { background-color: var(--led-surface-secondary-light); }
.led-surface-error { background-color: var(--led-surface-error); }
.led-surface-error-light { background-color: var(--led-surface-error-light); }
.led-surface-sucess { background-color: var(--led-surface-sucess); }
.led-surface-sucess-light { background-color: var(--led-surface-sucess-light); }
.led-surface-warning { background-color: var(--led-surface-warning); }
.led-surface-warning-light { background-color: var(--led-surface-warning-light); }
.led-surface-info { background-color: var(--led-surface-info); }
.led-surface-info-light { background-color: var(--led-surface-info-light); }
.led-surface-hover { background-color: var(--led-surface-hover); }

/* Utilitários de texto */
.led-text-primary { color: var(--led-content-primary); }
.led-text-secondary { color: var(--led-content-secondary); }
.led-text-error { color: var(--led-content-error); }
.led-text-sucess { color: var(--led-content-sucess); }
.led-text-warning { color: var(--led-content-warning); }
.led-text-info { color: var(--led-content-info); }
.led-text-dark { color: var(--led-content-dark); }
.led-text-light { color: var(--led-content-light); }
.led-text-disable { color: var(--led-content-disable); }

/* Utilitários de espaçamento */
.led-p-xs { padding: var(--led-padding-xs); }
.led-p-s { padding: var(--led-padding-s); }
.led-p-sm { padding: var(--led-padding-sm); }
.led-p-m { padding: var(--led-padding-m); }
.led-p-ml { padding: var(--led-padding-ml); }
.led-p-l { padding: var(--led-padding-l); }
.led-p-xl { padding: var(--led-padding-xl); }
.led-p-2xl { padding: var(--led-padding-2xl); }

.led-m-xs { margin: var(--led-margin-xs); }
.led-m-s { margin: var(--led-margin-s); }
.led-m-sm { margin: var(--led-margin-sm); }
.led-m-m { margin: var(--led-margin-m); }
.led-m-ml { margin: var(--led-margin-ml); }
.led-m-l { margin: var(--led-margin-l); }
.led-m-xl { margin: var(--led-margin-xl); }

.led-gap-xs { gap: var(--led-gap-xs); }
.led-gap-s { gap: var(--led-gap-s); }
.led-gap-sm { gap: var(--led-gap-sm); }
.led-gap-m { gap: var(--led-gap-m); }
.led-gap-l { gap: var(--led-gap-l); }
.led-gap-xl { gap: var(--led-gap-xl); }
.led-gap-2xl { gap: var(--led-gap-2xl); }

/* Utilitários de borda */
.led-border-s { border-width: var(--led-border-size-s); }
.led-border-m { border-width: var(--led-border-size-m); }
.led-border-l { border-width: var(--led-border-size-l); }

.led-radius-s { border-radius: var(--led-border-radius-s); }
.led-radius-m { border-radius: var(--led-border-radius-m); }
.led-radius-l { border-radius: var(--led-border-radius-l); }

/* Utilitários de tipografia */
.led-font-title { font-family: var(--led-typography-family-title); }
.led-font-body { font-family: var(--led-typography-family-body); }

.led-text-s { font-size: var(--led-typography-size-s); }
.led-text-sm { font-size: var(--led-typography-size-sm); }
.led-text-ms { font-size: var(--led-typography-size-ms); }
.led-text-m { font-size: var(--led-typography-size-m); }
.led-text-ml { font-size: var(--led-typography-size-ml); }
.led-text-l { font-size: var(--led-typography-size-l); }
.led-text-xl { font-size: var(--led-typography-size-xl); }
.led-text-2xl { font-size: var(--led-typography-size-2xl); }

.led-weight-light { font-weight: var(--led-typography-weight-light); }
.led-weight-medium { font-weight: var(--led-typography-weight-medium); }
.led-weight-regular { font-weight: var(--led-typography-weight-regular); }
.led-weight-bold { font-weight: var(--led-typography-weight-bold); }
`;

// Criar diretório css se não existir
const cssDir = path.join(__dirname, '../css');
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

// Salvar arquivo CSS
const cssPath = path.join(cssDir, 'tokens.css');
fs.writeFileSync(cssPath, fullCSS);

// Gerar versão minificada
const minifiedCSS = fullCSS.replace(/\s+/g, ' ').trim();
const minifiedPath = path.join(cssDir, 'tokens.min.css');
fs.writeFileSync(minifiedPath, minifiedCSS);

console.log('✅ Arquivos CSS gerados com sucesso!');
console.log(`📁 CSS: ${cssPath}`);
console.log(`📁 CSS Minificado: ${minifiedPath}`);
