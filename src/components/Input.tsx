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
export const Input: React.FC<InputProps> = ({
    inputText = 'input-text',
    label = 'label',
    description = 'description',
    icon = null,
    showIcon = false,
    showLabel = true,
    showDescription = false,
    state = 'default',
    placeholder = '',
    type = 'text',
    disabled = false,
    value = '',
    onChange,
    onFocus,
    onBlur,
    className = '',
    name,
    id
}) => {
    // Determina o estado baseado na prop disabled
    const inputState = disabled ? 'disable' : state;

    // Gera as classes CSS baseadas no estado
    const getInputClasses = () => {
        const baseClasses = 'led-input';
        const stateClasses = `led-input--${inputState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };

    // Gera as classes do container
    const getContainerClasses = () => {
        return 'led-input-container';
    };

    // Gera as classes do label
    const getLabelClasses = () => {
        return 'led-input__label';
    };

    // Gera as classes do campo de texto
    const getTextAreaClasses = () => {
        const baseClasses = 'led-input__text-area';
        const stateClasses = `led-input__text-area--${inputState}`;
        return `${baseClasses} ${stateClasses}`;
    };

    // Gera as classes do texto do input
    const getInputTextClasses = () => {
        const baseClasses = 'led-input__text';
        const stateClasses = `led-input__text--${inputState}`;
        return `${baseClasses} ${stateClasses}`;
    };

    // Gera as classes da descrição
    const getDescriptionClasses = () => {
        return 'led-input__description';
    };

    // Renderiza o label
    const renderLabel = () => {
        if (!showLabel || !label) return null;

        return (
            <p className={getLabelClasses()}>
                {label}
            </p>
        );
    };

    // Renderiza o ícone
    const renderIcon = () => {
        if (!showIcon || !icon) return null;

        return (
            <span className="led-input__icon">
                {icon}
            </span>
        );
    };

    // Renderiza a descrição
    const renderDescription = () => {
        if (!showDescription || !description) return null;

        return (
            <p className={getDescriptionClasses()}>
                {description}
            </p>
        );
    };

    // Renderiza o cursor para estado onclick
    const renderCursor = () => {
        if (inputState !== 'onclick') return null;

        return (
            <span className="led-input__cursor">|</span>
        );
    };

    // Manipula mudanças no input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    // Manipula foco no input
    const handleFocus = () => {
        if (onFocus) {
            onFocus();
        }
    };

    // Manipula perda de foco no input
    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };

    // Determina o valor a ser exibido
    const getDisplayValue = () => {
        if (value !== undefined && value !== '') {
            return value;
        }
        if (inputText && inputText !== 'input-text') {
            return inputText;
        }
        return '';
    };

    return (
        <div className={getContainerClasses()} data-name={`state=${inputState}`} data-node-id="118:1124">
            {renderLabel()}
            <div className={getTextAreaClasses()}>
                {renderIcon()}
                {inputState === 'onclick' ? (
                    renderCursor()
                ) : (
                    <input
                        type={type}
                        value={getDisplayValue()}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled}
                        className={getInputTextClasses()}
                        name={name}
                        id={id}
                    />
                )}
            </div>
            {renderDescription()}
        </div>
    );
};

export default Input;
