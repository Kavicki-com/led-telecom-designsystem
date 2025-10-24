import type { Meta, StoryObj } from '@storybook/react';
import { GhostButton } from './GhostButton';

const meta: Meta<typeof GhostButton> = {
    title: 'Components/GhostButton',
    component: GhostButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de botão ghost do Design System LED Telecom com diferentes variantes, estados e configurações.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do botão',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'button' },
            },
        },
        displayLabel: {
            control: 'boolean',
            description: 'Se deve exibir o label',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        displayIconLeft: {
            control: 'boolean',
            description: 'Exibir ícone à esquerda',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        displayIconRight: {
            control: 'boolean',
            description: 'Exibir ícone à direita',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        icon: {
            control: 'select',
            options: ['Sem ícone', 'iconPlus', 'iconCheck', 'iconArrow'],
            mapping: {
                'Sem ícone': null,
                'iconPlus': '+',
                'iconCheck': '✓',
                'iconArrow': '→',
            },
            description: 'Ícone do botão',
            table: {
                type: { summary: 'ReactNode' },
                defaultValue: { summary: 'null' },
            },
        },
        state: {
            control: 'select',
            options: ['default', 'disable', 'hover', 'pressed', 'state5'],
            description: 'Estado visual do botão',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'default' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Se o botão está desabilitado',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Função de callback para clique',
            table: {
                type: { summary: 'function' },
            },
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '""' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal - Default
export const Default: Story = {
    args: {
        label: 'Button text',
        displayLabel: true,
        displayIconLeft: false,
        displayIconRight: true,
        icon: 'iconPlus',
        state: 'default',
        disabled: false,
    },
};

// Story com ícone à esquerda
export const WithLeftIcon: Story = {
    args: {
        label: 'Button text',
        displayLabel: true,
        displayIconLeft: true,
        displayIconRight: false,
        icon: 'iconCheck',
        state: 'default',
        disabled: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Botão ghost com ícone à esquerda do texto.',
            },
        },
    },
};

// Story com ícone à direita
export const WithRightIcon: Story = {
    args: {
        label: 'Button text',
        displayLabel: true,
        displayIconLeft: false,
        displayIconRight: true,
        icon: 'iconArrow',
        state: 'default',
        disabled: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Botão ghost com ícone à direita do texto.',
            },
        },
    },
};

// Story apenas com ícone
export const IconOnly: Story = {
    args: {
        label: '',
        displayLabel: false,
        displayIconLeft: true,
        displayIconRight: false,
        icon: 'iconPlus',
        state: 'default',
        disabled: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Botão ghost apenas com ícone, sem texto.',
            },
        },
    },
};

// Story desabilitado
export const Disabled: Story = {
    args: {
        label: 'Button text',
        displayLabel: true,
        displayIconLeft: false,
        displayIconRight: false,
        state: 'disable',
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Botão ghost desabilitado - não interativo.',
            },
        },
    },
};

// Story com diferentes estados
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <GhostButton label="Default" state="default" />
            <GhostButton label="Hover" state="hover" />
            <GhostButton label="Pressed" state="pressed" />
            <GhostButton label="State5" state="state5" />
            <GhostButton label="Disabled" state="disable" disabled />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes estados visuais do botão ghost.',
            },
        },
    },
};

// Story comparando com outros botões
export const Comparison: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Contained</span>
                <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <GhostButton label="Button" state="default" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Outlined</span>
                <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <GhostButton label="Button" state="default" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Ghost</span>
                <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <GhostButton label="Button" state="default" />
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparação entre diferentes tipos de botão.',
            },
        },
    },
};
