import React, { useState } from 'react';
import { Tab } from './Tab';
import './TabGroup.css';

/**
 * Props do componente TabGroup
 */
export interface TabGroupProps {
    /** Array de tabs */
    tabs: Array<{
        id: string;
        label: string;
        disabled?: boolean;
    }>;
    /** Tab ativa inicial */
    defaultActiveTab?: string;
    /** Função de callback quando a tab muda */
    onTabChange?: (tabId: string) => void;
    /** Classes CSS adicionais */
    className?: string;
}

/**
 * Componente TabGroup do LED Telecom
 * Grupo de tabs com seleção automática
 * Facilita o uso de múltiplas tabs com funcionalidade de seleção
 */
export const TabGroup: React.FC<TabGroupProps> = ({
    tabs,
    defaultActiveTab,
    onTabChange,
    className = ''
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id || '');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    return (
        <div className={`led-tab-group ${className}`}>
            <div className="led-tabs-container">
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        active={activeTab === tab.id}
                        disabled={tab.disabled}
                        onClick={() => !tab.disabled && handleTabClick(tab.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TabGroup;
