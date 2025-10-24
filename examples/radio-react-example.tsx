import React, { useState } from 'react';
import { Radio } from '../src/components/Radio';

/**
 * Exemplo de uso do componente Radio do LED Telecom
 * Demonstra diferentes cenários de uso do componente
 */
export const RadioExample: React.FC = () => {
    const [selectedType, setSelectedType] = useState('individual');
    const [selectedPlan, setSelectedPlan] = useState('basic');
    const [newsletter, setNewsletter] = useState(false);
    const [terms, setTerms] = useState(false);

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'Montserrat, sans-serif'
        }}>
            <h1 style={{
                color: '#1f2453',
                fontFamily: 'Raleway, sans-serif',
                marginBottom: '30px'
            }}>
                LED Telecom - Exemplo do Componente Radio
            </h1>

            {/* Seção 1: Tipo de Cliente */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #dadada',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    1. Tipo de Cliente
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Radio
                        label="Pessoa Física"
                        state={selectedType === 'individual' ? 'on' : 'off'}
                        name="clientType"
                        value="individual"
                        onChange={(checked) => checked && setSelectedType('individual')}
                    />
                    <Radio
                        label="Pessoa Jurídica"
                        state={selectedType === 'company' ? 'on' : 'off'}
                        name="clientType"
                        value="company"
                        onChange={(checked) => checked && setSelectedType('company')}
                    />
                </div>
            </section>

            {/* Seção 2: Plano de Serviço */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #dadada',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    2. Escolha seu Plano
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Radio
                        label="Plano Básico - R$ 29,90/mês"
                        state={selectedPlan === 'basic' ? 'on' : 'off'}
                        name="plan"
                        value="basic"
                        onChange={(checked) => checked && setSelectedPlan('basic')}
                    />
                    <Radio
                        label="Plano Intermediário - R$ 49,90/mês"
                        state={selectedPlan === 'intermediate' ? 'on' : 'off'}
                        name="plan"
                        value="intermediate"
                        onChange={(checked) => checked && setSelectedPlan('intermediate')}
                    />
                    <Radio
                        label="Plano Premium - R$ 79,90/mês"
                        state={selectedPlan === 'premium' ? 'on' : 'off'}
                        name="plan"
                        value="premium"
                        onChange={(checked) => checked && setSelectedPlan('premium')}
                    />
                </div>
            </section>

            {/* Seção 3: Opções Adicionais */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #dadada',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    3. Opções Adicionais
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Radio
                        label="Receber newsletter com ofertas especiais"
                        state={newsletter ? 'on' : 'off'}
                        name="newsletter"
                        value="yes"
                        onChange={setNewsletter}
                    />
                    <Radio
                        label="Aceito os termos e condições"
                        state={terms ? 'on' : 'off'}
                        name="terms"
                        value="accepted"
                        onChange={setTerms}
                    />
                </div>
            </section>

            {/* Seção 4: Estados Desabilitados */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #dadada',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    4. Estados Desabilitados
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Radio
                        label="Opção desabilitada (não disponível)"
                        state="off"
                        disabled={true}
                        name="disabled"
                    />
                    <Radio
                        label="Opção desabilitada e selecionada"
                        state="on"
                        disabled={true}
                        name="disabled"
                    />
                </div>
            </section>

            {/* Seção 5: Layout Horizontal */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #dadada',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    5. Layout Horizontal
                </h2>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Radio
                        label="Sim"
                        state="on"
                        name="horizontal"
                        value="yes"
                    />
                    <Radio
                        label="Não"
                        state="off"
                        name="horizontal"
                        value="no"
                    />
                </div>
            </section>

            {/* Resumo das Seleções */}
            <section style={{
                padding: '20px',
                border: '2px solid #1f2453',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{
                    color: '#1f2453',
                    fontFamily: 'Raleway, sans-serif',
                    marginBottom: '20px'
                }}>
                    Resumo das Seleções
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p><strong>Tipo de Cliente:</strong> {selectedType === 'individual' ? 'Pessoa Física' : 'Pessoa Jurídica'}</p>
                    <p><strong>Plano Selecionado:</strong> {
                        selectedPlan === 'basic' ? 'Plano Básico' :
                            selectedPlan === 'intermediate' ? 'Plano Intermediário' : 'Plano Premium'
                    }</p>
                    <p><strong>Newsletter:</strong> {newsletter ? 'Sim' : 'Não'}</p>
                    <p><strong>Termos Aceitos:</strong> {terms ? 'Sim' : 'Não'}</p>
                </div>
            </section>
        </div>
    );
};

export default RadioExample;
