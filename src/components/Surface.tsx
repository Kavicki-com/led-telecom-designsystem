import React from 'react';
import './Surface.css';

/**
 * Props do componente Surface
 */
export interface SurfaceProps {
    /** Conteúdo do surface */
    children: React.ReactNode;
    /** Variante do surface */
    variant?: 'standard' | 'primary' | 'secondary' | 'grey' | 'error' | 'success' | 'warning' | 'info';
    /** Tamanho do surface */
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    /** Elevação do surface */
    elevation?: 'none' | 'low' | 'medium' | 'high';
    /** Se o surface é clicável */
    clickable?: boolean;
    /** Se o surface está desabilitado */
    disabled?: boolean;
    /** Se o surface está em estado de loading */
    loading?: boolean;
    /** Se o surface tem borda */
    bordered?: boolean;
    /** Tamanho da borda */
    borderSize?: 's' | 'm' | 'l';
    /** Raio da borda */
    borderRadius?: 's' | 'm' | 'l';
    /** Padding interno */
    padding?: 'empty' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | '2xl';
    /** Gap entre elementos filhos */
    gap?: 'empty' | 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl' | '2xl';
    /** Largura do surface */
    width?: string | number;
    /** Altura do surface */
    height?: string | number;
    /** Se o surface é responsivo */
    responsive?: boolean;
    /** Função de callback para clique */
    onClick?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Estilos inline adicionais */
    style?: React.CSSProperties;
    /** Se o surface é um card */
    asCard?: boolean;
    /** Título do card (se asCard for true) */
    cardTitle?: string;
    /** Subtítulo do card (se asCard for true) */
    cardSubtitle?: string;
    /** Ações do card (se asCard for true) */
    cardActions?: React.ReactNode;
    /** Se o surface tem sombra */
    shadow?: boolean;
    /** Se o surface tem hover effect */
    hover?: boolean;
}

/**
 * Componente Surface do LED Telecom
 * Componente versátil para criar cards e superfícies seguindo o design system
 * Baseado nos tokens de design LED Telecom
 */
export const Surface: React.FC<SurfaceProps> = ({
    children,
    variant = 'standard',
    size = 'medium',
    elevation = 'medium',
    clickable = false,
    disabled = false,
    loading = false,
    bordered = false,
    borderSize = 'm',
    borderRadius = 'm',
    padding = 'm',
    gap = 'm',
    width,
    height,
    responsive = true,
    onClick,
    className = '',
    style = {},
    asCard = false,
    cardTitle,
    cardSubtitle,
    cardActions,
    shadow = true,
    hover = false
}) => {
    // Gera as classes CSS baseadas nas props
    const getSurfaceClasses = () => {
        const baseClasses = 'led-surface';
        const variantClasses = `led-surface--${variant}`;
        const sizeClasses = `led-surface--${size}`;
        const elevationClasses = `led-surface--elevation-${elevation}`;
        const stateClasses = [
            clickable ? 'led-surface--clickable' : '',
            disabled ? 'led-surface--disabled' : '',
            loading ? 'led-surface--loading' : '',
            bordered ? 'led-surface--bordered' : '',
            responsive ? 'led-surface--responsive' : '',
            asCard ? 'led-surface--card' : '',
            shadow ? 'led-surface--shadow' : '',
            hover ? 'led-surface--hover' : ''
        ].filter(Boolean).join(' ');

        return `${baseClasses} ${variantClasses} ${sizeClasses} ${elevationClasses} ${stateClasses} ${className}`.trim();
    };

    // Gera os estilos inline baseados nas props
    const getSurfaceStyles = (): React.CSSProperties => {
        const customStyles: React.CSSProperties = {
            ...style,
            '--led-surface-padding': `var(--padding-${padding}, 16px)`,
            '--led-surface-gap': `var(--gap-${gap}, 16px)`,
            '--led-surface-border-size': `var(--border-size-${borderSize}, 2px)`,
            '--led-surface-border-radius': `var(--border-radius-${borderRadius}, 8px)`
        };

        if (width) {
            customStyles.width = typeof width === 'number' ? `${width}px` : width;
        }

        if (height) {
            customStyles.height = typeof height === 'number' ? `${height}px` : height;
        }

        return customStyles;
    };

    // Renderiza o conteúdo do card se asCard for true
    const renderCardContent = () => {
        if (!asCard) return children;

        return (
            <>
                {(cardTitle || cardSubtitle) && (
                    <div className="led-surface__header">
                        {cardTitle && (
                            <h3 className="led-surface__title">{cardTitle}</h3>
                        )}
                        {cardSubtitle && (
                            <p className="led-surface__subtitle">{cardSubtitle}</p>
                        )}
                    </div>
                )}

                <div className="led-surface__content">
                    {children}
                </div>

                {cardActions && (
                    <div className="led-surface__actions">
                        {cardActions}
                    </div>
                )}
            </>
        );
    };

    // Renderiza o loading state
    const renderLoadingState = () => {
        if (!loading) return null;

        return (
            <div className="led-surface__loading">
                <div className="led-surface__spinner"></div>
                <span className="led-surface__loading-text">Carregando...</span>
            </div>
        );
    };

    // Determina o elemento HTML baseado nas props
    const Element = clickable ? 'button' : 'div';

    return (
        <Element
            className={getSurfaceClasses()}
            style={getSurfaceStyles()}
            onClick={disabled || loading ? undefined : onClick}
            disabled={disabled}
            data-variant={variant}
            data-size={size}
            data-elevation={elevation}
            data-clickable={clickable}
            data-disabled={disabled}
            data-loading={loading}
            data-bordered={bordered}
            data-responsive={responsive}
            data-as-card={asCard}
        >
            {renderLoadingState()}
            {renderCardContent()}
        </Element>
    );
};

export default Surface;
