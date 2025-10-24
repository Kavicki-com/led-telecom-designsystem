import React, { useState } from 'react';
import { BottomNavigation } from '../src/components/BottomNavigation';

/**
 * Exemplo de teste do componente BottomNavigation
 * Demonstra a funcionalidade de mudança de seleção
 */
export const BottomNavigationTest: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabChange = (index: number) => {
        console.log(`Tab changed to index: ${index}`);
        setActiveIndex(index);
    };

    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <h1 style={{
                color: '#1f2453',
                textAlign: 'center',
                marginBottom: '20px'
            }}>
                Teste BottomNavigation - LED Telecom
            </h1>

            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                margin: '0 auto'
            }}>
                <div style={{
                    backgroundColor: '#fff3cd',
                    padding: '15px',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    fontSize: '14px',
                    color: '#856404'
                }}>
                    <strong>Instruções:</strong> Clique em qualquer item da navegação para testar a mudança de seleção.
                </div>

                <BottomNavigation
                    activeIndex={activeIndex}
                    onTabChange={handleTabChange}
                />

                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    background: '#e8f5e8',
                    borderRadius: '4px',
                    fontSize: '14px',
                    textAlign: 'center'
                }}>
                    ✅ <strong>Item ativo:</strong> {activeIndex === 0 ? 'Home' :
                        activeIndex === 1 ? 'Money' :
                            activeIndex === 2 ? 'Notifications' :
                                activeIndex === 3 ? 'Settings' :
                                    activeIndex === 4 ? 'Help' : 'Profile'} (índice {activeIndex})
                </div>
            </div>
        </div>
    );
};

export default BottomNavigationTest;
