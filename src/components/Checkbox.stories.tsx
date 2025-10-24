import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Checkbox do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1025&m=dev. Permite seleção múltipla ao contrário do Radio.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do label do checkbox'
        },
        initialState: {
            control: 'select',
            options: ['off', 'on'],
            description: 'Estado inicial do checkbox (on/off)'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o checkbox está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do checkbox para formulários'
        },
        name: {
            control: 'text',
            description: 'Nome do grupo de checkboxes'
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
type Story = StoryObj<typeof Checkbox>;

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

// Story para grupo de checkboxes com seleção múltipla
export const CheckboxGroup: Story = {
    render: () => {
        const [selectedValues, setSelectedValues] = React.useState<string[]>(['option1']);

        const handleCheckboxChange = (value: string, checked: boolean) => {
            if (checked) {
                setSelectedValues(prev => [...prev, value]);
            } else {
                setSelectedValues(prev => prev.filter(v => v !== value));
            }
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Checkbox
                    label="Primeira opção"
                    checked={selectedValues.includes('option1')}
                    name="checkbox-group"
                    value="option1"
                    onChange={(checked) => handleCheckboxChange('option1', checked)}
                />
                <Checkbox
                    label="Segunda opção"
                    checked={selectedValues.includes('option2')}
                    name="checkbox-group"
                    value="option2"
                    onChange={(checked) => handleCheckboxChange('option2', checked)}
                />
                <Checkbox
                    label="Terceira opção"
                    checked={selectedValues.includes('option3')}
                    name="checkbox-group"
                    value="option3"
                    onChange={(checked) => handleCheckboxChange('option3', checked)}
                />
                <Checkbox
                    label="Quarta opção"
                    checked={selectedValues.includes('option4')}
                    name="checkbox-group"
                    value="option4"
                    onChange={(checked) => handleCheckboxChange('option4', checked)}
                />
                <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <strong>Opções selecionadas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Nenhuma'}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de uso do componente Checkbox em um grupo de opções - permite seleção múltipla simultânea'
            }
        }
    }
};

// Story para demonstração de diferentes estados
export const AllStates: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h4>Estados normais:</h4>
                    <Checkbox label="Checkbox desmarcado" initialState="off" />
                    <Checkbox label="Checkbox marcado" initialState="on" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h4>Estados desabilitados:</h4>
                    <Checkbox label="Checkbox desabilitado" initialState="off" disabled />
                    <Checkbox label="Checkbox desabilitado e marcado" initialState="on" disabled />
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstração de todos os estados possíveis do componente Checkbox'
            }
        }
    }
};
