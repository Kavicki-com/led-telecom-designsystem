"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Radio.css");
/**
 * Componente Radio do LED Telecom
 * Radio button seguindo o design system com funcionalidade de clique para ativar/desativar
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1024&m=dev
 */
const Radio = ({ label = 'label', initialState = 'off', checked, disabled = false, value = '', name = '', onChange, className = '', id }) => {
    // Estado interno para controlar se está selecionado ou não
    const [internalChecked, setInternalChecked] = (0, react_1.useState)(initialState === 'on');
    // Usa o estado controlado externamente se fornecido, senão usa o estado interno
    const isChecked = checked !== undefined ? checked : internalChecked;
    // Gera as classes CSS baseadas no estado
    const getRadioClasses = () => {
        const baseClasses = 'led-radio';
        const stateClasses = `led-radio--${isChecked ? 'on' : 'off'}`;
        const disabledClasses = disabled ? 'led-radio--disabled' : '';
        return `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();
    };
    // Gera o ID único se não fornecido
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    // Manipula o clique no radio
    const handleClick = () => {
        if (!disabled) {
            const newCheckedState = !isChecked;
            // Se não está sendo controlado externamente, atualiza o estado interno
            if (checked === undefined) {
                setInternalChecked(newCheckedState);
            }
            if (onChange) {
                onChange(newCheckedState);
            }
        }
    };
    // Manipula a mudança do input (para acessibilidade)
    const handleChange = (event) => {
        if (!disabled) {
            const newCheckedState = event.target.checked;
            // Se não está sendo controlado externamente, atualiza o estado interno
            if (checked === undefined) {
                setInternalChecked(newCheckedState);
            }
            if (onChange) {
                onChange(newCheckedState);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: getRadioClasses(), "data-name": `state=${isChecked ? 'on' : 'off'}`, "data-node-id": "118:1024", onClick: handleClick, style: { cursor: disabled ? 'not-allowed' : 'pointer' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "led-radio__container", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", id: radioId, name: name, value: value, checked: isChecked, disabled: disabled, onChange: handleChange, className: "led-radio__input" }), (0, jsx_runtime_1.jsx)("div", { className: "led-radio__indicator", children: (0, jsx_runtime_1.jsx)("div", { className: "led-radio__circle", children: isChecked && (0, jsx_runtime_1.jsx)("div", { className: "led-radio__dot" }) }) })] }), (0, jsx_runtime_1.jsx)("label", { htmlFor: radioId, className: "led-radio__label", style: { cursor: disabled ? 'not-allowed' : 'pointer' }, children: label })] }));
};
exports.Radio = Radio;
exports.default = exports.Radio;
//# sourceMappingURL=Radio.js.map