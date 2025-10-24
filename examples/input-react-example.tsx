import React, { useState } from 'react';
import { Input } from '../src/components/Input';

/**
 * Exemplo de uso do componente Input do LED Telecom
 * Demonstra diferentes estados e configurações do componente
 */
const InputReactExample: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        search: ''
    });

    const handleInputChange = (field: string) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: 'Montserrat, sans-serif'
        }}>
            <h1 style={{
                color: 'var(--content-primary, #1f2453)',
                textAlign: 'center',
                marginBottom: '40px'
            }}>
                LED Telecom - Componente Input (React)
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Estados do Input */}
                <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: '#fafafa'
                }}>
                    <h3 style={{ marginBottom: '20px', color: 'var(--content-dark, #1f1f1f)' }}>
                        Estados do Input
                    </h3>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Estado Default"
                            state="default"
                            placeholder="Digite aqui..."
                            value={formData.name}
                            onChange={handleInputChange('name')}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Estado Hover"
                            state="hover"
                            placeholder="Digite aqui..."
                            value=""
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Estado OnClick"
                            state="onclick"
                            placeholder="Digite aqui..."
                            value=""
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Estado Filled"
                            state="filled"
                            placeholder="Digite aqui..."
                            value="Texto preenchido"
                        />
                    </div>

                    <div>
                        <Input
                            label="Estado Disable"
                            state="disable"
                            placeholder="Digite aqui..."
                            value=""
                            disabled={true}
                        />
                    </div>
                </div>

                {/* Tipos de Input */}
                <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: '#fafafa'
                }}>
                    <h3 style={{ marginBottom: '20px', color: 'var(--content-dark, #1f1f1f)' }}>
                        Tipos de Input
                    </h3>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Nome"
                            type="text"
                            placeholder="Digite seu nome"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Senha"
                            type="password"
                            placeholder="Digite sua senha"
                            value={formData.password}
                            onChange={handleInputChange('password')}
                        />
                    </div>

                    <div>
                        <Input
                            label="Telefone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            description="Digite seu número de telefone com DDD"
                            showDescription={true}
                            value={formData.phone}
                            onChange={handleInputChange('phone')}
                        />
                    </div>
                </div>

                {/* Input com Ícone */}
                <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: '#fafafa'
                }}>
                    <h3 style={{ marginBottom: '20px', color: 'var(--content-dark, #1f1f1f)' }}>
                        Input com Ícone
                    </h3>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Buscar"
                            placeholder="Digite para buscar..."
                            showIcon={true}
                            icon={
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 9.5L13 12M10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                            value={formData.search}
                            onChange={handleInputChange('search')}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            label="Input sem Label"
                            showLabel={false}
                            placeholder="Digite aqui..."
                            value=""
                        />
                    </div>

                    <div>
                        <Input
                            label="Input com Descrição"
                            description="Esta é uma descrição do campo de entrada"
                            showDescription={true}
                            placeholder="Digite aqui..."
                            value=""
                        />
                    </div>
                </div>
            </div>

            {/* Formulário de Exemplo */}
            <div style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '30px',
                backgroundColor: '#fafafa',
                marginBottom: '40px'
            }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--content-dark, #1f1f1f)' }}>
                    Formulário de Exemplo
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    <Input
                        label="Nome Completo"
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={formData.password}
                        onChange={handleInputChange('password')}
                    />

                    <Input
                        label="Telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                    />
                </div>

                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#666'
                }}>
                    <strong>Dados do Formulário:</strong>
                    <pre style={{ margin: '10px 0 0 0', fontSize: '12px' }}>
                        {JSON.stringify(formData, null, 2)}
                    </pre>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
            }}>
                <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                    Componente Input do LED Telecom Design System<br />
                    Baseado no design do Figma: <a
                        href="https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1124&m=dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--content-primary, #1f2453)' }}
                    >
                        Ver no Figma
                    </a>
                </p>
            </div>
        </div>
    );
};

export default InputReactExample;
