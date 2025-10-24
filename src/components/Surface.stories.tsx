import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Surface } from './Surface';

/**
 * Meta configuração do Storybook para o componente Surface
 */
const meta: Meta<typeof Surface> = {
    title: 'Components/Surface',
    component: Surface,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente versátil para criar cards e superfícies seguindo o design system LED Telecom. Suporta múltiplas variantes, tamanhos e estados.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: { type: 'text' },
            description: 'Conteúdo do surface',
            table: {
                type: { summary: 'React.ReactNode' }
            }
        },
        variant: {
            control: { type: 'select' },
            options: ['standard', 'primary', 'secondary', 'grey', 'error', 'success', 'warning', 'info'],
            description: 'Variante de cor do surface',
            table: {
                type: { summary: "'standard' | 'primary' | 'secondary' | 'grey' | 'error' | 'success' | 'warning' | 'info'" },
                defaultValue: { summary: "'standard'" }
            }
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large', 'xlarge'],
            description: 'Tamanho do surface',
            table: {
                type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
                defaultValue: { summary: "'medium'" }
            }
        },
        elevation: {
            control: { type: 'select' },
            options: ['none', 'low', 'medium', 'high'],
            description: 'Elevação do surface',
            table: {
                type: { summary: "'none' | 'low' | 'medium' | 'high'" },
                defaultValue: { summary: "'medium'" }
            }
        },
        clickable: {
            control: { type: 'boolean' },
            description: 'Se o surface é clicável',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Se o surface está desabilitado',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        loading: {
            control: { type: 'boolean' },
            description: 'Se o surface está em estado de loading',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        bordered: {
            control: { type: 'boolean' },
            description: 'Se o surface tem borda',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        asCard: {
            control: { type: 'boolean' },
            description: 'Se o surface é um card',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        cardTitle: {
            control: { type: 'text' },
            description: 'Título do card (se asCard for true)',
            table: {
                type: { summary: 'string' }
            }
        },
        cardSubtitle: {
            control: { type: 'text' },
            description: 'Subtítulo do card (se asCard for true)',
            table: {
                type: { summary: 'string' }
            }
        },
        shadow: {
            control: { type: 'boolean' },
            description: 'Se o surface tem sombra',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' }
            }
        },
        hover: {
            control: { type: 'boolean' },
            description: 'Se o surface tem hover effect',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Surface Básico
 */
export const Basic: Story = {
    args: {
        children: 'Conteúdo básico do surface',
        variant: 'standard',
        size: 'medium',
        elevation: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'Surface básico com configurações padrão.'
            }
        }
    }
};

/**
 * Surface como Card
 */
export const Card: Story = {
    args: {
        asCard: true,
        cardTitle: 'Título do Card',
        cardSubtitle: 'Subtítulo do card com descrição',
        children: 'Este é o conteúdo principal do card. Aqui você pode colocar qualquer conteúdo como texto, imagens, botões, etc.',
        variant: 'standard',
        size: 'medium',
        elevation: 'medium',
        shadow: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Surface configurado como card com título, subtítulo e conteúdo.'
            }
        }
    }
};

/**
 * Variantes de Cor
 */
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <Surface variant="standard" size="medium">
                <h4>Standard</h4>
                <p>Surface padrão</p>
            </Surface>
            <Surface variant="primary" size="medium">
                <h4>Primary</h4>
                <p>Surface primário</p>
            </Surface>
            <Surface variant="secondary" size="medium">
                <h4>Secondary</h4>
                <p>Surface secundário</p>
            </Surface>
            <Surface variant="grey" size="medium">
                <h4>Grey</h4>
                <p>Surface cinza</p>
            </Surface>
            <Surface variant="error" size="medium">
                <h4>Error</h4>
                <p>Surface de erro</p>
            </Surface>
            <Surface variant="success" size="medium">
                <h4>Success</h4>
                <p>Surface de sucesso</p>
            </Surface>
            <Surface variant="warning" size="medium">
                <h4>Warning</h4>
                <p>Surface de aviso</p>
            </Surface>
            <Surface variant="info" size="medium">
                <h4>Info</h4>
                <p>Surface informativo</p>
            </Surface>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Todas as variantes de cor disponíveis para o Surface.'
            }
        }
    }
};

/**
 * Tamanhos
 */
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <Surface variant="standard" size="small">
                <h4>Small</h4>
                <p>Surface pequeno</p>
            </Surface>
            <Surface variant="standard" size="medium">
                <h4>Medium</h4>
                <p>Surface médio (padrão)</p>
            </Surface>
            <Surface variant="standard" size="large">
                <h4>Large</h4>
                <p>Surface grande</p>
            </Surface>
            <Surface variant="standard" size="xlarge">
                <h4>XLarge</h4>
                <p>Surface extra grande</p>
            </Surface>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes tamanhos disponíveis para o Surface.'
            }
        }
    }
};

/**
 * Elevações
 */
export const Elevations: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Surface variant="standard" elevation="none">
                <h4>None</h4>
                <p>Sem elevação</p>
            </Surface>
            <Surface variant="standard" elevation="low">
                <h4>Low</h4>
                <p>Elevação baixa</p>
            </Surface>
            <Surface variant="standard" elevation="medium">
                <h4>Medium</h4>
                <p>Elevação média</p>
            </Surface>
            <Surface variant="standard" elevation="high">
                <h4>High</h4>
                <p>Elevação alta</p>
            </Surface>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes níveis de elevação (sombra) disponíveis.'
            }
        }
    }
};

/**
 * Surface Clicável
 */
export const Clickable: Story = {
    args: {
        children: 'Clique em mim!',
        variant: 'primary',
        size: 'medium',
        clickable: true,
        hover: true,
        onClick: () => alert('Surface clicado!')
    },
    parameters: {
        docs: {
            description: {
                story: 'Surface clicável com efeito hover.'
            }
        }
    }
};

/**
 * Estados
 */
export const States: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <Surface variant="standard" size="medium">
                <h4>Normal</h4>
                <p>Estado normal</p>
            </Surface>
            <Surface variant="standard" size="medium" disabled>
                <h4>Disabled</h4>
                <p>Surface desabilitado</p>
            </Surface>
            <Surface variant="standard" size="medium" loading>
                <h4>Loading</h4>
                <p>Surface com loading</p>
            </Surface>
            <Surface variant="standard" size="medium" bordered>
                <h4>Bordered</h4>
                <p>Surface com borda</p>
            </Surface>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes estados do Surface: normal, desabilitado, loading e com borda.'
            }
        }
    }
};

