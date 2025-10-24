import React from 'react';
import './Tab.css';

/**
 * Props do componente Tab
 */
export interface TabProps {
    /** Texto da tab */
    label?: string;
    /** Estado da tab */
    state?: 'default' | 'disable';
    /** Se a tab está ativa */
    active?: boolean;
    /** Função de callback para clique */
    onClick?: () => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Se a tab está desabilitada */
    disabled?: boolean;
}

/**
 * Componente Tab do LED Telecom
 * Tab com estilo seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=193-330&m=dev
 */
export const Tab: React.FC<TabProps> = ({
    label = 'Fatura',
    state = 'default',
    active = false,
    onClick,
    className = '',
    disabled = false
}) => {
    // Determina o estado baseado na prop disabled
    const tabState = disabled ? 'disable' : state;

    // Gera as classes CSS baseadas no estado
    const getTabClasses = () => {
        const baseClasses = 'led-tab';
        const stateClasses = `led-tab--${tabState}`;
        const activeClasses = active ? 'led-tab--active' : '';
        return `${baseClasses} ${stateClasses} ${activeClasses} ${className}`.trim();
    };

    return (
        <div
            className={getTabClasses()}
            onClick={disabled ? undefined : onClick}
            data-name={`state=${tabState}`}
            data-node-id={tabState === 'default' ? '193:339' : '193:331'}
            role="tab"
            tabIndex={disabled ? -1 : 0}
            aria-selected={active}
            aria-disabled={disabled}
        >
            <p className="led-tab__label">
                {label}
            </p>
        </div>
    );
};

export default Tab;
