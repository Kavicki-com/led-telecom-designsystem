"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Input.css");
/**
 * Componente Input do LED Telecom
 * Campo de entrada de texto seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-1124&m=dev
 */
const Input = ({ inputText = 'input-text', label = 'label', description = 'description', icon = null, showIcon = false, showLabel = true, showDescription = false, state = 'default', placeholder = '', type = 'text', disabled = false, value = '', onChange, onFocus, onBlur, className = '', name, id }) => {
    // Determina o estado baseado na prop disabled
    const inputState = disabled ? 'disable' : state;
    // Gera as classes CSS baseadas no estado
    const getInputClasses = () => {
        const baseClasses = 'led-input';
        const stateClasses = `led-input--${inputState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };
    // Gera as classes do container
    const getContainerClasses = () => {
        return 'led-input-container';
    };
    // Gera as classes do label
    const getLabelClasses = () => {
        return 'led-input__label';
    };
    // Gera as classes do campo de texto
    const getTextAreaClasses = () => {
        const baseClasses = 'led-input__text-area';
        const stateClasses = `led-input__text-area--${inputState}`;
        return `${baseClasses} ${stateClasses}`;
    };
    // Gera as classes do texto do input
    const getInputTextClasses = () => {
        const baseClasses = 'led-input__text';
        const stateClasses = `led-input__text--${inputState}`;
        return `${baseClasses} ${stateClasses}`;
    };
    // Gera as classes da descrição
    const getDescriptionClasses = () => {
        return 'led-input__description';
    };
    // Renderiza o label
    const renderLabel = () => {
        if (!showLabel || !label)
            return null;
        return ((0, jsx_runtime_1.jsx)("p", { className: getLabelClasses(), children: label }));
    };
    // Renderiza o ícone
    const renderIcon = () => {
        if (!showIcon || !icon)
            return null;
        return ((0, jsx_runtime_1.jsx)("span", { className: "led-input__icon", children: icon }));
    };
    // Renderiza a descrição
    const renderDescription = () => {
        if (!showDescription || !description)
            return null;
        return ((0, jsx_runtime_1.jsx)("p", { className: getDescriptionClasses(), children: description }));
    };
    // Renderiza o cursor para estado onclick
    const renderCursor = () => {
        if (inputState !== 'onclick')
            return null;
        return ((0, jsx_runtime_1.jsx)("span", { className: "led-input__cursor", children: "|" }));
    };
    // Manipula mudanças no input
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    // Manipula foco no input
    const handleFocus = () => {
        if (onFocus) {
            onFocus();
        }
    };
    // Manipula perda de foco no input
    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
    };
    // Determina o valor a ser exibido
    const getDisplayValue = () => {
        if (value !== undefined && value !== '') {
            return value;
        }
        if (inputText && inputText !== 'input-text') {
            return inputText;
        }
        return '';
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: getContainerClasses(), "data-name": `state=${inputState}`, "data-node-id": "118:1124", children: [renderLabel(), (0, jsx_runtime_1.jsxs)("div", { className: getTextAreaClasses(), children: [renderIcon(), inputState === 'onclick' ? (renderCursor()) : ((0, jsx_runtime_1.jsx)("input", { type: type, value: getDisplayValue(), placeholder: placeholder, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, className: getInputTextClasses(), name: name, id: id }))] }), renderDescription()] }));
};
exports.Input = Input;
exports.default = exports.Input;
//# sourceMappingURL=Input.js.map