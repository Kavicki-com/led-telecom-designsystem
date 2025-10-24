import { generateCSSVariables, generateFullCSS, getCSSVariable } from '../css-utils';
import { designTokens } from '../tokens';

describe('CSS Utils', () => {
    describe('generateCSSVariables', () => {
        it('should generate CSS variables for tokens', () => {
            const css = generateCSSVariables(designTokens);
            expect(css).toContain('--led-surface-primary: #1f2453;');
            expect(css).toContain('--led-border-radius-m: 8px;');
            expect(css).toContain('--led-padding-m: 16px;');
        });

        it('should use custom prefix', () => {
            const css = generateCSSVariables(designTokens, 'custom');
            expect(css).toContain('--custom-surface-primary: #1f2453;');
            expect(css).not.toContain('--led-surface-primary: #1f2453;');
        });
    });

    describe('generateFullCSS', () => {
        it('should generate complete CSS with variables and utilities', () => {
            const css = generateFullCSS();
            expect(css).toContain(':root {');
            expect(css).toContain('--led-surface-primary: #1f2453;');
            expect(css).toContain('.led-surface-primary {');
            expect(css).toContain('.led-text-primary {');
            expect(css).toContain('.led-p-m {');
        });

        it('should use custom prefix', () => {
            const css = generateFullCSS('custom');
            expect(css).toContain('--custom-surface-primary: #1f2453;');
            expect(css).toContain('.led-surface-primary { background-color: var(--custom-surface-primary); }');
        });
    });

    describe('getCSSVariable', () => {
        it('should return correct CSS variable name', () => {
            expect(getCSSVariable('surface.primary')).toBe('var(--led-surface-primary)');
            expect(getCSSVariable('border.radius.m')).toBe('var(--led-border-radius-m)');
        });

        it('should use custom prefix', () => {
            expect(getCSSVariable('surface.primary', 'custom')).toBe('var(--custom-surface-primary)');
        });
    });
});
