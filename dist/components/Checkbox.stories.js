"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllStates = exports.CheckboxGroup = exports.DisabledChecked = exports.Disabled = exports.Checked = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Checkbox_1 = require("./Checkbox");
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox_1.Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Checkbox do LED Telecom seguindo o design system. Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1025&m=dev. Permite seleção múltipla ao contrário do Radio.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto do label do checkbox'
        },
        initialState: {
            control: 'select',
            options: ['off', 'on'],
            description: 'Estado inicial do checkbox (on/off)'
        },
        disabled: {
            control: 'boolean',
            description: 'Se o checkbox está desabilitado'
        },
        value: {
            control: 'text',
            description: 'Valor do checkbox para formulários'
        },
        name: {
            control: 'text',
            description: 'Nome do grupo de checkboxes'
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
// Story para grupo de checkboxes com seleção múltipla
exports.CheckboxGroup = {
    render: () => {
        const [selectedValues, setSelectedValues] = react_1.default.useState(['option1']);
        const handleCheckboxChange = (value, checked) => {
            if (checked) {
                setSelectedValues(prev => [...prev, value]);
            }
            else {
                setSelectedValues(prev => prev.filter(v => v !== value));
            }
        };
        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [(0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Primeira op\u00E7\u00E3o", checked: selectedValues.includes('option1'), name: "checkbox-group", value: "option1", onChange: (checked) => handleCheckboxChange('option1', checked) }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Segunda op\u00E7\u00E3o", checked: selectedValues.includes('option2'), name: "checkbox-group", value: "option2", onChange: (checked) => handleCheckboxChange('option2', checked) }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Terceira op\u00E7\u00E3o", checked: selectedValues.includes('option3'), name: "checkbox-group", value: "option3", onChange: (checked) => handleCheckboxChange('option3', checked) }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Quarta op\u00E7\u00E3o", checked: selectedValues.includes('option4'), name: "checkbox-group", value: "option4", onChange: (checked) => handleCheckboxChange('option4', checked) }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }, children: [(0, jsx_runtime_1.jsx)("strong", { children: "Op\u00E7\u00F5es selecionadas:" }), " ", selectedValues.length > 0 ? selectedValues.join(', ') : 'Nenhuma'] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Exemplo de uso do componente Checkbox em um grupo de opções - permite seleção múltipla simultânea'
            }
        }
    }
};
// Story para demonstração de diferentes estados
exports.AllStates = {
    render: () => {
        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [(0, jsx_runtime_1.jsx)("h4", { children: "Estados normais:" }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Checkbox desmarcado", initialState: "off" }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Checkbox marcado", initialState: "on" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [(0, jsx_runtime_1.jsx)("h4", { children: "Estados desabilitados:" }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Checkbox desabilitado", initialState: "off", disabled: true }), (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: "Checkbox desabilitado e marcado", initialState: "on", disabled: true })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstração de todos os estados possíveis do componente Checkbox'
            }
        }
    }
};
//# sourceMappingURL=Checkbox.stories.js.map