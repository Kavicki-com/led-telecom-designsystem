"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Checkbox.css");
/**
 * Componente Checkbox do LED Telecom
 * Checkbox seguindo o design system com funcionalidade de clique para ativar/desativar
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1025&m=dev
 * Permite seleção múltipla ao contrário do Radio
 */
const Checkbox = ({ label = 'label', initialState = 'off', checked, disabled = false, value = '', name = '', onChange, className = '', id }) => {
    // Estado interno para controlar se está selecionado ou não
    const [internalChecked, setInternalChecked] = (0, react_1.useState)(initialState === 'on');
    // Usa o estado controlado externamente se fornecido, senão usa o estado interno
    const isChecked = checked !== undefined ? checked : internalChecked;
    // Gera as classes CSS baseadas no estado
    const getCheckboxClasses = () => {
        const baseClasses = 'led-checkbox';
        const stateClasses = `led-checkbox--${isChecked ? 'on' : 'off'}`;
        const disabledClasses = disabled ? 'led-checkbox--disabled' : '';
        return `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();
    };
    // Gera o ID único se não fornecido
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    // Manipula o clique no checkbox
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: getCheckboxClasses(), "data-name": `state=${isChecked ? 'on' : 'off'}`, "data-node-id": "118:1025", onClick: handleClick, style: { cursor: disabled ? 'not-allowed' : 'pointer' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "led-checkbox__container", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: checkboxId, name: name, value: value, checked: isChecked, disabled: disabled, onChange: handleChange, className: "led-checkbox__input" }), (0, jsx_runtime_1.jsx)("div", { className: "led-checkbox__indicator", children: (0, jsx_runtime_1.jsx)("div", { className: "led-checkbox__box", children: isChecked && ((0, jsx_runtime_1.jsx)("div", { className: "led-checkbox__checkmark", children: (0, jsx_runtime_1.jsx)("svg", { width: "12", height: "9", viewBox: "0 0 12 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "led-checkbox__checkmark-icon", children: (0, jsx_runtime_1.jsx)("path", { d: "M1 4.5L4.5 8L11 1.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })) }) })] }), (0, jsx_runtime_1.jsx)("label", { htmlFor: checkboxId, className: "led-checkbox__label", style: { cursor: disabled ? 'not-allowed' : 'pointer' }, children: label })] }));
};
exports.Checkbox = Checkbox;
exports.default = exports.Checkbox;
//# sourceMappingURL=Checkbox.js.map