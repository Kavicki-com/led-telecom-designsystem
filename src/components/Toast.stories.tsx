import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Toast para exibir notificações ao usuário. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1415&m=dev'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['default', 'success', 'warning'],
            description: 'Tipo do toast'
        },
        title: {
            control: { type: 'text' },
            description: 'Título do toast'
        },
        message: {
            control: { type: 'text' },
            description: 'Mensagem do toast'
        },
        showCloseButton: {
            control: { type: 'boolean' },
            description: 'Se deve exibir o botão de fechar'
        },
        onClose: {
            action: 'closed',
            description: 'Função chamada quando o toast é fechado'
        },
        className: {
            control: { type: 'text' },
            description: 'Classes CSS adicionais'
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story padrão
export const Default: Story = {
    args: {
        type: 'default',
        showCloseButton: true
    }
};

// Story de sucesso
export const Success: Story = {
    args: {
        type: 'success',
        showCloseButton: true
    }
};

// Story de warning
export const Warning: Story = {
    args: {
        type: 'warning',
        showCloseButton: true
    }
};

// Story com conteúdo customizado
export const CustomContent: Story = {
    args: {
        type: 'success',
        title: 'Operação realizada com sucesso!',
        message: 'Os dados foram salvos corretamente.',
        showCloseButton: true
    }
};

// Story sem botão de fechar
export const WithoutCloseButton: Story = {
    args: {
        type: 'warning',
        title: 'Atenção',
        message: 'Esta notificação não pode ser fechada.',
        showCloseButton: false
    }
};

// Story com mensagem longa
export const LongMessage: Story = {
    args: {
        type: 'default',
        title: 'Erro de validação',
        message: 'Este é um exemplo de mensagem muito longa que deve ser truncada adequadamente para não quebrar o layout do componente.',
        showCloseButton: true
    }
};

// Story com classe customizada
export const CustomClassName: Story = {
    args: {
        type: 'success',
        title: 'Toast customizado',
        message: 'Este toast tem uma classe CSS customizada.',
        className: 'custom-toast-style',
        showCloseButton: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de toast com classe CSS customizada. Você pode adicionar estilos personalizados através da prop className.'
            }
        }
    }
};

// Story interativo
export const Interactive: Story = {
    args: {
        type: 'default',
        title: 'Toast interativo',
        message: 'Clique no botão de fechar para testar a interação.',
        showCloseButton: true,
        onClose: () => {
            alert('Toast fechado!');
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de toast com função de callback personalizada para o evento de fechamento.'
            }
        }
    }
};

// Story responsivo
export const Responsive: Story = {
    args: {
        type: 'warning',
        title: 'Toast responsivo',
        message: 'Este toast se adapta a diferentes tamanhos de tela.',
        showCloseButton: true
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        },
        docs: {
            description: {
                story: 'Exemplo de como o toast se comporta em dispositivos móveis.'
            }
        }
    }
};

// Story de acessibilidade
export const Accessibility: Story = {
    args: {
        type: 'success',
        title: 'Toast acessível',
        message: 'Este toast segue as melhores práticas de acessibilidade.',
        showCloseButton: true
    },
    parameters: {
        docs: {
            description: {
                story: 'O componente Toast inclui atributos de acessibilidade como role="alert" e aria-live="polite" para garantir que seja anunciado por leitores de tela.'
            }
        }
    }
};
