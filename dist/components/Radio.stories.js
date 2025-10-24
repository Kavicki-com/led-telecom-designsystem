"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = exports.DisabledChecked = exports.Disabled = exports.Checked = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Radio_1 = require("./Radio");
const meta = {
    title: 'Components/Radio',
    component: Radio_1.Radio,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Radio do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1024&m=dev'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do label do radio'
        },
        initialState: {
            control: 'select',
            options: ['off', 'on'],
            description: 'Estado inicial do radio (on/off)'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o radio está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do radio para formulários'
        },
        name: {
            control: 'text',
            description: 'Nome do grupo de radio buttons'
        },
        className: {
            control: 'text',
            description: 'Classes CSS adicionais'
        },
        id: {
            control: 'text',
            description: 'ID único do componente'
        }
    },
    tags: ['autodocs']
};
exports.default = meta;
// Story padrão
exports.Default = {
    args: {
        label: 'Opção 1',
        initialState: 'off',
        disabled: false
    }
};
// Story com estado inicial "on"
exports.Checked = {
    args: {
        label: 'Opção selecionada',
        initialState: 'on',
        disabled: false
    }
};
// Story desabilitado
exports.Disabled = {
    args: {
        label: 'Opção desabilitada',
        initialState: 'off',
        disabled: true
    }
};
// Story desabilitado e selecionado
exports.DisabledChecked = {
    args: {
        label: 'Opção desabilitada e selecionada',
        initialState: 'on',
        disabled: true
    }
};
// Story para grupo de radios
exports.RadioGroup = {
    render: () => {
        const [selectedValue, setSelectedValue] = react_1.default.useState('option1');
        const handleRadioChange = (value, checked) => {
            if (checked) {
                setSelectedValue(value);
            }
        };
        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [(0, jsx_runtime_1.jsx)(Radio_1.Radio, { label: "Primeira op\u00E7\u00E3o", checked: selectedValue === 'option1', name: "radio-group", value: "option1", onChange: (checked) => handleRadioChange('option1', checked) }), (0, jsx_runtime_1.jsx)(Radio_1.Radio, { label: "Segunda op\u00E7\u00E3o", checked: selectedValue === 'option2', name: "radio-group", value: "option2", onChange: (checked) => handleRadioChange('option2', checked) }), (0, jsx_runtime_1.jsx)(Radio_1.Radio, { label: "Terceira op\u00E7\u00E3o", checked: selectedValue === 'option3', name: "radio-group", value: "option3", onChange: (checked) => handleRadioChange('option3', checked) }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }, children: [(0, jsx_runtime_1.jsx)("strong", { children: "Op\u00E7\u00E3o selecionada:" }), " ", selectedValue] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de uso do componente Radio em um grupo de opções - apenas uma pode ser selecionada por vez'
            }
        }
    }
};
//# sourceMappingURL=Radio.stories.js.map