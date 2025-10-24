import React, { useState } from 'react';
import { TabGroup } from '../src/components/TabGroup';

/**
 * Exemplo de uso do componente TabGroup
 * Demonstra como usar múltiplas tabs com seleção automática
 */
export const TabGroupExample: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fatura');

    const tabs = [
        { id: 'fatura', label: 'Fatura' },
        { id: 'relatorios', label: 'Relatórios' },
        { id: 'configuracoes', label: 'Configurações' },
        { id: 'suporte', label: 'Suporte', disabled: true }
    ];

    const getTabContent = (tabId: string) => {
        const content = {
            'fatura': 'Aqui você pode visualizar e gerenciar suas faturas. Veja o histórico, baixe PDFs e configure pagamentos automáticos.',
            'relatorios': 'Relatórios detalhados sobre seu uso e consumo. Análises de dados, gráficos e exportações disponíveis.',
            'configuracoes': 'Configure suas preferências e configurações. Personalize sua experiência e gerencie suas informações.',
            'suporte': 'Central de suporte e ajuda. Chat ao vivo, tickets e documentação disponível 24/7.'
        };
        return content[tabId as keyof typeof content] || 'Conteúdo da tab selecionada.';
    };

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        console.log('Tab selecionada:', tabId);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Montserrat, sans-serif' }}>
            <h1 style={{ color: '#1f2453', marginBottom: '30px' }}>
                TabGroup - LED Telecom Design System
            </h1>

            {/* Exemplo básico com TabGroup */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Exemplo com TabGroup
                </h2>
                <TabGroup
                    tabs={tabs}
                    defaultActiveTab="fatura"
                    onTabChange={handleTabChange}
                />
                <div style={{
                    padding: '20px',
                    background: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    minHeight: '120px',
                    marginTop: '20px'
                }}>
                    <h3 style={{ color: '#1f2453', marginBottom: '10px' }}>
                        {activeTab === 'fatura' ? 'Fatura' :
                            activeTab === 'relatorios' ? 'Relatórios' :
                                activeTab === 'configuracoes' ? 'Configurações' :
                                    activeTab === 'suporte' ? 'Suporte' : activeTab}
                    </h3>
                    <p>{getTabContent(activeTab)}</p>
                </div>
            </div>

            {/* Exemplo com diferentes configurações */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Diferentes Configurações
                </h2>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#1f2453', marginBottom: '10px' }}>
                        Tabs Simples
                    </h3>
                    <TabGroup
                        tabs={[
                            { id: 'tab1', label: 'Tab 1' },
                            { id: 'tab2', label: 'Tab 2' },
                            { id: 'tab3', label: 'Tab 3' }
                        ]}
                        defaultActiveTab="tab1"
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#1f2453', marginBottom: '10px' }}>
                        Com Tabs Desabilitadas
                    </h3>
                    <TabGroup
                        tabs={[
                            { id: 'ativo', label: 'Ativo' },
                            { id: 'inativo', label: 'Inativo', disabled: true },
                            { id: 'pendente', label: 'Pendente', disabled: true }
                        ]}
                        defaultActiveTab="ativo"
                    />
                </div>
            </div>

            {/* Código de exemplo */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Como Usar TabGroup
                </h2>
                <pre style={{
                    background: '#f8f9fa',
                    border: '1px solid #e9ecef',
                    borderRadius: '4px',
                    padding: '15px',
                    overflow: 'auto',
                    fontSize: '14px'
                }}>
                    {`import { TabGroup } from '@led-telecom/design-tokens';

// Uso básico
const tabs = [
    { id: 'fatura', label: 'Fatura' },
    { id: 'relatorios', label: 'Relatórios' },
    { id: 'configuracoes', label: 'Configurações' }
];

<TabGroup
    tabs={tabs}
    defaultActiveTab="fatura"
    onTabChange={(tabId) => console.log('Tab selecionada:', tabId)}
/>

// Com tabs desabilitadas
const tabsWithDisabled = [
    { id: 'ativo', label: 'Ativo' },
    { id: 'inativo', label: 'Inativo', disabled: true },
    { id: 'pendente', label: 'Pendente', disabled: true }
];

<TabGroup
    tabs={tabsWithDisabled}
    defaultActiveTab="ativo"
/>`}
                </pre>
            </div>

            {/* Props do componente */}
            <div>
                <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                    Props do TabGroup
                </h2>
                <ul style={{ lineHeight: '1.6' }}>
                    <li><strong>tabs</strong>: Array de objetos com id, label e disabled opcional</li>
                    <li><strong>defaultActiveTab</strong>: ID da tab ativa inicial</li>
                    <li><strong>onTabChange</strong>: Função chamada quando a tab muda</li>
                    <li><strong>className</strong>: Classes CSS adicionais</li>
                </ul>
            </div>
        </div>
    );
};

export default TabGroupExample;
