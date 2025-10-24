"use strict";
/**
 * LED Telecom Design Tokens
 * Biblioteca de tokens de design para o sistema LED Telecom
 *
 * @version 1.0.0
 * @author LED Telecom
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Exportar tipos
__exportStar(require("./types"), exports);
// Exportar tokens e funções utilitárias
__exportStar(require("./tokens"), exports);
// Exportar utilitários CSS
__exportStar(require("./css-utils"), exports);
// Exportar componentes
__exportStar(require("./components/ContainedButton"), exports);
__exportStar(require("./components/OutlinedButton"), exports);
__exportStar(require("./components/GhostButton"), exports);
__exportStar(require("./components/Radio"), exports);
__exportStar(require("./components/Checkbox"), exports);
__exportStar(require("./components/Input"), exports);
__exportStar(require("./components/Combox"), exports);
__exportStar(require("./components/Tag"), exports);
// Re-exportar tokens como default para compatibilidade
const tokens_1 = require("./tokens");
exports.default = tokens_1.designTokens;
//# sourceMappingURL=index.js.map