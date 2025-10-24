"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCSSVariables = generateCSSVariables;
exports.generateFullCSS = generateFullCSS;
exports.getCSSVariable = getCSSVariable;
const tokens_1 = require("./tokens");
/**
 * Utilitários para geração de CSS com variáveis customizadas
 */
/**
 * Converte um objeto de tokens em variáveis CSS
 * @param tokens - Objeto com tokens
 * @param prefix - Prefixo para as variáveis CSS (padrão: 'led')
 * @returns String com as variáveis CSS
 */
function generateCSSVariables(tokens, prefix = 'led') {
    let css = '';
    function processObject(obj, currentPath = '') {
        for (const [key, value] of Object.entries(obj)) {
            const cssVarName = currentPath ? `${currentPath}-${key}` : key;
            if (typeof value === 'object' && value !== null) {
                processObject(value, cssVarName);
            }
            else {
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
/**
 * Gera CSS completo com variáveis customizadas
 * @param prefix - Prefixo para as variáveis CSS
 * @returns String com CSS completo
 */
function generateFullCSS(prefix = 'led') {
    const variables = generateCSSVariables(tokens_1.designTokens, prefix);
    return `:root {
${variables}
}

/* Utilitários de cores */
.led-surface-primary { background-color: var(--${prefix}-surface-primary); }
.led-surface-standard { background-color: var(--${prefix}-surface-standard); }
.led-surface-grey { background-color: var(--${prefix}-surface-grey); }
.led-surface-primary-light { background-color: var(--${prefix}-surface-primary-light); }
.led-surface-secondary { background-color: var(--${prefix}-surface-secondary); }
.led-surface-secondary-light { background-color: var(--${prefix}-surface-secondary-light); }
.led-surface-error { background-color: var(--${prefix}-surface-error); }
.led-surface-error-light { background-color: var(--${prefix}-surface-error-light); }
.led-surface-sucess { background-color: var(--${prefix}-surface-sucess); }
.led-surface-sucess-light { background-color: var(--${prefix}-surface-sucess-light); }
.led-surface-warning { background-color: var(--${prefix}-surface-warning); }
.led-surface-warning-light { background-color: var(--${prefix}-surface-warning-light); }
.led-surface-info { background-color: var(--${prefix}-surface-info); }
.led-surface-info-light { background-color: var(--${prefix}-surface-info-light); }
.led-surface-hover { background-color: var(--${prefix}-surface-hover); }

/* Utilitários de texto */
.led-text-primary { color: var(--${prefix}-content-primary); }
.led-text-secondary { color: var(--${prefix}-content-secondary); }
.led-text-error { color: var(--${prefix}-content-error); }
.led-text-sucess { color: var(--${prefix}-content-sucess); }
.led-text-warning { color: var(--${prefix}-content-warning); }
.led-text-info { color: var(--${prefix}-content-info); }
.led-text-dark { color: var(--${prefix}-content-dark); }
.led-text-light { color: var(--${prefix}-content-light); }
.led-text-disable { color: var(--${prefix}-content-disable); }

/* Utilitários de espaçamento */
.led-p-xs { padding: var(--${prefix}-padding-xs); }
.led-p-s { padding: var(--${prefix}-padding-s); }
.led-p-sm { padding: var(--${prefix}-padding-sm); }
.led-p-m { padding: var(--${prefix}-padding-m); }
.led-p-ml { padding: var(--${prefix}-padding-ml); }
.led-p-l { padding: var(--${prefix}-padding-l); }
.led-p-xl { padding: var(--${prefix}-padding-xl); }
.led-p-2xl { padding: var(--${prefix}-padding-2xl); }

.led-m-xs { margin: var(--${prefix}-margin-xs); }
.led-m-s { margin: var(--${prefix}-margin-s); }
.led-m-sm { margin: var(--${prefix}-margin-sm); }
.led-m-m { margin: var(--${prefix}-margin-m); }
.led-m-ml { margin: var(--${prefix}-margin-ml); }
.led-m-l { margin: var(--${prefix}-margin-l); }
.led-m-xl { margin: var(--${prefix}-margin-xl); }

.led-gap-xs { gap: var(--${prefix}-gap-xs); }
.led-gap-s { gap: var(--${prefix}-gap-s); }
.led-gap-sm { gap: var(--${prefix}-gap-sm); }
.led-gap-m { gap: var(--${prefix}-gap-m); }
.led-gap-l { gap: var(--${prefix}-gap-l); }
.led-gap-xl { gap: var(--${prefix}-gap-xl); }
.led-gap-2xl { gap: var(--${prefix}-gap-2xl); }

/* Utilitários de borda */
.led-border-s { border-width: var(--${prefix}-border-size-s); }
.led-border-m { border-width: var(--${prefix}-border-size-m); }
.led-border-l { border-width: var(--${prefix}-border-size-l); }

.led-radius-s { border-radius: var(--${prefix}-border-radius-s); }
.led-radius-m { border-radius: var(--${prefix}-border-radius-m); }
.led-radius-l { border-radius: var(--${prefix}-border-radius-l); }

/* Utilitários de tipografia */
.led-font-title { font-family: var(--${prefix}-typography-family-title); }
.led-font-body { font-family: var(--${prefix}-typography-family-body); }

.led-text-s { font-size: var(--${prefix}-typography-size-s); }
.led-text-sm { font-size: var(--${prefix}-typography-size-sm); }
.led-text-ms { font-size: var(--${prefix}-typography-size-ms); }
.led-text-m { font-size: var(--${prefix}-typography-size-m); }
.led-text-ml { font-size: var(--${prefix}-typography-size-ml); }
.led-text-l { font-size: var(--${prefix}-typography-size-l); }
.led-text-xl { font-size: var(--${prefix}-typography-size-xl); }
.led-text-2xl { font-size: var(--${prefix}-typography-size-2xl); }

.led-weight-light { font-weight: var(--${prefix}-typography-weight-light); }
.led-weight-medium { font-weight: var(--${prefix}-typography-weight-medium); }
.led-weight-regular { font-weight: var(--${prefix}-typography-weight-regular); }
.led-weight-bold { font-weight: var(--${prefix}-typography-weight-bold); }
`;
}
/**
 * Função para obter uma variável CSS específica
 * @param path - Caminho para a variável (ex: 'surface.primary')
 * @param prefix - Prefixo para a variável CSS
 * @returns Nome da variável CSS
 */
function getCSSVariable(path, prefix = 'led') {
    return `var(--${prefix}-${path.replace(/\./g, '-')})`;
}
//# sourceMappingURL=css-utils.js.map