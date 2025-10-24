import React from 'react';
import './Combox.css';
/**
 * Props do componente Combox
 */
export interface ComboxProps {
    /** Label do combox */
    label?: string;
    /** Texto do input */
    inputText?: string;
    /** Descrição do combox */
    description?: string;
    /** Se deve exibir a descrição */
    showDescription?: boolean;
    /** Se deve exibir o label */
    showLabel?: boolean;
    /** Estado do combox */
    state?: 'default' | 'open' | 'disable';
    /** Opções do dropdown */
    options?: string[];
    /** Opção selecionada */
    selectedOption?: string;
    /** Placeholder do input */
    placeholder?: string;
    /** Se o combox está desabilitado */
    disabled?: boolean;
    /** Valor do input */
    value?: string;
    /** Função de callback para mudança de valor */
    onChange?: (value: string) => void;
    /** Função de callback para seleção de opção */
    onOptionSelect?: (option: string) => void;
    /** Função de callback para foco */
    onFocus?: () => void;
    /** Função de callback para perda de foco */
    onBlur?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Nome do combox para formulários */
    name?: string;
    /** ID do combox */
    id?: string;
}
/**
 * Componente Combox do LED Telecom
 * Dropdown com input seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=178-266&m=dev
 */
export declare const Combox: React.FC<ComboxProps>;
export default Combox;
//# sourceMappingURL=Combox.d.ts.map