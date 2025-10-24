"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./GhostButton.css");
/**
 * Componente GhostButton do LED Telecom
 * Botão com estilo ghost (transparente) seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=118-986&m=dev
 */
const GhostButton = ({ label = 'button', displayLabel = true, displayIconLeft = false, displayIconRight = false, icon = null, state = 'default', onClick, className = '', disabled = false }) => {
    // Determina o estado baseado na prop disabled
    const buttonState = disabled ? 'disable' : state;
    // Gera as classes CSS baseadas no estado
    const getButtonClasses = () => {
        const baseClasses = 'led-button-ghost';
        const stateClasses = `led-button-ghost--${buttonState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };
    // Renderiza o conteúdo do botão
    const renderButtonContent = () => {
        const content = [];
        // Ícone à esquerda
        if (displayIconLeft && icon) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-ghost__icon led-button-ghost__icon--left", children: icon }, "icon-left"));
        }
        // Label do botão
        if (displayLabel && label) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-ghost__label", children: label }, "label"));
        }
        // Ícone à direita
        if (displayIconRight && icon) {
            content.push((0, jsx_runtime_1.jsx)("span", { className: "led-button-ghost__icon led-button-ghost__icon--right", children: icon }, "icon-right"));
        }
        return content;
    };
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", className: getButtonClasses(), onClick: disabled ? undefined : onClick, disabled: disabled, "data-name": `state=${buttonState}`, "data-node-id": buttonState === 'default' ? '118:987' :
            buttonState === 'hover' ? '118:995' :
                buttonState === 'pressed' ? '118:991' :
                    buttonState === 'state5' ? '191:249' : '118:999', children: renderButtonContent() }));
};
exports.GhostButton = GhostButton;
exports.default = exports.GhostButton;
//# sourceMappingURL=GhostButton.js.map