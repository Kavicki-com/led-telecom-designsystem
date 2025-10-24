import { DesignTokens } from './types';
/**
 * Tokens de design do LED Telecom
 * Baseados nos arquivos JSON de tokens
 */
export declare const designTokens: DesignTokens;
/**
 * Função para obter um token específico
 * @param category - Categoria do token (surface, border, etc.)
 * @param key - Chave do token (pode ser aninhada como 'radius.m')
 * @returns Valor do token
 */
export declare function getToken(category: keyof DesignTokens, key: string): string;
/**
 * Função para obter todos os tokens de uma categoria
 * @param category - Categoria do token
 * @returns Objeto com todos os tokens da categoria
 */
export declare function getTokensByCategory(category: keyof DesignTokens): any;
/**
 * Função para obter todos os tokens
 * @returns Objeto completo com todos os tokens
 */
export declare function getAllTokens(): DesignTokens;
//# sourceMappingURL=tokens.d.ts.map