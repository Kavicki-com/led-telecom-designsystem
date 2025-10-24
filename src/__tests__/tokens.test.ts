import { designTokens, getToken, getTokensByCategory, getAllTokens } from '../tokens';

describe('Design Tokens', () => {
  describe('designTokens', () => {
    it('should have all required categories', () => {
      expect(designTokens).toHaveProperty('surface');
      expect(designTokens).toHaveProperty('border');
      expect(designTokens).toHaveProperty('padding');
      expect(designTokens).toHaveProperty('gap');
      expect(designTokens).toHaveProperty('margin');
      expect(designTokens).toHaveProperty('content');
      expect(designTokens).toHaveProperty('typography');
    });

    it('should have valid surface colors', () => {
      expect(designTokens.surface.primary).toBe('#1f2453');
      expect(designTokens.surface.secondary).toBe('#ffaa00');
      expect(designTokens.surface.error).toBe('#e5102e');
      expect(designTokens.surface.sucess).toBe('#2a613d');
    });

    it('should have valid typography families', () => {
      expect(designTokens.typography.family.title).toBe('Raleway');
      expect(designTokens.typography.family.body).toBe('Montserrat');
    });
  });

  describe('getToken', () => {
    it('should return correct token value', () => {
      expect(getToken('surface', 'primary')).toBe('#1f2453');
      expect(getToken('border', 'radius.m')).toBe('8');
      expect(getToken('padding', 'm')).toBe('16');
    });

    it('should return empty string for non-existent token', () => {
      expect(getToken('surface', 'nonexistent')).toBe('');
    });
  });

  describe('getTokensByCategory', () => {
    it('should return all tokens for a category', () => {
      const surfaceTokens = getTokensByCategory('surface');
      expect(surfaceTokens).toEqual(designTokens.surface);
    });

    it('should return all tokens for typography category', () => {
      const typographyTokens = getTokensByCategory('typography');
      expect(typographyTokens).toEqual(designTokens.typography);
    });
  });

  describe('getAllTokens', () => {
    it('should return all design tokens', () => {
      const allTokens = getAllTokens();
      expect(allTokens).toEqual(designTokens);
    });
  });
});
