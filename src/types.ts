/**
 * Tipos para os tokens de design do LED Telecom
 */

export interface SurfaceTokens {
    primary: string;
    standard: string;
    grey: string;
    'primary-light': string;
    secondary: string;
    'secondary-light': string;
    error: string;
    'error-light': string;
    sucess: string;
    'sucess-light': string;
    warning: string;
    'warning-light': string;
    info: string;
    'info-light': string;
    hover: string;
}

export interface BorderSizeTokens {
    s: string;
    m: string;
    l: string;
}

export interface BorderRadiusTokens {
    s: string;
    m: string;
    l: string;
}

export interface BorderTokens {
    size: BorderSizeTokens;
    radius: BorderRadiusTokens;
}

export interface SpacingTokens {
    empty: string;
    xs: string;
    s: string;
    sm: string;
    m: string;
    ml: string;
    l: string;
    xl: string;
    '2xl': string;
}

export interface GapTokens {
    empty: string;
    xs: string;
    s: string;
    sm: string;
    m: string;
    l: string;
    xl: string;
    '2xl': string;
}

export interface MarginTokens {
    empty: string;
    xs: string;
    s: string;
    sm: string;
    m: string;
    ml: string;
    l: string;
    xl: string;
}

export interface ContentTokens {
    dark: string;
    light: string;
    primary: string;
    'primary-light': string;
    secondary: string;
    'secondary-light': string;
    error: string;
    'error-light': string;
    sucess: string;
    'sucess-light': string;
    warning: string;
    'warning-light': string;
    info: string;
    'info-light': string;
    hover: string;
    disable: string;
}

export interface TypographyFamilyTokens {
    title: string;
    body: string;
}

export interface TypographyWeightTokens {
    light: string;
    medium: string;
    regular: string;
    bold: string;
}

export interface TypographySizeTokens {
    s: string;
    sm: string;
    ms: string;
    ml: string;
    l: string;
    xl: string;
    '2xl': string;
    m: string;
}

export interface TypographyTokens {
    family: TypographyFamilyTokens;
    weight: TypographyWeightTokens;
    size: TypographySizeTokens;
}

export interface DesignTokens {
    surface: SurfaceTokens;
    border: BorderTokens;
    padding: SpacingTokens;
    gap: GapTokens;
    margin: MarginTokens;
    content: ContentTokens;
    typography: TypographyTokens;
}

export type TokenCategory = keyof DesignTokens;
export type SurfaceTokenKey = keyof SurfaceTokens;
export type BorderTokenKey = keyof BorderTokens;
export type SpacingTokenKey = keyof SpacingTokens;
export type ContentTokenKey = keyof ContentTokens;
export type TypographyTokenKey = keyof TypographyTokens;
