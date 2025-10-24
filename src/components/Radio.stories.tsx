import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Radio do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1024&m=dev'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do label do radio'
        },
        initialState: {
            control: 'select',
            options: ['off', 'on'],
            description: 'Estado inicial do radio (on/off)'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o radio está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do radio para formulários'
        },
        name: {
            control: 'text',
            description: 'Nome do grupo de radio buttons'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        },
        id: {
            control: 'text',
            description: 'ID único do componente'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Radio>;

// Story padrão
export const Default: Story = {
    args: {
        label: 'Opção 1',
        initialState: 'off',
        disabled: false
    }
};

// Story com estado inicial "on"
export const Checked: Story = {
    args: {
        label: 'Opção selecionada',
        initialState: 'on',
        disabled: false
    }
};

// Story desabilitado
export const Disabled: Story = {
    args: {
        label: 'Opção desabilitada',
        initialState: 'off',
        disabled: true
    }
};

// Story desabilitado e selecionado
export const DisabledChecked: Story = {
    args: {
        label: 'Opção desabilitada e selecionada',
        initialState: 'on',
        disabled: true
    }
};

// Story para grupo de radios
export const RadioGroup: Story = {
    render: () => {
        const [selectedValue, setSelectedValue] = React.useState<string>('option1');

        const handleRadioChange = (value: string, checked: boolean) => {
            if (checked) {
                setSelectedValue(value);
            }
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Radio
                    label="Primeira opção"
                    checked={selectedValue === 'option1'}
                    name="radio-group"
                    value="option1"
                    onChange={(checked) => handleRadioChange('option1', checked)}
                />
                <Radio
                    label="Segunda opção"
                    checked={selectedValue === 'option2'}
                    name="radio-group"
                    value="option2"
                    onChange={(checked) => handleRadioChange('option2', checked)}
                />
                <Radio
                    label="Terceira opção"
                    checked={selectedValue === 'option3'}
                    name="radio-group"
                    value="option3"
                    onChange={(checked) => handleRadioChange('option3', checked)}
                />
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <strong>Opção selecionada:</strong> {selectedValue}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de uso do componente Radio em um grupo de opções - apenas uma pode ser selecionada por vez'
            }
        }
    }
};
