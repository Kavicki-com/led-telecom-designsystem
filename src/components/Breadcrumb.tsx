import React from 'react';
import './Breadcrumb.css';

/**
 * Props do componente Breadcrumb
 */
export interface BreadcrumbProps {
    /** Texto do breadcrumb */
    label?: string;
    /** Estado do breadcrumb */
    state?: 'default' | 'disable';
    /** Função de callback para clique */
    onClick?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Se o breadcrumb está desabilitado */
    disabled?: boolean;
    /** Se deve exibir o ícone de seta */
    showArrow?: boolean;
    /** Ícone customizado para a seta */
    arrowIcon?: React.ReactNode;
}

/**
 * Componente Breadcrumb do LED Telecom
 * Breadcrumb com estilo seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=191-231&m=dev
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    label = 'passo 1',
    state = 'default',
    onClick,
    className = '',
    disabled = false,
    showArrow = true,
    arrowIcon
}) => {
    // Determina o estado baseado na prop disabled
    const breadcrumbState = disabled ? 'disable' : state;

    // Gera as classes CSS baseadas no estado
    const getBreadcrumbClasses = () => {
        const baseClasses = 'led-breadcrumb';
        const stateClasses = `led-breadcrumb--${breadcrumbState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };

    // Renderiza o ícone da seta
    const renderArrowIcon = () => {
        if (!showArrow) return null;

        if (arrowIcon) {
            return (
                <span className="led-breadcrumb__arrow">
                    {arrowIcon}
                </span>
            );
        }

        // Ícone SVG padrão baseado no design do Figma
        return (
            <span className="led-breadcrumb__arrow">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="led-breadcrumb__arrow-icon"
                >
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        );
    };

    return (
        <div
            className={getBreadcrumbClasses()}
            onClick={disabled ? undefined : onClick}
            data-name={`Property 1=${breadcrumbState}`}
            data-node-id={breadcrumbState === 'default' ? '191:230' : '191:232'}
        >
            <p className="led-breadcrumb__label">
                {label}
            </p>
            {renderArrowIcon()}
        </div>
    );
};

export default Breadcrumb;
