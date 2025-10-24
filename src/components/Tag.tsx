import React from 'react';
import './Tag.css';

/**
 * Props do componente Tag
 */
export interface TagProps {
    /** Texto da tag */
    label: string;
    /** Variante da tag */
    variant?: 'Vencido' | 'Em atraso' | 'Pago';
    /** Estado da tag */
    state?: 'default' | 'hover' | 'pressed';
    /** Classes CSS adicionais */
    className?: string;
    /** Função de callback para clique (opcional) */
    onClick?: () => void;
    /** Se a tag é clicável */
    clickable?: boolean;
}

/**
 * Componente Tag do LED Telecom
 * Tag de status seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1284&m=dev
 */
export const Tag: React.FC<TagProps> = ({
    label,
    variant = 'Vencido',
    state = 'default',
    className = '',
    onClick,
    clickable = false
}) => {
    // Gera as classes CSS baseadas na variante e estado
    const getTagClasses = () => {
        const baseClasses = 'led-tag';
        const variantClasses = `led-tag--${variant.toLowerCase().replace(' ', '-')}`;
        const stateClasses = `led-tag--${state}`;
        const clickableClasses = clickable ? 'led-tag--clickable' : '';
        return `${baseClasses} ${variantClasses} ${stateClasses} ${clickableClasses} ${className}`.trim();
    };

    // Determina o node-id baseado na variante
    const getNodeId = () => {
        switch (variant) {
            case 'Em atraso':
                return '124:1285';
            case 'Pago':
                return '124:1287';
            case 'Vencido':
            default:
                return '124:1283';
        }
    };

    const TagElement = clickable ? 'button' : 'div';

    return (
        <TagElement
            className={getTagClasses()}
            onClick={clickable ? onClick : undefined}
            data-name={`Property 1=${variant}`}
            data-node-id={getNodeId()}
            type={clickable ? 'button' : undefined}
        >
            <span className="led-tag__label">
                {label}
            </span>
        </TagElement>
    );
};

export default Tag;
