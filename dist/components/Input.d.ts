import React from 'react';
import './Input.css';
/**
 * Props do componente Input
 */
export interface InputProps {
    /** Texto do input */
    inputText?: string;
    /** Label do input */
    label?: string;
    /** Descrição do input */
    description?: string;
    /** Ícone do input */
    icon?: React.ReactNode | null;
    /** Se deve exibir o ícone */
    showIcon?: boolean;
    /** Se deve exibir o label */
    showLabel?: boolean;
    /** Se deve exibir a descrição */
    showDescription?: boolean;
    /** Estado do input */
    state?: 'default' | 'disable' | 'filled' | 'hover' | 'onclick';
    /** Placeholder do input */
    placeholder?: string;
    /** Tipo do input */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    /** Se o input está desabilitado */
    disabled?: boolean;
    /** Valor do input */
    value?: string;
    /** Função de callback para mudança de valor */
    onChange?: (value: string) => void;
    /** Função de callback para foco */
    onFocus?: () => void;
    /** Função de callback para perda de foco */
    onBlur?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Nome do input para formulários */
    name?: string;
    /** ID do input */
    id?: string;
}
/**
 * Componente Input do LED Telecom
 * Campo de entrada de texto seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1124&m=dev
 */
export declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=Input.d.ts.map