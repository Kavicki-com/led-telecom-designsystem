import React, { useState } from 'react';
import { Pagination } from '../src/components/Pagination';

/**
 * Exemplo de uso do componente Pagination em React
 * Demonstra os diferentes estados e funcionalidades
 */
export const PaginationReactExample: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const [disabled, setDisabled] = useState(false);

    // Determina o estado da paginação baseado na página atual
    const getPaginationState = (page: number): 'begin' | 'middle' | 'end' => {
        if (page === 1) return 'begin';
        if (page === totalPages) return 'end';
        return 'middle';
    };

    // Renderiza informações da página atual
    const renderCurrentPageInfo = () => {
        const state = getPaginationState(currentPage);
        const stateText = {
            'begin': 'Início',
            'middle': 'Meio',
            'end': 'Fim'
        };

        return (
            <div style={{
                backgroundColor: '#ffefc2',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '2px solid #ffaa00'
            }}>
                <h3 style={{
                    color: '#1f2453',
                    fontSize: '16px',
                    margin: '0 0 10px 0'
                }}>
                    📍 Página Atual Selecionada
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    <div><strong>Página:</strong> {currentPage}</div>
                    <div><strong>Estado:</strong> {stateText[state]}</div>
                    <div><strong>Total:</strong> {totalPages}</div>
                    <div><strong>Progresso:</strong> {Math.round((currentPage / totalPages) * 100)}%</div>
                </div>
            </div>
        );
    };

    // Manipula a mudança de página
    const handlePageChange = (page: number) => {
        if (!disabled && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            console.log(`Navegando para a página ${page}`);
        }
    };

    // Manipula navegação anterior
    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    // Manipula navegação próxima
    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#fafafa',
            minHeight: '100vh'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{
                    color: '#1f2453',
                    fontSize: '32px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    LED Telecom - Pagination Component
                </h1>

                <p style={{
                    color: '#1f2453',
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '40px',
                    opacity: 0.8
                }}>
                    Exemplo interativo do componente de paginação
                </p>

                {/* Controles de demonstração */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 16px 0px rgba(29, 29, 29, 0.08)',
                    marginBottom: '30px'
                }}>
                    <h2 style={{
                        color: '#1f2453',
                        fontSize: '24px',
                        marginBottom: '20px',
                        borderBottom: '2px solid #ffaa00',
                        paddingBottom: '10px'
                    }}>
                        Controles de Demonstração
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <button
                            onClick={() => setCurrentPage(1)}
                            style={{
                                padding: '8px 16px',
                                border: '2px solid #1f2453',
                                borderRadius: '8px',
                                background: currentPage === 1 ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            Página 1 (Begin)
                        </button>
                        <button
                            onClick={() => setCurrentPage(5)}
                            style={{
                                padding: '8px 16px',
                                border: '2px solid #1f2453',
                                borderRadius: '8px',
                                background: currentPage === 5 ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            Página 5 (Middle)
                        </button>
                        <button
                            onClick={() => setCurrentPage(10)}
                            style={{
                                padding: '8px 16px',
                                border: '2px solid #1f2453',
                                borderRadius: '8px',
                                background: currentPage === 10 ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            Página 10 (End)
                        </button>
                        <button
                            onClick={() => setDisabled(!disabled)}
                            style={{
                                padding: '8px 16px',
                                border: '2px solid #1f2453',
                                borderRadius: '8px',
                                background: disabled ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {disabled ? 'Habilitar' : 'Desabilitar'}
                        </button>
                    </div>

                    <div style={{
                        backgroundColor: '#f5f5f5',
                        padding: '15px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        <strong>Estado Atual:</strong> {getPaginationState(currentPage)} |
                        <strong> Página:</strong> {currentPage} |
                        <strong> Total:</strong> {totalPages} |
                        <strong> Desabilitado:</strong> {disabled ? 'Sim' : 'Não'}
                    </div>
                </div>

                {/* Informações da Página Atual */}
                {renderCurrentPageInfo()}

                {/* Componente de Paginação */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 16px 0px rgba(29, 29, 29, 0.08)',
                    marginBottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <h2 style={{
                        color: '#1f2453',
                        fontSize: '24px',
                        marginBottom: '10px',
                        borderBottom: '2px solid #ffaa00',
                        paddingBottom: '10px'
                    }}>
                        Componente Pagination
                    </h2>

                    <Pagination
                        property1={getPaginationState(currentPage)}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        disabled={disabled}
                    />

                    <p style={{
                        color: '#1f2453',
                        fontSize: '14px',
                        textAlign: 'center',
                        opacity: 0.8,
                        margin: 0
                    }}>
                        Clique nos botões para navegar entre as páginas
                    </p>
                </div>

                {/* Navegação manual */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 16px 0px rgba(29, 29, 29, 0.08)',
                    marginBottom: '30px'
                }}>
                    <h2 style={{
                        color: '#1f2453',
                        fontSize: '24px',
                        marginBottom: '20px',
                        borderBottom: '2px solid #ffaa00',
                        paddingBottom: '10px'
                    }}>
                        Navegação Manual
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage <= 1 || disabled}
                            style={{
                                padding: '12px 24px',
                                border: '2px solid #1f2453',
                                borderRadius: '16px',
                                background: currentPage > 1 ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: currentPage > 1 ? 'pointer' : 'not-allowed',
                                opacity: currentPage <= 1 ? 0.5 : 1,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            ← Anterior
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage >= totalPages || disabled}
                            style={{
                                padding: '12px 24px',
                                border: '2px solid #1f2453',
                                borderRadius: '16px',
                                background: currentPage < totalPages ? '#ffaa00' : 'transparent',
                                color: '#1f2453',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: currentPage < totalPages ? 'pointer' : 'not-allowed',
                                opacity: currentPage >= totalPages ? 0.5 : 1,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            Próxima →
                        </button>
                    </div>
                </div>

                {/* Código de exemplo */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 16px 0px rgba(29, 29, 29, 0.08)'
                }}>
                    <h2 style={{
                        color: '#1f2453',
                        fontSize: '24px',
                        marginBottom: '20px',
                        borderBottom: '2px solid #ffaa00',
                        paddingBottom: '10px'
                    }}>
                        Código de Exemplo
                    </h2>

                    <div style={{
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '20px',
                        overflowX: 'auto'
                    }}>
                        <pre style={{
                            margin: 0,
                            fontFamily: 'Courier New, monospace',
                            fontSize: '12px',
                            lineHeight: '1.4',
                            color: '#1f2453'
                        }}>
                            {`import { Pagination } from '@led-telecom/design-tokens';

const [currentPage, setCurrentPage] = useState(1);
const [totalPages] = useState(10);

const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Navegando para a página:', page);
};

<Pagination
    property1={getPaginationState(currentPage)}
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
    disabled={false}
/>`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationReactExample;
