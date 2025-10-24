import React, { useState } from 'react';
import { Tab } from '../src/components/Tab';

/**
 * Exemplo de uso do componente Tab em React
 * Demonstra diferentes estados e interações
 */
export const TabReactExample: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fatura');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const getTabContent = (tabId: string) => {
        const content = {
            'fatura': 'Aqui você pode visualizar e gerenciar suas faturas.',
            'relatorios': 'Relatórios detalhados sobre seu uso e consumo.',
            'configuracoes': 'Configure suas preferências e configurações.'
        };
        return content[tabId as keyof typeof content] || 'Conteúdo da tab selecionada.';
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat, sans-serif' }}>
            <h1 style={{ color: '#1f2453', marginBottom: '30px' }}>
                Componente Tab - LED Telecom Design System
            </h1>

            {/* Exemplo básico com múltiplas tabs */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Exemplo Básico
                </h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0',
                    borderBottom: '1px solid rgba(127, 127, 127, 0.3)',
                    marginBottom: '20px',
                    position: 'relative'
                }}>
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
                    minHeight: '100px'
                }}>
                    <h3 style={{ color: '#1f2453', marginBottom: '10px' }}>
                        {activeTab === 'fatura' ? 'Fatura' :
                            activeTab === 'relatorios' ? 'Relatórios' :
                                activeTab === 'configuracoes' ? 'Configurações' : activeTab}
                    </h3>
                    <p>{getTabContent(activeTab)}</p>
                </div>
            </div>

            {/* Exemplo com diferentes estados */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Estados do Componente
                </h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0',
                    borderBottom: '1px solid rgba(127, 127, 127, 0.3)',
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <Tab label="Ativa" active={true} />
                    <Tab label="Normal" active={false} />
                    <Tab label="Desabilitada" disabled={true} />
                </div>
            </div>

            {/* Exemplo com interação */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Com Interação
                </h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0',
                    borderBottom: '1px solid rgba(127, 127, 127, 0.3)',
                    marginBottom: '20px',
                    position: 'relative'
                }}>
                    <Tab
                        label="Clique aqui"
                        onClick={() => alert('Tab clicada!')}
                    />
                    <Tab
                        label="Outra tab"
                        onClick={() => console.log('Segunda tab clicada!')}
                    />
                </div>
            </div>

            {/* Código de exemplo */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Como Usar
                </h2>
                <pre style={{
                    background: '#f8f9fa',
                    border: '1px solid #e9ecef',
                    borderRadius: '4px',
                    padding: '15px',
                    overflow: 'auto',
                    fontSize: '14px'
                }}>
                    {`// Importar o componente
import { Tab } from '@led-telecom/design-tokens';

// Uso básico
<Tab label="Fatura" active={true} />

// Com estado desabilitado
<Tab label="Relatórios" disabled={true} />

// Com callback de clique
<Tab 
    label="Configurações" 
    onClick={() => console.log('Tab clicada!')} 
/>

// Múltiplas tabs
<div className="led-tabs-container">
    <Tab label="Fatura" active={true} />
    <Tab label="Relatórios" active={false} />
    <Tab label="Configurações" active={false} />
</div>`}
                </pre>
            </div>

            {/* Props do componente */}
            <div>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Props do Componente
                </h2>
                <ul style={{ lineHeight: '1.6' }}>
                    <li><strong>label</strong>: Texto da tab (padrão: 'Fatura')</li>
                    <li><strong>state</strong>: Estado da tab ('default' | 'disable')</li>
                    <li><strong>active</strong>: Se a tab está ativa (boolean)</li>
                    <li><strong>onClick</strong>: Função de callback para clique</li>
                    <li><strong>disabled</strong>: Se a tab está desabilitada (boolean)</li>
                    <li><strong>className</strong>: Classes CSS adicionais</li>
                </ul>
            </div>
        </div>
    );
};

export default TabReactExample;
