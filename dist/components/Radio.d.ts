import React from 'react';
import './Radio.css';
/**
 * Props do componente Radio
 */
export interface RadioProps {
    /** Texto do label do radio */
    label?: string;
    /** Estado inicial do radio (on/off) */
    initialState?: 'off' | 'on';
    /** Se o radio está selecionado (controlado externamente) */
    checked?: boolean;
    /** Se o radio está desabilitado */
    disabled?: boolean;
    /** Valor do radio para formulários */
    value?: string;
    /** Nome do grupo de radio buttons */
    name?: string;
    /** Função de callback para mudança de estado */
    onChange?: (checked: boolean) => void;
    /** Classes CSS adicionais */
    className?: string;
    /** ID único do componente */
    id?: string;
}
/**
 * Componente Radio do LED Telecom
 * Radio button seguindo o design system com funcionalidade de clique para ativar/desativar
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1024&m=dev
 */
export declare const Radio: React.FC<RadioProps>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map