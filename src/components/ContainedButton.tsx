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
export const ContainedButton: React.FC<ContainedButtonProps> = ({
    label = 'button',
    displayLabel = true,
    displayIconLeft = false,
    displayIconRight = false,
    icon = null,
    state = 'default',
    onClick,
    className = '',
    disabled = false
}) => {
    // Determina o estado baseado na prop disabled
    const buttonState = disabled ? 'disable' : state;

    // Gera as classes CSS baseadas no estado
    const getButtonClasses = () => {
        const baseClasses = 'led-button-contained';
        const stateClasses = `led-button-contained--${buttonState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };

    // Renderiza o conteúdo do botão
    const renderButtonContent = () => {
        const content = [];

        // Ícone à esquerda
        if (displayIconLeft && icon) {
            content.push(
                <span key="icon-left" className="led-button-contained__icon led-button-contained__icon--left">
                    {icon}
                </span>
            );
        }

        // Label do botão
        if (displayLabel && label) {
            content.push(
                <span key="label" className="led-button-contained__label">
                    {label}
                </span>
            );
        }

        // Ícone à direita
        if (displayIconRight && icon) {
            content.push(
                <span key="icon-right" className="led-button-contained__icon led-button-contained__icon--right">
                    {icon}
                </span>
            );
        }

        return content;
    };

    return (
        <button
            type="button"
            className={getButtonClasses()}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            data-name={`state=${buttonState}`}
            data-node-id={buttonState === 'default' ? '118:933' :
                buttonState === 'hover' ? '118:931' :
                    buttonState === 'pressed' ? '118:932' : '118:930'}
        >
            {renderButtonContent()}
        </button>
    );
};

export default ContainedButton;
