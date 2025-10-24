"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borders = exports.Typography = exports.Spacing = exports.ContentColors = exports.SurfaceColors = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const tokens_1 = require("../tokens");
const meta = {
    title: 'Design Tokens',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Visualização dos tokens de design do LED Telecom Design System.',
            },
        },
    },
    tags: ['autodocs'],
};
exports.default = meta;
// Story para cores de superfície
exports.SurfaceColors = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Cores de Superf\u00EDcie" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }, children: Object.entries(tokens_1.designTokens.surface).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                width: '100px',
                                height: '100px',
                                backgroundColor: value,
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                marginBottom: '8px',
                            } }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '12px', fontWeight: 'bold' }, children: key }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '10px', color: '#666' }, children: value })] }, key))) })] })),
};
// Story para cores de conteúdo
exports.ContentColors = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Cores de Conte\u00FAdo" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }, children: Object.entries(tokens_1.designTokens.content).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                width: '100px',
                                height: '100px',
                                backgroundColor: value,
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                marginBottom: '8px',
                            } }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '12px', fontWeight: 'bold' }, children: key }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '10px', color: '#666' }, children: value })] }, key))) })] })),
};
// Story para espaçamentos
exports.Spacing = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Espa\u00E7amentos" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: '32px' }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Padding" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: Object.entries(tokens_1.designTokens.padding).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                        width: '100px',
                                        height: '40px',
                                        backgroundColor: '#e0e0e0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: key }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        width: '200px',
                                        height: '40px',
                                        backgroundColor: '#f0f0f0',
                                        padding: value ? `${value}px` : '0',
                                        border: '1px solid #ccc',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: ["padding: ", value, "px"] })] }, key))) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: '32px' }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Margin" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: Object.entries(tokens_1.designTokens.margin).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                        width: '100px',
                                        height: '40px',
                                        backgroundColor: '#e0e0e0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: key }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        width: '200px',
                                        height: '40px',
                                        backgroundColor: '#f0f0f0',
                                        margin: value ? `${value}px` : '0',
                                        border: '1px solid #ccc',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: ["margin: ", value, "px"] })] }, key))) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Gap" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: Object.entries(tokens_1.designTokens.gap).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                        width: '100px',
                                        height: '40px',
                                        backgroundColor: '#e0e0e0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: key }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        display: 'flex',
                                        gap: value ? `${value}px` : '0',
                                        border: '1px solid #ccc',
                                        padding: '8px',
                                    }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: '20px', height: '20px', backgroundColor: '#ff6b6b' } }), (0, jsx_runtime_1.jsx)("div", { style: { width: '20px', height: '20px', backgroundColor: '#4ecdc4' } }), (0, jsx_runtime_1.jsx)("div", { style: { width: '20px', height: '20px', backgroundColor: '#45b7d1' } })] }), (0, jsx_runtime_1.jsxs)("span", { style: { fontSize: '12px' }, children: ["gap: ", value, "px"] })] }, key))) })] })] })),
};
// Story para tipografia
exports.Typography = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Tipografia" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: '32px' }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Fam\u00EDlias de Fonte" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: Object.entries(tokens_1.designTokens.typography.family).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("span", { style: { fontWeight: 'bold', marginRight: '16px' }, children: [key, ":"] }), (0, jsx_runtime_1.jsx)("span", { style: { fontFamily: value, fontSize: '18px' }, children: value })] }, key))) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: '32px' }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Tamanhos de Fonte" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: Object.entries(tokens_1.designTokens.typography.size).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { width: '60px', fontSize: '12px' }, children: [key, ":"] }), (0, jsx_runtime_1.jsxs)("span", { style: { fontSize: `${value}px`, fontFamily: tokens_1.designTokens.typography.family.body }, children: ["Texto com tamanho ", value, "px"] })] }, key))) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Pesos de Fonte" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: Object.entries(tokens_1.designTokens.typography.weight).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { width: '80px', fontSize: '12px' }, children: [key, ":"] }), (0, jsx_runtime_1.jsxs)("span", { style: { fontWeight: value.toLowerCase(), fontSize: '16px' }, children: ["Texto com peso ", value] })] }, key))) })] })] })),
};
// Story para bordas
exports.Borders = {
    render: () => ((0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px' }, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Bordas" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: '32px' }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Tamanhos de Borda" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: Object.entries(tokens_1.designTokens.border.size).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { width: '60px', fontSize: '12px' }, children: [key, ":"] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        width: '100px',
                                        height: '50px',
                                        backgroundColor: '#f0f0f0',
                                        border: `${value}px solid #333`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                    }, children: [value, "px"] })] }, key))) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Raio de Borda" }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: Object.entries(tokens_1.designTokens.border.radius).map(([key, value]) => ((0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { width: '60px', fontSize: '12px' }, children: [key, ":"] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        width: '100px',
                                        height: '50px',
                                        backgroundColor: '#4ecdc4',
                                        borderRadius: `${value}px`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        color: 'white',
                                    }, children: [value, "px"] })] }, key))) })] })] })),
};
//# sourceMappingURL=Tokens.stories.js.map