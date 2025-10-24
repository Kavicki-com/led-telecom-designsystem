import React, { useState } from 'react';
import { Tab } from '../src/components/Tab';

/**
 * Teste direto do componente Tab para Storybook
 */
export const TabStorybookTest: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fatura');

    const handleTabClick = (tabId: string) => {
        console.log('🔄 Mudando para tab:', tabId);
        setActiveTab(tabId);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat, sans-serif' }}>
            <h1 style={{ color: '#1f2453', marginBottom: '30px' }}>
                Teste Tab - Storybook
            </h1>

            <div className="led-tabs-container">
                <Tab
                    label="Fatura"
                    active={activeTab === 'fatura'}
                    onClick={() => handleTabClick('fatura')}
                />
                <Tab
                    label="Relatórios"
                    active={activeTab === 'relatorios'}
                    onClick={() => handleTabClick('relatorios')}
                />
                <Tab
                    label="Configurações"
                    active={activeTab === 'configuracoes'}
                    onClick={() => handleTabClick('configuracoes')}
                />
            </div>

            <div style={{
                padding: '20px',
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                minHeight: '100px',
                marginTop: '20px'
            }}>
                <h3 style={{ color: '#1f2453', marginBottom: '10px' }}>
                    Tab Ativa: {activeTab}
                </h3>
                <p>Conteúdo da tab selecionada...</p>
            </div>

            <div style={{
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '4px',
                padding: '10px',
                marginTop: '20px',
                fontSize: '12px',
                color: '#666'
            }}>
                Debug: Tab ativa = {activeTab}
            </div>
        </div>
    );
};

export default TabStorybookTest;
