import React, { useState } from 'react';
import { Surface } from '../src/components/Surface';

/**
 * Exemplo de uso do componente Surface em React
 * Demonstra as diferentes funcionalidades e casos de uso
 */
export const SurfaceReactExample: React.FC = () => {
    const [currentVariant, setCurrentVariant] = useState<'standard' | 'primary' | 'secondary' | 'grey' | 'error' | 'success' | 'warning' | 'info'>('standard');
    const [currentSize, setCurrentSize] = useState<'small' | 'medium' | 'large' | 'xlarge'>('medium');
    const [currentElevation, setCurrentElevation] = useState<'none' | 'low' | 'medium' | 'high'>('medium');
    const [isClickable, setIsClickable] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isBordered, setIsBordered] = useState(false);

    // Manipula clique no surface
    const handleSurfaceClick = () => {
        if (!isDisabled && !isLoading) {
            alert('Surface clicado!');
        }
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#fafafa',
            minHeight: '100vh'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    color: '#1f2453',
                    fontSize: '32px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    LED Telecom - Surface Component
                </h1>

                <p style={{
                    color: '#1f2453',
                    fontSize: '16px',
                    textAlign: 'center',
                    marginBottom: '40px',
                    opacity: 0.8
                }}>
                    Componente versátil para criar cards e superfícies
                </p>

                {/* Controles de demonstração */}
                <Surface
                    variant="standard"
                    size="large"
                    elevation="medium"
                    style={{ marginBottom: '30px' }}
                >
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
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '20px'
                    }}>
                        {/* Controle de Variante */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                Variante:
                            </label>
                            <select
                                value={currentVariant}
                                onChange={(e) => setCurrentVariant(e.target.value as any)}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    border: '1px solid #1f2453',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="standard">Standard</option>
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                                <option value="grey">Grey</option>
                                <option value="error">Error</option>
                                <option value="success">Success</option>
                                <option value="warning">Warning</option>
                                <option value="info">Info</option>
                            </select>
                        </div>

                        {/* Controle de Tamanho */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                Tamanho:
                            </label>
                            <select
                                value={currentSize}
                                onChange={(e) => setCurrentSize(e.target.value as any)}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    border: '1px solid #1f2453',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xlarge">XLarge</option>
                            </select>
                        </div>

                        {/* Controle de Elevação */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                Elevação:
                            </label>
                            <select
                                value={currentElevation}
                                onChange={(e) => setCurrentElevation(e.target.value as any)}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    border: '1px solid #1f2453',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="none">None</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    {/* Controles de Estado */}
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginBottom: '20px'
                    }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={isClickable}
                                onChange={(e) => setIsClickable(e.target.checked)}
                            />
                            Clicável
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={isDisabled}
                                onChange={(e) => setIsDisabled(e.target.checked)}
                            />
                            Desabilitado
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={isLoading}
                                onChange={(e) => setIsLoading(e.target.checked)}
                            />
                            Loading
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={isBordered}
                                onChange={(e) => setIsBordered(e.target.checked)}
                            />
                            Com Borda
                        </label>
                    </div>

                    <div style={{
                        backgroundColor: '#ffefc2',
                        padding: '15px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        <strong>Configuração Atual:</strong> {currentVariant} | {currentSize} | {currentElevation} |
                        {isClickable ? ' Clicável' : ''} |
                        {isDisabled ? ' Desabilitado' : ''} |
                        {isLoading ? ' Loading' : ''} |
                        {isBordered ? ' Com Borda' : ''}
                    </div>
                </Surface>

                {/* Surface de Demonstração */}
                <Surface
                    variant={currentVariant}
                    size={currentSize}
                    elevation={currentElevation}
                    clickable={isClickable}
                    disabled={isDisabled}
                    loading={isLoading}
                    bordered={isBordered}
                    onClick={handleSurfaceClick}
                    style={{ marginBottom: '30px' }}
                >
                    <h3 style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        margin: '0 0 10px 0',
                        color: 'inherit'
                    }}>
                        Surface de Demonstração
                    </h3>
                    <p style={{
                        margin: '0 0 15px 0',
                        color: 'inherit',
                        opacity: 0.8
                    }}>
                        Este surface demonstra as configurações selecionadas acima.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        flexWrap: 'wrap',
                        marginTop: '15px'
                    }}>
                        <span style={{
                            padding: '4px 8px',
                            background: 'rgba(0,0,0,0.1)',
                            borderRadius: '4px',
                            fontSize: '12px'
                        }}>
                            {currentVariant}
                        </span>
                        <span style={{
                            padding: '4px 8px',
                            background: 'rgba(0,0,0,0.1)',
                            borderRadius: '4px',
                            fontSize: '12px'
                        }}>
                            {currentSize}
                        </span>
                        <span style={{
                            padding: '4px 8px',
                            background: 'rgba(0,0,0,0.1)',
                            borderRadius: '4px',
                            fontSize: '12px'
                        }}>
                            {currentElevation}
                        </span>
                    </div>
                </Surface>

                {/* Exemplos de Cards */}
                <Surface
                    variant="standard"
                    size="large"
                    elevation="medium"
                    style={{ marginBottom: '30px' }}
                >
                    <h2 style={{
                        color: '#1f2453',
                        fontSize: '24px',
                        marginBottom: '20px',
                        borderBottom: '2px solid #ffaa00',
                        paddingBottom: '10px'
                    }}>
                        Exemplos de Cards
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>
                        {/* Card de Produto */}
                        <Surface
                            asCard
                            cardTitle="Produto LED"
                            cardSubtitle="R$ 299,90"
                            variant="standard"
                            size="medium"
                            elevation="medium"
                            shadow={true}
                        >
                            <div style={{
                                width: '100%',
                                height: '120px',
                                background: 'linear-gradient(45deg, #ffaa00, #ffefc2)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#1f2453',
                                fontWeight: 'bold',
                                marginBottom: '16px'
                            }}>
                                Imagem do Produto
                            </div>
                            <p style={{ margin: '0 0 16px 0' }}>
                                Produto LED de alta qualidade com tecnologia avançada e design moderno.
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                marginTop: '16px'
                            }}>
                                <button style={{
                                    padding: '8px 16px',
                                    border: '1px solid #1f2453',
                                    borderRadius: '4px',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}>
                                    Ver Detalhes
                                </button>
                                <button style={{
                                    padding: '8px 16px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    background: '#1f2453',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}>
                                    Comprar
                                </button>
                            </div>
                        </Surface>

                        {/* Card de Estatísticas */}
                        <Surface
                            asCard
                            cardTitle="Dashboard"
                            cardSubtitle="Métricas em tempo real"
                            variant="primary"
                            size="medium"
                            elevation="medium"
                            shadow={true}
                        >
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: '16px'
                            }}>
                                <div style={{ flex: 1, textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1,234</div>
                                    <div style={{ fontSize: '12px', opacity: 0.8 }}>Usuários</div>
                                </div>
                                <div style={{ flex: 1, textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>98%</div>
                                    <div style={{ fontSize: '12px', opacity: 0.8 }}>Uptime</div>
                                </div>
                                <div style={{ flex: 1, textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>42</div>
                                    <div style={{ fontSize: '12px', opacity: 0.8 }}>Projetos</div>
                                </div>
                            </div>
                            <p style={{ margin: 0, opacity: 0.8 }}>
                                Dados atualizados em tempo real
                            </p>
                        </Surface>

                        {/* Card de Notificação */}
                        <Surface
                            asCard
                            cardTitle="Notificação"
                            cardSubtitle="Sistema"
                            variant="success"
                            size="medium"
                            elevation="medium"
                            shadow={true}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '16px'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255,255,255,0.2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px'
                                }}>
                                    ✅
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                                        Operação Concluída
                                    </div>
                                    <div style={{ fontSize: '12px', opacity: 0.8 }}>
                                        Todos os dados foram salvos
                                    </div>
                                </div>
                            </div>
                            <p style={{ margin: 0, opacity: 0.9 }}>
                                Sua operação foi realizada com sucesso. Você pode continuar trabalhando normalmente.
                            </p>
                        </Surface>
                    </div>
                </Surface>

                {/* Código de Exemplo */}
                <Surface
                    variant="standard"
                    size="large"
                    elevation="medium"
                >
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
                            {`import { Surface } from '@led-telecom/design-tokens';

// Surface básico
<Surface variant="standard" size="medium" elevation="medium">
    Conteúdo do surface
</Surface>

// Surface como card
<Surface 
    asCard={true}
    cardTitle="Título do Card"
    cardSubtitle="Subtítulo"
    variant="primary"
    size="large"
    elevation="high"
    shadow={true}
    hover={true}
>
    Conteúdo do card
</Surface>

// Surface clicável
<Surface 
    clickable={true}
    hover={true}
    onClick={() => console.log('Clicado!')}
    variant="secondary"
>
    Clique em mim!
</Surface>

// Surface com estados
<Surface 
    loading={true}
    disabled={false}
    bordered={true}
    variant="info"
>
    Surface com estados especiais
</Surface>`}
                        </pre>
                    </div>
                </Surface>
            </div>
        </div>
    );
};

export default SurfaceReactExample;
