import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Breadcrumb do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=191-231&m=dev'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do breadcrumb',
            defaultValue: 'passo 1'
        },
        state: {
            control: 'select',
            options: ['default', 'disable'],
            description: 'Estado do breadcrumb',
            defaultValue: 'default'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o breadcrumb está desabilitado',
            defaultValue: false
        },
        showArrow: {
            control: 'boolean',
            description: 'Se deve exibir o ícone de seta',
            defaultValue: true
        },
        onClick: {
            action: 'clicked',
            description: 'Função de callback para clique'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story Default - Estado padrão
export const Default: Story = {
    args: {
        label: 'passo 1',
        state: 'default',
        disabled: false,
        showArrow: true
    }
};

// Story Disable - Estado desabilitado
export const Disabled: Story = {
    args: {
        label: 'passo 1',
        state: 'disable',
        disabled: true,
        showArrow: true
    }
};

// Story Without Arrow - Sem seta
export const WithoutArrow: Story = {
    args: {
        label: 'passo 1',
        state: 'default',
        disabled: false,
        showArrow: false
    }
};

// Story Custom Label - Label customizado
export const CustomLabel: Story = {
    args: {
        label: 'Configurações',
        state: 'default',
        disabled: false,
        showArrow: true
    }
};

// Story Long Label - Label longo
export const LongLabel: Story = {
    args: {
        label: 'Configurações de Sistema Avançadas',
        state: 'default',
        disabled: false,
        showArrow: true
    }
};

// Story Interactive - Com interação
export const Interactive: Story = {
    args: {
        label: 'Clique aqui',
        state: 'default',
        disabled: false,
        showArrow: true,
        onClick: () => alert('Breadcrumb clicado!')
    }
};

// Story With Custom Arrow - Com ícone customizado
export const WithCustomArrow: Story = {
    args: {
        label: 'passo 1',
        state: 'default',
        disabled: false,
        showArrow: true,
        arrowIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
};

// Story Multiple Breadcrumbs - Múltiplos breadcrumbs
export const MultipleBreadcrumbs: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Breadcrumb label="Início" state="default" showArrow={true} />
            <Breadcrumb label="Produtos" state="default" showArrow={true} />
            <Breadcrumb label="Telefonia" state="default" showArrow={true} />
            <Breadcrumb label="Configurações" state="disable" disabled={true} showArrow={false} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de múltiplos breadcrumbs formando uma navegação hierárquica'
            }
        }
    }
};

// Story All States - Todos os estados
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Default:</span>
                <Breadcrumb label="passo 1" state="default" showArrow={true} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ minWidth: '100px', fontSize: '14px' }}>Disabled:</span>
                <Breadcrumb label="passo 1" state="disable" disabled={true} showArrow={true} />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparação de todos os estados disponíveis do componente'
            }
        }
    }
};
