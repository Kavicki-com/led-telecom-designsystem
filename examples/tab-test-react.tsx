import React, { useState } from 'react';

/**
 * Teste simples do componente Tab
 */
export const TabTestReact: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fatura');

    const handleTabClick = (tabId: string) => {
        console.log('Clicou na tab:', tabId);
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
                Teste de Seleção de Tabs - React
            </h1>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                borderBottom: '1px solid rgba(127, 127, 127, 0.3)',
                marginBottom: '20px',
                position: 'relative'
            }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px 8px',
                        borderBottom: activeTab === 'fatura' ? '2px solid #1f2453' : '1px solid rgba(127, 127, 127, 0.3)',
                        cursor: 'pointer',
                        width: '89px',
                        height: activeTab === 'fatura' ? '26px' : '24px',
                        color: '#1f2453',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => handleTabClick('fatura')}
                >
                    Fatura
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px 8px',
                        borderBottom: activeTab === 'relatorios' ? '2px solid #1f2453' : '1px solid rgba(127, 127, 127, 0.3)',
                        cursor: 'pointer',
                        width: '89px',
                        height: activeTab === 'relatorios' ? '26px' : '24px',
                        color: '#1f2453',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => handleTabClick('relatorios')}
                >
                    Relatórios
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px 8px',
                        borderBottom: activeTab === 'configuracoes' ? '2px solid #1f2453' : '1px solid rgba(127, 127, 127, 0.3)',
                        cursor: 'pointer',
                        width: '89px',
                        height: activeTab === 'configuracoes' ? '26px' : '24px',
                        color: '#1f2453',
                        transition: 'all 0.2s ease-in-out'
                    }}
                    onClick={() => handleTabClick('configuracoes')}
                >
                    Configurações
                </div>
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

export default TabTestReact;
