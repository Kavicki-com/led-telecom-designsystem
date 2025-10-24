import React, { useState } from 'react';
import { Combox } from '../src/components/Combox';

/**
 * Exemplo de uso do componente Combox
 * Demonstra diferentes configurações e estados
 */
export const ComboxExample: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Opções para diferentes combox
    const cities = [
        'São Paulo',
        'Rio de Janeiro',
        'Belo Horizonte',
        'Salvador',
        'Brasília',
        'Fortaleza',
        'Manaus',
        'Curitiba',
        'Recife',
        'Goiânia'
    ];

    const countries = [
        'Brasil',
        'Argentina',
        'Chile',
        'Colômbia',
        'México',
        'Peru',
        'Uruguai',
        'Venezuela'
    ];

    const categories = [
        'Tecnologia',
        'Saúde',
        'Educação',
        'Finanças',
        'Varejo',
        'Indústria',
        'Serviços',
        'Outros'
    ];

    // Handlers para os combox
    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        console.log('Cidade alterada:', value);
    };

    const handleCitySelect = (option: string) => {
        setSelectedCity(option);
        console.log('Cidade selecionada:', option);
    };

    const handleCountryChange = (value: string) => {
        setSelectedCountry(value);
        console.log('País alterado:', value);
    };

    const handleCountrySelect = (option: string) => {
        setSelectedCountry(option);
        console.log('País selecionado:', option);
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        console.log('Categoria alterada:', value);
    };

    const handleCategorySelect = (option: string) => {
        setSelectedCategory(option);
        console.log('Categoria selecionada:', option);
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Montserrat, sans-serif'
        }}>
            <h1>Exemplos do Componente Combox</h1>
            <p>Demonstração de diferentes configurações do componente Combox do LED Telecom.</p>

            {/* Combox Básico */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox Básico</h2>
                <Combox
                    label="Selecione uma cidade"
                    description="Escolha sua cidade de residência"
                    options={cities}
                    value={selectedCity}
                    onChange={handleCityChange}
                    onOptionSelect={handleCitySelect}
                    placeholder="Digite ou selecione uma cidade..."
                />
            </div>

            {/* Combox com Estado Aberto */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox Aberto</h2>
                <Combox
                    label="Selecione um país"
                    description="Escolha seu país de origem"
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    onOptionSelect={handleCountrySelect}
                    state="open"
                    placeholder="Digite ou selecione um país..."
                />
            </div>

            {/* Combox Desabilitado */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox Desabilitado</h2>
                <Combox
                    label="Categoria (Desabilitado)"
                    description="Este combox está desabilitado"
                    options={categories}
                    disabled={true}
                    state="disable"
                />
            </div>

            {/* Combox sem Label */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox sem Label</h2>
                <Combox
                    description="Combox sem label visível"
                    options={categories}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    onOptionSelect={handleCategorySelect}
                    showLabel={false}
                    placeholder="Selecione uma categoria..."
                />
            </div>

            {/* Combox sem Descrição */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox sem Descrição</h2>
                <Combox
                    label="Selecione uma opção"
                    options={['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4']}
                    showDescription={false}
                    placeholder="Digite ou selecione..."
                />
            </div>

            {/* Combox com Muitas Opções */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox com Muitas Opções</h2>
                <Combox
                    label="Selecione um estado"
                    description="Lista de todos os estados brasileiros"
                    options={[
                        'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia',
                        'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',
                        'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
                        'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',
                        'Pernambuco', 'Piauí', 'Rio de Janeiro',
                        'Rio Grande do Norte', 'Rio Grande do Sul',
                        'Rondônia', 'Roraima', 'Santa Catarina',
                        'São Paulo', 'Sergipe', 'Tocantins'
                    ]}
                    placeholder="Digite ou selecione um estado..."
                />
            </div>

            {/* Combox com Callbacks */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Combox com Callbacks</h2>
                <Combox
                    label="Combox com Logs"
                    description="Abra o console para ver os logs dos callbacks"
                    options={['Opção A', 'Opção B', 'Opção C']}
                    onChange={(value) => console.log('onChange:', value)}
                    onOptionSelect={(option) => console.log('onOptionSelect:', option)}
                    onFocus={() => console.log('onFocus: Combox recebeu foco')}
                    onBlur={() => console.log('onBlur: Combox perdeu foco')}
                    placeholder="Digite ou selecione..."
                />
            </div>

            {/* Informações dos Estados */}
            <div style={{
                marginTop: '40px',
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
            }}>
                <h3>Estados Atuais:</h3>
                <p><strong>Cidade selecionada:</strong> {selectedCity || 'Nenhuma'}</p>
                <p><strong>País selecionado:</strong> {selectedCountry || 'Nenhum'}</p>
                <p><strong>Categoria selecionada:</strong> {selectedCategory || 'Nenhuma'}</p>
            </div>
        </div>
    );
};

export default ComboxExample;
