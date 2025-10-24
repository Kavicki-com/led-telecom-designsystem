import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pagination } from './Pagination';

/**
 * Meta configuração do Storybook para o componente Pagination
 */
const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de paginação do LED Telecom seguindo o design system. Suporta três estados: begin, middle e end.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        property1: {
            control: { type: 'select' },
            options: ['begin', 'middle', 'end'],
            description: 'Estado da paginação',
            table: {
                type: { summary: "'begin' | 'middle' | 'end'" },
                defaultValue: { summary: "'begin'" }
            }
        },
        currentPage: {
            control: { type: 'number', min: 1, max: 10 },
            description: 'Página atual',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '1' }
            }
        },
        totalPages: {
            control: { type: 'number', min: 1, max: 20 },
            description: 'Total de páginas',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '5' }
            }
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Se a paginação está desabilitada',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        className: {
            control: { type: 'text' },
            description: 'Classes CSS adicionais',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: "''" }
            }
        },
        onPageChange: {
            action: 'pageChanged',
            description: 'Função de callback para mudança de página',
            table: {
                type: { summary: '(page: number) => void' }
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Estado Begin - Primeira página ativa
 * Conforme design do Figma: data-name="Property 1=begin" data-node-id="124:1173"
 */
export const Begin: Story = {
    args: {
        property1: 'begin',
        currentPage: 1,
        totalPages: 5,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Estado inicial da paginação com a primeira página ativa e botão de próxima página destacado.'
            }
        }
    }
};

/**
 * Estado Middle - Página do meio ativa
 * Conforme design do Figma: data-name="Property 1=middle" data-node-id="124:1185"
 */
export const Middle: Story = {
    args: {
        property1: 'middle',
        currentPage: 3,
        totalPages: 5,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Estado intermediário da paginação com botões de navegação anterior e próxima destacados.'
            }
        }
    }
};

/**
 * Estado End - Última página ativa
 * Conforme design do Figma: data-name="Property 1=end" data-node-id="124:1230"
 */
export const End: Story = {
    args: {
        property1: 'end',
        currentPage: 5,
        totalPages: 5,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Estado final da paginação com a última página ativa e botão de página anterior destacado.'
            }
        }
    }
};

/**
 * Estado Desabilitado
 */
export const Disabled: Story = {
    args: {
        property1: 'middle',
        currentPage: 3,
        totalPages: 5,
        disabled: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Paginação desabilitada com todos os botões inativos.'
            }
        }
    }
};

/**
 * Com Callback de Mudança de Página
 */
export const WithPageChange: Story = {
    args: {
        property1: 'middle',
        currentPage: 3,
        totalPages: 10,
        disabled: false,
        onPageChange: (page: number) => {
            console.log(`Navegando para a página ${page}`);
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Paginação com callback para mudança de página. Verifique o console para ver as mudanças.'
            }
        }
    }
};

/**
 * Com Classes CSS Customizadas
 */
export const WithCustomClass: Story = {
    args: {
        property1: 'begin',
        currentPage: 1,
        totalPages: 5,
        disabled: false,
        className: 'custom-pagination'
    },
    parameters: {
        docs: {
            description: {
                story: 'Paginação com classes CSS customizadas aplicadas.'
            }
        }
    },
    decorators: [
        (Story) => (
            <div>
                <style>{`
                    .custom-pagination {
                        border: 2px dashed #ffaa00;
                        padding: 8px;
                        border-radius: 8px;
                    }
                `}</style>
                <Story />
            </div>
        )
    ]
};

/**
 * Múltiplas Páginas
 */
export const ManyPages: Story = {
    args: {
        property1: 'middle',
        currentPage: 8,
        totalPages: 20,
        disabled: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Paginação com muitas páginas para demonstrar o comportamento com grandes conjuntos de dados.'
            }
        }
    }
};

/**
 * Estados Interativos
 */
export const InteractiveStates: Story = {
    render: () => {
        const [currentState, setCurrentState] = React.useState<'begin' | 'middle' | 'end'>('begin');
        const [currentPage, setCurrentPage] = React.useState(1);

        const handlePageChange = (page: number) => {
            setCurrentPage(page);

            // Determina o estado baseado na página
            if (page === 1) {
                setCurrentState('begin');
            } else if (page === 5) {
                setCurrentState('end');
            } else {
                setCurrentState('middle');
            }
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <div>
                    <strong>Estado Atual:</strong> {currentState} | <strong>Página:</strong> {currentPage}
                </div>
                <Pagination
                    property1={currentState}
                    currentPage={currentPage}
                    totalPages={5}
                    onPageChange={handlePageChange}
                />
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstração interativa mostrando como o estado da paginação muda conforme a navegação.'
            }
        }
    }
};
