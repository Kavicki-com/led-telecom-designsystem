import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

/**
 * Meta configuração do Storybook para o componente Tag
 */
const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Tag do LED Telecom para exibir status e informações categorizadas. Baseado no design do Figma.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto da tag'
        },
        variant: {
            control: 'select',
            options: ['Vencido', 'Em atraso', 'Pago'],
            description: 'Variante da tag'
        },
        state: {
            control: 'select',
            options: ['default', 'hover', 'pressed'],
            description: 'Estado da tag'
        },
        clickable: {
            control: 'boolean',
            description: 'Se a tag é clicável'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * Story padrão - Tag Vencido
 */
export const Default: Story = {
    args: {
        label: 'Vencido',
        variant: 'Vencido',
        state: 'default',
        clickable: false
    }
};

/**
 * Story - Tag Em atraso
 */
export const EmAtraso: Story = {
    args: {
        label: 'Em Atraso',
        variant: 'Em atraso',
        state: 'default',
        clickable: false
    }
};

/**
 * Story - Tag Pago
 */
export const Pago: Story = {
    args: {
        label: 'Pago',
        variant: 'Pago',
        state: 'default',
        clickable: false
    }
};

/**
 * Story - Tag clicável
 */
export const Clickable: Story = {
    args: {
        label: 'Vencido',
        variant: 'Vencido',
        state: 'default',
        clickable: true,
        onClick: () => alert('Tag clicada!')
    }
};

/**
 * Story - Tag em estado hover
 */
export const Hover: Story = {
    args: {
        label: 'Em Atraso',
        variant: 'Em atraso',
        state: 'hover',
        clickable: false
    }
};

/**
 * Story - Tag em estado pressed
 */
export const Pressed: Story = {
    args: {
        label: 'Pago',
        variant: 'Pago',
        state: 'pressed',
        clickable: false
    }
};

/**
 * Story - Todas as variantes
 */
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag label="Vencido" variant="Vencido" />
            <Tag label="Em Atraso" variant="Em atraso" />
            <Tag label="Pago" variant="Pago" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas as variantes do componente Tag lado a lado.'
            }
        }
    }
};

/**
 * Story - Tags clicáveis
 */
export const ClickableVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag
                label="Vencido"
                variant="Vencido"
                clickable={true}
                onClick={() => alert('Tag Vencido clicada!')}
            />
            <Tag
                label="Em Atraso"
                variant="Em atraso"
                clickable={true}
                onClick={() => alert('Tag Em Atraso clicada!')}
            />
            <Tag
                label="Pago"
                variant="Pago"
                clickable={true}
                onClick={() => alert('Tag Pago clicada!')}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas as variantes do componente Tag em modo clicável.'
            }
        }
    }
};

/**
 * Story - Estados interativos
 */
export const InteractiveStates: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag label="Default" variant="Vencido" state="default" />
            <Tag label="Hover" variant="Em atraso" state="hover" />
            <Tag label="Pressed" variant="Pago" state="pressed" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes estados do componente Tag.'
            }
        }
    }
};
