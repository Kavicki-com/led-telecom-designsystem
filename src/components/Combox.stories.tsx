import type { Meta, StoryObj } from '@storybook/react';
import { Combox } from './Combox';

const meta: Meta<typeof Combox> = {
    title: 'Components/Combox',
    component: Combox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Combox do LED Telecom - Dropdown com input seguindo o design system.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label do combox'
        },
        inputText: {
            control: 'text',
            description: 'Texto do input'
        },
        description: {
            control: 'text',
            description: 'Descrição do combox'
        },
        showDescription: {
            control: 'boolean',
            description: 'Se deve exibir a descrição'
        },
        showLabel: {
            control: 'boolean',
            description: 'Se deve exibir o label'
        },
        state: {
            control: 'select',
            options: ['default', 'open', 'disable'],
            description: 'Estado do combox'
        },
        options: {
            control: 'object',
            description: 'Opções do dropdown'
        },
        selectedOption: {
            control: 'text',
            description: 'Opção selecionada'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder do input'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o combox está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do input'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Combox>;

// Story padrão
export const Default: Story = {
    args: {
        label: 'Selecione uma opção',
        inputText: 'input-text',
        description: 'Escolha uma das opções disponíveis',
        showDescription: true,
        showLabel: true,
        state: 'default',
        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
        placeholder: 'Digite ou selecione...',
        disabled: false
    }
};

// Story com estado aberto
export const Open: Story = {
    args: {
        ...Default.args,
        state: 'open'
    }
};

// Story desabilitado
export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        state: 'disable'
    }
};

// Story sem label
export const WithoutLabel: Story = {
    args: {
        ...Default.args,
        showLabel: false
    }
};

// Story sem descrição
export const WithoutDescription: Story = {
    args: {
        ...Default.args,
        showDescription: false
    }
};

// Story com valor preenchido
export const WithValue: Story = {
    args: {
        ...Default.args,
        value: 'Opção selecionada',
        inputText: 'Opção selecionada'
    }
};

// Story com muitas opções
export const ManyOptions: Story = {
    args: {
        ...Default.args,
        options: [
            'Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5',
            'Opção 6', 'Opção 7', 'Opção 8', 'Opção 9', 'Opção 10'
        ]
    }
};
