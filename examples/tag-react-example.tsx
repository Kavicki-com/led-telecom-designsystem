import React, { useState } from 'react';
import { Tag } from '../src/components/Tag';

/**
 * Exemplo de uso do componente Tag em React
 * Demonstra diferentes variantes, estados e funcionalidades
 */
export const TagReactExample: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const handleTagClick = (variant: string) => {
        setSelectedTag(variant);
        console.log(`Tag ${variant} clicada!`);
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
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h1 style={{
                    color: 'var(--content-primary, #1f2453)',
                    marginBottom: '8px'
                }}>
                    Tag Component - React Example
                </h1>

                <p style={{
                    color: 'var(--content-dark, #1f1f1f)',
                    marginBottom: '40px',
                    fontSize: '16px'
                }}>
                    Exemplo de uso do componente Tag do LED Telecom Design System
                </p>

                {/* Seção: Variantes */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: 'var(--content-primary, #1f2453)',
                        marginBottom: '16px',
                        fontSize: '20px'
                    }}>
                        Variantes
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginBottom: '24px'
                    }}>
                        <Tag label="Vencido" variant="Vencido" />
                        <Tag label="Em Atraso" variant="Em atraso" />
                        <Tag label="Pago" variant="Pago" />
                    </div>
                </div>

                {/* Seção: Estados */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: 'var(--content-primary, #1f2453)',
                        marginBottom: '16px',
                        fontSize: '20px'
                    }}>
                        Estados
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginBottom: '24px'
                    }}>
                        <Tag label="Default" variant="Vencido" state="default" />
                        <Tag label="Hover" variant="Em atraso" state="hover" />
                        <Tag label="Pressed" variant="Pago" state="pressed" />
                    </div>
                </div>

                {/* Seção: Tags Clicáveis */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: 'var(--content-primary, #1f2453)',
                        marginBottom: '16px',
                        fontSize: '20px'
                    }}>
                        Tags Clicáveis
                    </h2>

                    <p style={{ marginBottom: '16px' }}>
                        Clique nas tags abaixo para ver a interação:
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        marginBottom: '24px'
                    }}>
                        <Tag
                            label="Vencido"
                            variant="Vencido"
                            clickable={true}
                            onClick={() => handleTagClick('Vencido')}
                        />
                        <Tag
                            label="Em Atraso"
                            variant="Em atraso"
                            clickable={true}
                            onClick={() => handleTagClick('Em atraso')}
                        />
                        <Tag
                            label="Pago"
                            variant="Pago"
                            clickable={true}
                            onClick={() => handleTagClick('Pago')}
                        />
                    </div>

                    {selectedTag && (
                        <div style={{
                            padding: '12px',
                            backgroundColor: 'var(--surface-primary-light, #9da5e8)',
                            borderRadius: '4px',
                            color: 'var(--content-primary, #1f2453)',
                            fontSize: '14px'
                        }}>
                            Tag selecionada: <strong>{selectedTag}</strong>
                        </div>
                    )}
                </div>

                {/* Seção: Exemplo de Lista com Tags */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: 'var(--content-primary, #1f2453)',
                        marginBottom: '16px',
                        fontSize: '20px'
                    }}>
                        Exemplo Prático - Lista de Status
                    </h2>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        {[
                            { id: 1, name: 'Conta de Energia', status: 'Vencido' as const },
                            { id: 2, name: 'Internet', status: 'Em atraso' as const },
                            { id: 3, name: 'Telefone', status: 'Pago' as const },
                            { id: 4, name: 'TV', status: 'Vencido' as const },
                            { id: 5, name: 'Celular', status: 'Pago' as const }
                        ].map((item) => (
                            <div key={item.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '12px',
                                border: '1px solid var(--surface-grey, #dadada)',
                                borderRadius: '4px',
                                backgroundColor: 'white'
                            }}>
                                <span style={{
                                    fontSize: '14px',
                                    color: 'var(--content-dark, #1f1f1f)'
                                }}>
                                    {item.name}
                                </span>
                                <Tag
                                    label={item.status}
                                    variant={item.status}
                                    clickable={true}
                                    onClick={() => handleTagClick(item.status)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seção: Código de Exemplo */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        color: 'var(--content-primary, #1f2453)',
                        marginBottom: '16px',
                        fontSize: '20px'
                    }}>
                        Código de Exemplo
                    </h2>

                    <div style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '4px',
                        padding: '16px',
                        fontFamily: 'Courier New, monospace',
                        fontSize: '14px',
                        overflowX: 'auto'
                    }}>
                        <pre>{`import { Tag } from '@led-telecom/design-tokens';

// Tag básica
<Tag label="Vencido" variant="Vencido" />

// Tag clicável com callback
<Tag 
    label="Em Atraso" 
    variant="Em atraso" 
    clickable={true}
    onClick={() => console.log('Tag clicada!')}
/>

// Tag com estado específico
<Tag 
    label="Pago" 
    variant="Pago" 
    state="hover"
/>

// Exemplo de uso em lista
{items.map(item => (
    <div key={item.id}>
        <span>{item.name}</span>
        <Tag 
            label={item.status} 
            variant={item.status}
            clickable={true}
            onClick={() => handleStatusClick(item.status)}
        />
    </div>
))}`}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagReactExample;
