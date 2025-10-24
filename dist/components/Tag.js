"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Tag.css");
/**
 * Componente Tag do LED Telecom
 * Tag de status seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1284&m=dev
 */
const Tag = ({ label, variant = 'Vencido', state = 'default', className = '', onClick, clickable = false }) => {
    // Gera as classes CSS baseadas na variante e estado
    const getTagClasses = () => {
        const baseClasses = 'led-tag';
        const variantClasses = `led-tag--${variant.toLowerCase().replace(' ', '-')}`;
        const stateClasses = `led-tag--${state}`;
        const clickableClasses = clickable ? 'led-tag--clickable' : '';
        return `${baseClasses} ${variantClasses} ${stateClasses} ${clickableClasses} ${className}`.trim();
    };
    // Determina o node-id baseado na variante
    const getNodeId = () => {
        switch (variant) {
            case 'Em atraso':
                return '124:1285';
            case 'Pago':
                return '124:1287';
            case 'Vencido':
            default:
                return '124:1283';
        }
    };
    const TagElement = clickable ? 'button' : 'div';
    return ((0, jsx_runtime_1.jsx)(TagElement, { className: getTagClasses(), onClick: clickable ? onClick : undefined, "data-name": `Property 1=${variant}`, "data-node-id": getNodeId(), type: clickable ? 'button' : undefined, children: (0, jsx_runtime_1.jsx)("span", { className: "led-tag__label", children: label }) }));
};
exports.Tag = Tag;
exports.default = exports.Tag;
//# sourceMappingURL=Tag.js.map