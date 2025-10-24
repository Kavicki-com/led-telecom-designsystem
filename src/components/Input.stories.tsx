import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

/**
 * Meta configuração do Storybook para o componente Input
 */
const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Input do LED Telecom - Campo de entrada de texto seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1124&m=dev'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        inputText: {
            control: 'text',
            description: 'Texto do input'
        },
        label: {
            control: 'text',
            description: 'Label do input'
        },
        description: {
            control: 'text',
            description: 'Descrição do input'
        },
        showIcon: {
            control: 'boolean',
            description: 'Se deve exibir o ícone'
        },
        showLabel: {
            control: 'boolean',
            description: 'Se deve exibir o label'
        },
        showDescription: {
            control: 'boolean',
            description: 'Se deve exibir a descrição'
        },
        state: {
            control: 'select',
            options: ['default', 'disable', 'filled', 'hover', 'onclick'],
            description: 'Estado do input'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder do input'
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
            description: 'Tipo do input'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o input está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do input'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Estado Default - Input padrão
 */
export const Default: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: true,
        showDescription: false,
        state: 'default',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Estado Hover - Input com hover
 */
export const Hover: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: true,
        showDescription: false,
        state: 'hover',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Estado OnClick - Input com foco/clique
 */
export const OnClick: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: true,
        showDescription: false,
        state: 'onclick',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Estado Filled - Input preenchido
 */
export const Filled: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: true,
        showDescription: false,
        state: 'filled',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: 'Texto preenchido',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Estado Disable - Input desabilitado
 */
export const Disable: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: true,
        showDescription: false,
        state: 'disable',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: true,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Input com ícone
 */
export const WithIcon: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: true,
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.134 0 0 3.134 0 7C0 10.866 3.134 14 7 14C10.866 14 14 10.866 14 7C14 3.134 10.866 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 3.906 3.906 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 10.094 10.094 12.6 7 12.6Z" fill="currentColor" />
                <path d="M7 3.5C6.447 3.5 6 3.947 6 4.5V7C6 7.553 6.447 8 7 8C7.553 8 8 7.553 8 7V4.5C8 3.947 7.553 3.5 7 3.5Z" fill="currentColor" />
                <path d="M7 9.8C6.447 9.8 6 9.353 6 8.8C6 8.247 6.447 7.8 7 7.8C7.553 7.8 8 8.247 8 8.8C8 9.353 7.553 9.8 7 9.8Z" fill="currentColor" />
            </svg>
        ),
        showLabel: true,
        showDescription: false,
        state: 'default',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Input com descrição
 */
export const WithDescription: Story = {
    args: {
        label: 'label',
        description: 'Esta é uma descrição do campo de entrada',
        showIcon: false,
        showLabel: true,
        showDescription: true,
        state: 'default',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Input de email
 */
export const Email: Story = {
    args: {
        label: 'Email',
        description: 'Digite seu endereço de email',
        showIcon: false,
        showLabel: true,
        showDescription: true,
        state: 'default',
        placeholder: 'seu@email.com',
        type: 'email',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Input de senha
 */
export const Password: Story = {
    args: {
        label: 'Senha',
        description: 'Digite sua senha',
        showIcon: false,
        showLabel: true,
        showDescription: true,
        state: 'default',
        placeholder: 'Digite sua senha',
        type: 'password',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Input sem label
 */
export const WithoutLabel: Story = {
    args: {
        label: 'label',
        description: 'description',
        showIcon: false,
        showLabel: false,
        showDescription: false,
        state: 'default',
        placeholder: 'Digite aqui...',
        type: 'text',
        disabled: false,
        value: '',
        className: ''
    },
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <Input
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    }
};

/**
 * Todos os estados - Comparação
 */
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '328px' }}>
            <Input
                label="Estado Default"
                state="default"
                placeholder="Digite aqui..."
                value=""
            />
            <Input
                label="Estado Hover"
                state="hover"
                placeholder="Digite aqui..."
                value=""
            />
            <Input
                label="Estado OnClick"
                state="onclick"
                placeholder="Digite aqui..."
                value=""
            />
            <Input
                label="Estado Filled"
                state="filled"
                placeholder="Digite aqui..."
                value="Texto preenchido"
            />
            <Input
                label="Estado Disable"
                state="disable"
                placeholder="Digite aqui..."
                value=""
                disabled={true}
            />
        </div>
    )
};
