import React, { useState } from 'react';
import { ContainedButton, ContainedButtonProps } from '../src/components/ContainedButton';

/**
 * Exemplo de uso do ContainedButton em React
 */
const ContainedButtonExample: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);
    const [currentState, setCurrentState] = useState<ContainedButtonProps['state']>('default');

    const handleClick = () => {
        setClickCount(prev => prev + 1);
        console.log('Botão clicado!');
    };

    const handleStateChange = (state: ContainedButtonProps['state']) => {
        setCurrentState(state);
    };

    return (
        <div style={{
            padding: '40px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    color: '#1f2453',
                    textAlign: 'center',
                    marginBottom: '40px',
                    fontSize: '2.5rem'
                }}>
                    ContainedButton - Exemplo React
                </h1>

                {/* Seção de demonstração dos estados */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    marginBottom: '30px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                        Demonstração dos Estados
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '20px'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Default</h3>
                            <ContainedButton
                                label="Button"
                                state="default"
                                onClick={handleClick}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Hover</h3>
                            <ContainedButton
                                label="Button"
                                state="hover"
                                onClick={handleClick}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Pressed</h3>
                            <ContainedButton
                                label="Button"
                                state="pressed"
                                onClick={handleClick}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Disable</h3>
                            <ContainedButton
                                label="Button"
                                state="disable"
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Seção de botões com ícones */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    marginBottom: '30px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                        Botões com Ícones
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '20px'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Ícone à Esquerda</h3>
                            <ContainedButton
                                label="Salvar"
                                displayIconLeft={true}
                                icon={<span style={{ fontSize: '16px' }}>💾</span>}
                                onClick={handleClick}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Ícone à Direita</h3>
                            <ContainedButton
                                label="Próximo"
                                displayIconRight={true}
                                icon={<span style={{ fontSize: '16px' }}>→</span>}
                                onClick={handleClick}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '10px', fontSize: '0.9rem' }}>Ambos os Ícones</h3>
                            <ContainedButton
                                label="Ação"
                                displayIconLeft={true}
                                displayIconRight={true}
                                icon={<span style={{ fontSize: '16px' }}>⚡</span>}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>

                {/* Seção de controle de estado */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    marginBottom: '30px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                        Controle de Estado
                    </h2>

                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Estado atual:</strong> {currentState}
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Cliques:</strong> {clickCount}
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <button
                            onClick={() => handleStateChange('default')}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #1f2453',
                                borderRadius: '8px',
                                backgroundColor: currentState === 'default' ? '#1f2453' : 'white',
                                color: currentState === 'default' ? 'white' : '#1f2453',
                                cursor: 'pointer'
                            }}
                        >
                            Default
                        </button>
                        <button
                            onClick={() => handleStateChange('hover')}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #1f2453',
                                borderRadius: '8px',
                                backgroundColor: currentState === 'hover' ? '#1f2453' : 'white',
                                color: currentState === 'hover' ? 'white' : '#1f2453',
                                cursor: 'pointer'
                            }}
                        >
                            Hover
                        </button>
                        <button
                            onClick={() => handleStateChange('pressed')}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #1f2453',
                                borderRadius: '8px',
                                backgroundColor: currentState === 'pressed' ? '#1f2453' : 'white',
                                color: currentState === 'pressed' ? 'white' : '#1f2453',
                                cursor: 'pointer'
                            }}
                        >
                            Pressed
                        </button>
                        <button
                            onClick={() => handleStateChange('disable')}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #1f2453',
                                borderRadius: '8px',
                                backgroundColor: currentState === 'disable' ? '#1f2453' : 'white',
                                color: currentState === 'disable' ? 'white' : '#1f2453',
                                cursor: 'pointer'
                            }}
                        >
                            Disable
                        </button>
                    </div>

                    <ContainedButton
                        label="Botão Controlado"
                        state={currentState}
                        disabled={currentState === 'disable'}
                        onClick={handleClick}
                    />
                </div>

                {/* Seção de código de exemplo */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '30px',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef'
                }}>
                    <h2 style={{ color: '#1f2453', marginBottom: '20px' }}>
                        Código de Exemplo
                    </h2>

                    <pre style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        overflow: 'auto',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}>
                        <code>{`import { ContainedButton } from '@led-telecom/design-tokens';

function MyComponent() {
  const [state, setState] = useState('default');
  
  return (
    <div>
      {/* Botão básico */}
      <ContainedButton 
        label="Clique aqui" 
        onClick={() => console.log('Clicado!')} 
      />
      
      {/* Botão com ícone */}
      <ContainedButton 
        label="Salvar" 
        displayIconLeft={true}
        icon={<SaveIcon />}
        state="default"
      />
      
      {/* Botão com estado controlado */}
      <ContainedButton 
        label="Controlado" 
        state={state}
        disabled={state === 'disable'}
        onClick={() => setState('pressed')}
      />
    </div>
  );
}`}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ContainedButtonExample;
