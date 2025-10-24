import React, { useState } from 'react';
import { BottomNavigation } from '../src/components/BottomNavigation';

/**
 * Exemplo de uso do componente BottomNavigation em React
 * Demonstra diferentes estados e funcionalidades do componente
 */
export const BottomNavigationExample: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveIndex(index);
        console.log(`Tab alterado para índice: ${index}`);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            padding: '20px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <h1 style={{
                color: '#1f2453',
                margin: 0,
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>
                BottomNavigation - LED Telecom Design System
            </h1>

            {/* Exemplo 1: Estado Padrão */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Estado Padrão (Home Ativo)
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com 6 itens: Home, Money, Notifications, Settings, Help e Profile.
                </p>
                <BottomNavigation
                    activeIndex={0}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Home ativo (índice 0)
                </div>
            </div>

            {/* Exemplo 2: Money Ativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Money Ativo
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com o item Money ativo.
                </p>
                <BottomNavigation
                    activeIndex={1}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Money ativo (índice 1)
                </div>
            </div>

            {/* Exemplo 3: Notifications Ativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Notifications Ativo
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com o item Notifications ativo.
                </p>
                <BottomNavigation
                    activeIndex={2}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Notifications ativo (índice 2)
                </div>
            </div>

            {/* Exemplo 4: Settings Ativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Settings Ativo
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com o item Settings ativo.
                </p>
                <BottomNavigation
                    activeIndex={3}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Settings ativo (índice 3)
                </div>
            </div>

            {/* Exemplo 5: Help Ativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Help Ativo
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com o item Help ativo.
                </p>
                <BottomNavigation
                    activeIndex={4}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Help ativo (índice 4)
                </div>
            </div>

            {/* Exemplo 6: Profile Ativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Profile Ativo
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior com o item Profile ativo.
                </p>
                <BottomNavigation
                    activeIndex={5}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#ffefc2',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#1f2453'
                }}>
                    Item Profile ativo (índice 5)
                </div>
            </div>

            {/* Exemplo 7: Desabilitado */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Estado Desabilitado
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior em estado desabilitado.
                </p>
                <BottomNavigation
                    activeIndex={0}
                    disabled={true}
                />
                <div style={{
                    background: '#fab3bd',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#e5102e'
                }}>
                    Navegação desabilitada
                </div>
            </div>

            {/* Exemplo 8: Interativo */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    Versão Interativa
                </h2>
                <p style={{
                    color: '#1f1f1f',
                    margin: 0,
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    Navegação inferior interativa. Clique nos itens para alternar.
                </p>
                <BottomNavigation
                    activeIndex={activeIndex}
                    onTabChange={handleTabChange}
                />
                <div style={{
                    background: '#98d2ac',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#2a613d'
                }}>
                    Índice ativo: {activeIndex}
                </div>
            </div>
        </div>
    );
};

export default BottomNavigationExample;