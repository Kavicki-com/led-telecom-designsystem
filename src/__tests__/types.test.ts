import { 
  DesignTokens, 
  SurfaceTokens, 
  BorderTokens, 
  TypographyTokens,
  TokenCategory,
  SurfaceTokenKey 
} from '../types';

describe('Type Definitions', () => {
  it('should have correct SurfaceTokens interface', () => {
    const surface: SurfaceTokens = {
      primary: '#1f2453',
      standard: '#fafafa',
      grey: '#dadada',
      'primary-light': '#9da5e8',
      secondary: '#ffaa00',
      'secondary-light': '#ffefc2',
      error: '#e5102e',
      'error-light': '#fab3bd',
      sucess: '#2a613d',
      'sucess-light': '#98d2ac',
      warning: '#e69900',
      'warning-light': '#ffdd8a',
      info: '#565fcc',
      'info-light': '#9da5e8',
      hover: '#fafafa'
    };
    
    expect(surface.primary).toBe('#1f2453');
    expect(surface.secondary).toBe('#ffaa00');
  });

  it('should have correct BorderTokens interface', () => {
    const border: BorderTokens = {
      size: {
        s: '1',
        m: '2',
        l: '4'
      },
      radius: {
        s: '4',
        m: '8',
        l: '16'
      }
    };
    
    expect(border.size.s).toBe('1');
    expect(border.radius.m).toBe('8');
  });

  it('should have correct TypographyTokens interface', () => {
    const typography: TypographyTokens = {
      family: {
        title: 'Raleway',
        body: 'Montserrat'
      },
      weight: {
        light: 'Light',
        medium: 'Medium',
        regular: 'Regular',
        bold: 'Bold'
      },
      size: {
        s: '8',
        sm: '12',
        ms: '16',
        ml: '20',
        l: '24',
        xl: '28',
        '2xl': '32',
        m: '14'
      }
    };
    
    expect(typography.family.title).toBe('Raleway');
    expect(typography.family.body).toBe('Montserrat');
  });

  it('should have correct TokenCategory type', () => {
    const categories: TokenCategory[] = [
      'surface',
      'border', 
      'padding',
      'gap',
      'margin',
      'content',
      'typography'
    ];
    
    expect(categories).toHaveLength(7);
    expect(categories).toContain('surface');
    expect(categories).toContain('typography');
  });

  it('should have correct SurfaceTokenKey type', () => {
    const keys: SurfaceTokenKey[] = [
      'primary',
      'standard',
      'grey',
      'primary-light',
      'secondary',
      'secondary-light',
      'error',
      'error-light',
      'sucess',
      'sucess-light',
      'warning',
      'warning-light',
      'info',
      'info-light',
      'hover'
    ];
    
    expect(keys).toContain('primary');
    expect(keys).toContain('secondary');
    expect(keys).toContain('error');
  });
});
