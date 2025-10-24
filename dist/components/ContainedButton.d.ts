import React from 'react';
import './ContainedButton.css';
/**
 * Props do componente ContainedButton
 */
export interface ContainedButtonProps {
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
 * Componente ContainedButton do LED Telecom
 * Botão com estilo contido seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-934&m=dev
 */
export declare const ContainedButton: React.FC<ContainedButtonProps>;
export default ContainedButton;
//# sourceMappingURL=ContainedButton.d.ts.map