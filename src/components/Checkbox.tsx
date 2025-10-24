import React, { useState } from 'react';
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
export const Checkbox: React.FC<CheckboxProps> = ({
    label = 'label',
    initialState = 'off',
    checked,
    disabled = false,
    value = '',
    name = '',
    onChange,
    className = '',
    id
}) => {
    // Estado interno para controlar se está selecionado ou não
    const [internalChecked, setInternalChecked] = useState(initialState === 'on');

    // Usa o estado controlado externamente se fornecido, senão usa o estado interno
    const isChecked = checked !== undefined ? checked : internalChecked;

    // Gera as classes CSS baseadas no estado
    const getCheckboxClasses = () => {
        const baseClasses = 'led-checkbox';
        const stateClasses = `led-checkbox--${isChecked ? 'on' : 'off'}`;
        const disabledClasses = disabled ? 'led-checkbox--disabled' : '';
        return `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();
    };

    // Gera o ID único se não fornecido
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    // Manipula o clique no checkbox
    const handleClick = () => {
        if (!disabled) {
            const newCheckedState = !isChecked;

            // Se não está sendo controlado externamente, atualiza o estado interno
            if (checked === undefined) {
                setInternalChecked(newCheckedState);
            }

            if (onChange) {
                onChange(newCheckedState);
            }
        }
    };

    // Manipula a mudança do input (para acessibilidade)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            const newCheckedState = event.target.checked;

            // Se não está sendo controlado externamente, atualiza o estado interno
            if (checked === undefined) {
                setInternalChecked(newCheckedState);
            }

            if (onChange) {
                onChange(newCheckedState);
            }
        }
    };

    return (
        <div
            className={getCheckboxClasses()}
            data-name={`state=${isChecked ? 'on' : 'off'}`}
            data-node-id="118:1025"
            onClick={handleClick}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            <div className="led-checkbox__container">
                <input
                    type="checkbox"
                    id={checkboxId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    className="led-checkbox__input"
                />
                <div className="led-checkbox__indicator">
                    <div className="led-checkbox__box">
                        {isChecked && (
                            <div className="led-checkbox__checkmark">
                                <svg
                                    width="12"
                                    height="9"
                                    viewBox="0 0 12 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="led-checkbox__checkmark-icon"
                                >
                                    <path
                                        d="M1 4.5L4.5 8L11 1.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <label htmlFor={checkboxId} className="led-checkbox__label" style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
