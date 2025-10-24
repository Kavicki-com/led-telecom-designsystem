import React, { useState, useRef, useEffect } from 'react';
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
export const Combox: React.FC<ComboxProps> = ({
    label = 'label',
    inputText = 'input-text',
    description = 'description',
    showDescription = true,
    showLabel = true,
    state = 'default',
    options = ['option1', 'option2', 'option3'],
    selectedOption = '',
    placeholder = '',
    disabled = false,
    value = '',
    onChange,
    onOptionSelect,
    onFocus,
    onBlur,
    className = '',
    name,
    id
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || inputText);
    const [selected, setSelected] = useState(selectedOption);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const comboxRef = useRef<HTMLDivElement>(null);

    // Determina o estado baseado na prop disabled
    const comboxState = disabled ? 'disable' : state;

    // Gera as classes CSS baseadas no estado
    const getComboxClasses = () => {
        const baseClasses = 'led-combox';
        const stateClasses = `led-combox--${comboxState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };

    // Gera as classes do container
    const getContainerClasses = () => {
        return 'led-combox-container';
    };

    // Gera as classes do label
    const getLabelClasses = () => {
        return 'led-combox__label';
    };

    // Gera as classes do campo de texto
    const getTextAreaClasses = () => {
        const baseClasses = 'led-combox__text-area';
        const stateClasses = `led-combox__text-area--${comboxState}`;
        return `${baseClasses} ${stateClasses}`;
    };

    // Gera as classes do texto do input
    const getInputTextClasses = () => {
        const baseClasses = 'led-combox__text';
        const stateClasses = `led-combox__text--${comboxState}`;
        return `${baseClasses} ${stateClasses}`;
    };

    // Gera as classes da descrição
    const getDescriptionClasses = () => {
        return 'led-combox__description';
    };

    // Gera as classes do dropdown
    const getDropdownClasses = () => {
        const baseClasses = 'led-combox__dropdown';
        const stateClasses = isOpen ? 'led-combox__dropdown--open' : 'led-combox__dropdown--closed';
        return `${baseClasses} ${stateClasses}`;
    };

    // Gera as classes das opções
    const getOptionClasses = (index: number) => {
        const baseClasses = 'led-combox__option';
        const isFirst = index === 0;
        return `${baseClasses} ${isFirst ? 'led-combox__option--first' : ''}`;
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

    // Renderiza o ícone do dropdown
    const renderDropdownIcon = () => {
        return (
            <div className="led-combox__icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
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

    // Renderiza as opções do dropdown
    const renderOptions = () => {
        if (!isOpen || !filteredOptions.length) return null;

        return (
            <div className={getDropdownClasses()}>
                {filteredOptions.map((option, index) => (
                    <div
                        key={index}
                        className={getOptionClasses(index)}
                        onClick={() => handleOptionSelect(option)}
                    >
                        <p className="led-combox__option-text">{option}</p>
                    </div>
                ))}
            </div>
        );
    };

    // Manipula a abertura/fechamento do dropdown
    const handleToggleDropdown = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
    };

    // Manipula clique no container do input
    const handleInputAreaClick = () => {
        if (disabled) return;
        setIsOpen(true);
    };

    // Manipula a seleção de uma opção
    const handleOptionSelect = (option: string) => {
        setSelected(option);
        setInputValue(option);
        setIsOpen(false);

        if (onOptionSelect) {
            onOptionSelect(option);
        }

        if (onChange) {
            onChange(option);
        }
    };

    // Manipula mudanças no input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        // Abre o dropdown quando o usuário digita
        if (!isOpen && newValue.trim() !== '') {
            setIsOpen(true);
        }

        if (onChange) {
            onChange(newValue);
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

    // Filtra opções baseado no texto digitado
    useEffect(() => {
        if (inputValue && inputValue.trim() !== '') {
            const filtered = options.filter(option =>
                option.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
    }, [inputValue, options]);

    // Fecha o dropdown quando clica fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (comboxRef.current && !comboxRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Determina o valor a ser exibido
    const getDisplayValue = () => {
        if (value !== undefined && value !== '') {
            return value;
        }
        if (inputValue && inputValue !== 'input-text' && inputValue !== '') {
            return inputValue;
        }
        return '';
    };

    return (
        <div
            className={getContainerClasses()}
            data-name={`state=${comboxState}`}
            data-node-id="178:266"
            ref={comboxRef}
        >
            {renderLabel()}
            <div
                className={getTextAreaClasses()}
                onClick={handleInputAreaClick}
            >
                <input
                    type="text"
                    value={getDisplayValue()}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={getInputTextClasses()}
                    name={name}
                    id={id}
                />
                <div
                    className="led-combox__icon-container"
                    onClick={handleToggleDropdown}
                >
                    {renderDropdownIcon()}
                </div>
            </div>
            {renderOptions()}
            {renderDescription()}
        </div>
    );
};

export default Combox;
