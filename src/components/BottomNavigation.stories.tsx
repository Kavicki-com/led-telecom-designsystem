import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
    title: 'Components/BottomNavigation',
    component: BottomNavigation,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de navegação inferior do LED Telecom. Baseado no design do Figma com suporte a 4-6 itens de navegação. Use o controle itemCount para configurar o número de itens.'
            }
        }
    },
    argTypes: {
        activeIndex: {
            control: { type: 'number', min: 0, max: 5 },
            description: 'Índice do item ativo (baseado no número de itens)',
            defaultValue: 0
        },
        itemCount: {
            control: { type: 'select', options: [4, 5, 6] },
            description: 'Número de itens na navegação (4-6)',
            defaultValue: 6
        },
        onTabChange: {
            action: 'tabChanged',
            description: 'Função chamada quando o tab é alterado'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Se a navegação está desabilitada',
            defaultValue: false
        },
        className: {
            control: { type: 'text' },
            description: 'Classes CSS adicionais'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * História principal do BottomNavigation
 * Componente interativo que permite testar todas as funcionalidades
 */
export const Default: Story = {
    args: {
        activeIndex: 0,
        itemCount: 6,
        disabled: false,
        onTabChange: (index: number) => {
            console.log(`Tab alterado para índice: ${index}`);
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Componente interativo que permite testar todas as funcionalidades. Use os controles para alterar o número de itens (4-6), o índice ativo ou clique nos itens para testar a navegação.'
            }
        }
    }
};


/**
 * História com 4 itens
 * Mostra o componente com apenas 4 itens de navegação
 */
export const FourItems: Story = {
    args: {
        activeIndex: 0,
        itemCount: 4,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Navegação com 4 itens: Home, Money, Notifications e Settings.'
            }
        }
    }
};

/**
 * História com 5 itens
 * Mostra o componente com 5 itens de navegação
 */
export const FiveItems: Story = {
    args: {
        activeIndex: 0,
        itemCount: 5,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Navegação com 5 itens: Home, Money, Notifications, Settings e Help.'
            }
        }
    }
};

/**
 * História desabilitada
 * Mostra o componente em estado desabilitado
 */
export const Disabled: Story = {
    args: {
        activeIndex: 0,
        itemCount: 6,
        disabled: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Estado desabilitado onde os itens não podem ser clicados.'
            }
        }
    }
};


/**
 * História responsiva
 * Mostra como o componente se comporta em diferentes tamanhos de tela
 */
export const Responsive: Story = {
    args: {
        activeIndex: 1,
        itemCount: 6,
        disabled: false
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        },
        docs: {
            description: {
                story: 'Versão responsiva para dispositivos móveis.'
            }
        }
    }
};