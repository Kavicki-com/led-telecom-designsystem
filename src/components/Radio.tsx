import React, { useState } from 'react';
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
export const Radio: React.FC<RadioProps> = ({
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
    const getRadioClasses = () => {
        const baseClasses = 'led-radio';
        const stateClasses = `led-radio--${isChecked ? 'on' : 'off'}`;
        const disabledClasses = disabled ? 'led-radio--disabled' : '';
        return `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();
    };

    // Gera o ID único se não fornecido
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    // Manipula o clique no radio
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
            className={getRadioClasses()}
            data-name={`state=${isChecked ? 'on' : 'off'}`}
            data-node-id="118:1024"
            onClick={handleClick}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            <div className="led-radio__container">
                <input
                    type="radio"
                    id={radioId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    className="led-radio__input"
                />
                <div className="led-radio__indicator">
                    <div className="led-radio__circle">
                        {isChecked && <div className="led-radio__dot" />}
                    </div>
                </div>
            </div>
            <label htmlFor={radioId} className="led-radio__label" style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
                {label}
            </label>
        </div>
    );
};

export default Radio;
