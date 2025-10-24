"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comparison = exports.States = exports.Disabled = exports.IconOnly = exports.WithRightIcon = exports.WithLeftIcon = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const OutlinedButton_1 = require("./OutlinedButton");
const meta = {
    title: 'Components/OutlinedButton',
    component: OutlinedButton_1.OutlinedButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de botão outlined do Design System LED Telecom com diferentes variantes, estados e configurações.',
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
            options: ['default', 'disable', 'hover', 'pressed'],
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
exports.default = meta;
// Story principal - Default
exports.Default = {
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
exports.WithLeftIcon = {
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
                story: 'Botão outlined com ícone à esquerda do texto.',
            },
        },
    },
};
// Story com ícone à direita
exports.WithRightIcon = {
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
                story: 'Botão outlined com ícone à direita do texto.',
            },
        },
    },
};
// Story apenas com ícone
exports.IconOnly = {
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
                story: 'Botão outlined apenas com ícone, sem texto.',
            },
        },
    },
};
// Story desabilitado
exports.Disabled = {
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
                story: 'Botão outlined desabilitado - não interativo.',
            },
        },
    },
};
// Story com diferentes estados
exports.States = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Default", state: "default" }), (0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Hover", state: "hover" }), (0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Pressed", state: "pressed" }), (0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Disabled", state: "disable", disabled: true })] })),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes estados visuais do botão outlined.',
            },
        },
    },
};
// Story comparando com ContainedButton
exports.Comparison = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("span", { style: { fontSize: '12px', fontWeight: 'bold' }, children: "Contained" }), (0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Button", state: "default" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("span", { style: { fontSize: '12px', fontWeight: 'bold' }, children: "Outlined" }), (0, jsx_runtime_1.jsx)(OutlinedButton_1.OutlinedButton, { label: "Button", state: "default" })] })] })),
    parameters: {
        docs: {
            description: {
                story: 'Comparação entre botão contained e outlined.',
            },
        },
    },
};
//# sourceMappingURL=OutlinedButton.stories.js.map