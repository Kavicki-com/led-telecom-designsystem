import React from 'react';
import { Breadcrumb } from '../src/components/Breadcrumb';

/**
 * Exemplo de uso do componente Breadcrumb
 * Demonstra diferentes estados e configurações
 */

const BreadcrumbReactExample: React.FC = () => {
    const handleBreadcrumbClick = (step: string) => {
        console.log(`Breadcrumb clicado: ${step}`);
        alert(`Navegando para: ${step}`);
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{
                    color: '#1f2453',
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontWeight: 'bold'
                }}>
                    Breadcrumb Component - LED Telecom
                </h1>

                <p style={{
                    color: '#666',
                    marginBottom: '40px',
                    fontSize: '16px',
                    lineHeight: '1.5'
                }}>
                    Exemplos de uso do componente Breadcrumb baseado no design do Figma.
                </p>

                {/* Exemplo 1: Estado Default */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Estado Default
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginBottom: '16px'
                    }}>
                        <Breadcrumb
                            label="passo 1"
                            state="default"
                            showArrow={true}
                            onClick={() => handleBreadcrumbClick('passo 1')}
                        />
                    </div>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflow: 'auto'
                    }}>
                        {`<Breadcrumb 
    label="passo 1" 
    state="default" 
    showArrow={true}
    onClick={() => handleBreadcrumbClick('passo 1')}
/>`}
                    </pre>
                </div>

                {/* Exemplo 2: Estado Disabled */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Estado Disabled
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginBottom: '16px'
                    }}>
                        <Breadcrumb
                            label="passo 1"
                            state="disable"
                            disabled={true}
                            showArrow={true}
                        />
                    </div>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflow: 'auto'
                    }}>
                        {`<Breadcrumb 
    label="passo 1" 
    state="disable" 
    disabled={true}
    showArrow={true}
/>`}
                    </pre>
                </div>

                {/* Exemplo 3: Múltiplos Breadcrumbs */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Múltiplos Breadcrumbs (Navegação)
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginBottom: '16px'
                    }}>
                        <Breadcrumb
                            label="Início"
                            state="default"
                            showArrow={true}
                            onClick={() => handleBreadcrumbClick('Início')}
                        />
                        <Breadcrumb
                            label="Produtos"
                            state="default"
                            showArrow={true}
                            onClick={() => handleBreadcrumbClick('Produtos')}
                        />
                        <Breadcrumb
                            label="Telefonia"
                            state="default"
                            showArrow={true}
                            onClick={() => handleBreadcrumbClick('Telefonia')}
                        />
                        <Breadcrumb
                            label="Configurações"
                            state="disable"
                            disabled={true}
                            showArrow={false}
                        />
                    </div>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflow: 'auto'
                    }}>
                        {`<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    <Breadcrumb label="Início" state="default" showArrow={true} />
    <Breadcrumb label="Produtos" state="default" showArrow={true} />
    <Breadcrumb label="Telefonia" state="default" showArrow={true} />
    <Breadcrumb label="Configurações" state="disable" disabled={true} showArrow={false} />
</div>`}
                    </pre>
                </div>

                {/* Exemplo 4: Sem Seta */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Sem Seta (Último Item)
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginBottom: '16px'
                    }}>
                        <Breadcrumb
                            label="Último item"
                            state="default"
                            showArrow={false}
                        />
                    </div>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflow: 'auto'
                    }}>
                        {`<Breadcrumb 
    label="Último item" 
    state="default" 
    showArrow={false}
/>`}
                    </pre>
                </div>

                {/* Exemplo 5: Com Ícone Customizado */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Com Ícone Customizado
                    </h3>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginBottom: '16px'
                    }}>
                        <Breadcrumb
                            label="passo 1"
                            state="default"
                            showArrow={true}
                            arrowIcon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </div>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflow: 'auto'
                    }}>
                        {`<Breadcrumb 
    label="passo 1" 
    state="default" 
    showArrow={true}
    arrowIcon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    }
/>`}
                    </pre>
                </div>

                {/* Exemplo 6: Comparação de Estados */}
                <div style={{
                    marginBottom: '40px',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                }}>
                    <h3 style={{
                        color: '#1f2453',
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Comparação de Estados
                    </h3>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            <span style={{ minWidth: '100px', fontSize: '14px', fontWeight: 'bold' }}>Default:</span>
                            <Breadcrumb label="passo 1" state="default" showArrow={true} />
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                            <span style={{ minWidth: '100px', fontSize: '14px', fontWeight: 'bold' }}>Disabled:</span>
                            <Breadcrumb label="passo 1" state="disable" disabled={true} showArrow={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbReactExample;
