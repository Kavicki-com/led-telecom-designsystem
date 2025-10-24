import React from 'react';
import './GhostButton.css';
/**
 * Props do componente GhostButton
 */
export interface GhostButtonProps {
    /** Texto do botão */
    label?: string;
    /** Se deve exibir o label */
    displayLabel?: boolean;
    /** Ícone à esquerda */
    displayIconLeft?: boolean;
    /** Ícone à direita */
    displayIconRight?: boolean;
    /** Ícone customizado */
    icon?: React.ReactNode | null;
    /** Estado do botão */
    state?: 'default' | 'disable' | 'hover' | 'pressed' | 'state5';
    /** Função de callback para clique */
    onClick?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Se o botão está desabilitado */
    disabled?: boolean;
}
/**
 * Componente GhostButton do LED Telecom
 * Botão com estilo ghost (transparente) seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-986&m=dev
 */
export declare const GhostButton: React.FC<GhostButtonProps>;
export default GhostButton;
//# sourceMappingURL=GhostButton.d.ts.map