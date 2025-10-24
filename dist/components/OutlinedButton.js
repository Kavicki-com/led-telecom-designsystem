"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlinedButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./OutlinedButton.css");
/**
 * Componente OutlinedButton do LED Telecom
 * Botão com estilo outlined (borda) seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-934&m=dev
 */
const OutlinedButton = ({ label = 'button', displayLabel = true, displayIconLeft = false, displayIconRight = false, icon = null, state = 'default', onClick, className = '', disabled = false }) => {
    // Determina o estado baseado na prop disabled
    const buttonState = disabled ? 'disable' : state;
    // Gera as classes CSS baseadas no estado
    const getButtonClasses = () => {
        const baseClasses = 'led-button-outlined';
        const stateClasses = `led-button-outlined--${buttonState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };
    // Renderiza o conteúdo do botão
    const renderButtonContent = () => {
        const content = [];
        // Ícone à esquerda
        if (displayIconLeft && icon) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-outlined__icon led-button-outlined__icon--left", children: icon }, "icon-left"));
        }
        // Label do botão
        if (displayLabel && label) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-outlined__label", children: label }, "label"));
        }
        // Ícone à direita
        if (displayIconRight && icon) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-outlined__icon led-button-outlined__icon--right", children: icon }, "icon-right"));
        }
        return content;
    };
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", className: getButtonClasses(), onClick: disabled ? undefined : onClick, disabled: disabled, "data-name": `state=${buttonState}`, "data-node-id": buttonState === 'default' ? '118:933' :
            buttonState === 'hover' ? '118:931' :
                buttonState === 'pressed' ? '118:932' : '118:930', children: renderButtonContent() }));
};
exports.OutlinedButton = OutlinedButton;
exports.default = exports.OutlinedButton;
//# sourceMappingURL=OutlinedButton.js.map