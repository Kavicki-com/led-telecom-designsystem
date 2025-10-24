import React from 'react';
import './OutlinedButton.css';
/**
 * Props do componente OutlinedButton
 */
export interface OutlinedButtonProps {
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
    state?: 'default' | 'disable' | 'hover' | 'pressed';
    /** Função de callback para clique */
    onClick?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Se o botão está desabilitado */
    disabled?: boolean;
}
/**
 * Componente OutlinedButton do LED Telecom
 * Botão com estilo outlined (borda) seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-934&m=dev
 */
export declare const OutlinedButton: React.FC<OutlinedButtonProps>;
export default OutlinedButton;
//# sourceMappingURL=OutlinedButton.d.ts.map