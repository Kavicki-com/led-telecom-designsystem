"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveStates = exports.ClickableVariants = exports.AllVariants = exports.Pressed = exports.Hover = exports.Clickable = exports.Pago = exports.EmAtraso = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Tag_1 = require("./Tag");
/**
 * Meta configuração do Storybook para o componente Tag
 */
const meta = {
    title: 'Components/Tag',
    component: Tag_1.Tag,
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
exports.default = meta;
/**
 * Story padrão - Tag Vencido
 */
exports.Default = {
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
exports.EmAtraso = {
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
exports.Pago = {
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
exports.Clickable = {
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
exports.Hover = {
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
exports.Pressed = {
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
exports.AllVariants = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Vencido", variant: "Vencido" }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Em Atraso", variant: "Em atraso" }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Pago", variant: "Pago" })] })),
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
exports.ClickableVariants = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Vencido", variant: "Vencido", clickable: true, onClick: () => alert('Tag Vencido clicada!') }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Em Atraso", variant: "Em atraso", clickable: true, onClick: () => alert('Tag Em Atraso clicada!') }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Pago", variant: "Pago", clickable: true, onClick: () => alert('Tag Pago clicada!') })] })),
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
exports.InteractiveStates = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Default", variant: "Vencido", state: "default" }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Hover", variant: "Em atraso", state: "hover" }), (0, jsx_runtime_1.jsx)(Tag_1.Tag, { label: "Pressed", variant: "Pago", state: "pressed" })] })),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes estados do componente Tag.'
            }
        }
    }
};
//# sourceMappingURL=Tag.stories.js.map