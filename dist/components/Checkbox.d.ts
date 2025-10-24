import React from 'react';
import './Checkbox.css';
/**
 * Props do componente Checkbox
 */
export interface CheckboxProps {
    /** Texto do label do checkbox */
    label?: string;
    /** Estado inicial do checkbox (on/off) */
    initialState?: 'off' | 'on';
    /** Se o checkbox está selecionado (controlado externamente) */
    checked?: boolean;
    /** Se o checkbox está desabilitado */
    disabled?: boolean;
    /** Valor do checkbox para formulários */
    value?: string;
    /** Nome do grupo de checkboxes */
    name?: string;
    /** Função de callback para mudança de estado */
    onChange?: (checked: boolean) => void;
    /** Classes CSS adicionais */
    className?: string;
    /** ID único do componente */
    id?: string;
}
/**
 * Componente Checkbox do LED Telecom
 * Checkbox seguindo o design system com funcionalidade de clique para ativar/desativar
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1025&m=dev
 * Permite seleção múltipla ao contrário do Radio
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map