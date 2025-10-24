/**
 * Utilitários para geração de CSS com variáveis customizadas
 */
/**
 * Converte um objeto de tokens em variáveis CSS
 * @param tokens - Objeto com tokens
 * @param prefix - Prefixo para as variáveis CSS (padrão: 'led')
 * @returns String com as variáveis CSS
 */
export declare function generateCSSVariables(tokens: any, prefix?: string): string;
/**
 * Gera CSS completo com variáveis customizadas
 * @param prefix - Prefixo para as variáveis CSS
 * @returns String com CSS completo
 */
export declare function generateFullCSS(prefix?: string): string;
/**
 * Função para obter uma variável CSS específica
 * @param path - Caminho para a variável (ex: 'surface.primary')
 * @param prefix - Prefixo para a variável CSS
 * @returns Nome da variável CSS
 */
export declare function getCSSVariable(path: string, prefix?: string): string;
//# sourceMappingURL=css-utils.d.ts.map