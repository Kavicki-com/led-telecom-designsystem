import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { useState } from 'react';

/**
 * Meta configuração para o Storybook
 */
const meta: Meta<typeof Tab> = {
    title: 'Components/Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Tab do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=193-330&m=dev'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto da tab'
        },
        state: {
            control: 'select',
            options: ['default', 'disable'],
            description: 'Estado da tab'
        },
        active: {
            control: 'boolean',
            description: 'Se a tab está ativa'
        },
        disabled: {
            control: 'boolean',
            description: 'Se a tab está desabilitada'
        },
        onClick: {
            action: 'clicked',
            description: 'Função de callback para clique'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tab>;

/**
 * Story padrão - Tab em estado default
 */
export const Default: Story = {
    args: {
        label: 'Fatura',
        state: 'default',
        active: false,
        disabled: false
    }
};

/**
 * Story - Tab ativa
 */
export const Active: Story = {
    args: {
        label: 'Fatura',
        state: 'default',
        active: true,
        disabled: false
    }
};

/**
 * Story - Tab desabilitada
 */
export const Disabled: Story = {
    args: {
        label: 'Fatura',
        state: 'disable',
        active: false,
        disabled: true
    }
};

/**
 * Story - Tab com label customizado
 */
export const CustomLabel: Story = {
    args: {
        label: 'Relatórios',
        state: 'default',
        active: false,
        disabled: false
    }
};

/**
 * Story - Múltiplas tabs (exemplo de uso)
 */
export const MultipleTabs: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('fatura');

        const handleTabClick = (tabId: string) => {
            setActiveTab(tabId);
        };

        return (
            <div className="led-tabs-container">
                <Tab
                    label="Fatura"
                    active={activeTab === 'fatura'}
                    onClick={() => handleTabClick('fatura')}
                />
                <Tab
                    label="Relatórios"
                    active={activeTab === 'relatorios'}
                    onClick={() => handleTabClick('relatorios')}
                />
                <Tab
                    label="Configurações"
                    active={activeTab === 'configuracoes'}
                    onClick={() => handleTabClick('configuracoes')}
                />
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de uso com múltiplas tabs em um container com seleção funcional'
            }
        }
    }
};

/**
 * Story - Tab com interação
 */
export const Interactive: Story = {
    args: {
        label: 'Fatura',
        state: 'default',
        active: false,
        disabled: false,
        onClick: () => alert('Tab clicada!')
    },
    parameters: {
        docs: {
            description: {
                story: 'Tab com função de clique para demonstrar interatividade'
            }
        }
    }
};
