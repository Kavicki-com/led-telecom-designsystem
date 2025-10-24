"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Combox.css");
/**
 * Componente Combox do LED Telecom
 * Dropdown com input seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=178-266&m=dev
 */
const Combox = ({ label = 'label', inputText = 'input-text', description = 'description', showDescription = true, showLabel = true, state = 'default', options = ['option1', 'option2', 'option3'], selectedOption = '', placeholder = '', disabled = false, value = '', onChange, onOptionSelect, onFocus, onBlur, className = '', name, id }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [inputValue, setInputValue] = (0, react_1.useState)(value || inputText);
    const [selected, setSelected] = (0, react_1.useState)(selectedOption);
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)(options);
    const comboxRef = (0, react_1.useRef)(null);
    // Determina o estado baseado na prop disabled
    const comboxState = disabled ? 'disable' : state;
    // Gera as classes CSS baseadas no estado
    const getComboxClasses = () => {
        const baseClasses = 'led-combox';
        const stateClasses = `led-combox--${comboxState}`;
        return `${baseClasses} ${stateClasses} ${className}`.trim();
    };
    // Gera as classes do container
    const getContainerClasses = () => {
        return 'led-combox-container';
    };
    // Gera as classes do label
    const getLabelClasses = () => {
        return 'led-combox__label';
    };
    // Gera as classes do campo de texto
    const getTextAreaClasses = () => {
        const baseClasses = 'led-combox__text-area';
        const stateClasses = `led-combox__text-area--${comboxState}`;
        return `${baseClasses} ${stateClasses}`;
    };
    // Gera as classes do texto do input
    const getInputTextClasses = () => {
        const baseClasses = 'led-combox__text';
        const stateClasses = `led-combox__text--${comboxState}`;
        return `${baseClasses} ${stateClasses}`;
    };
    // Gera as classes da descrição
    const getDescriptionClasses = () => {
        return 'led-combox__description';
    };
    // Gera as classes do dropdown
    const getDropdownClasses = () => {
        const baseClasses = 'led-combox__dropdown';
        const stateClasses = isOpen ? 'led-combox__dropdown--open' : 'led-combox__dropdown--closed';
        return `${baseClasses} ${stateClasses}`;
    };
    // Gera as classes das opções
    const getOptionClasses = (index) => {
        const baseClasses = 'led-combox__option';
        const isFirst = index === 0;
        return `${baseClasses} ${isFirst ? 'led-combox__option--first' : ''}`;
    };
    // Renderiza o label
    const renderLabel = () => {
        if (!showLabel || !label)
            return null;
        return ((0, jsx_runtime_1.jsx)("p", { className: getLabelClasses(), children: label }));
    };
    // Renderiza o ícone do dropdown
    const renderDropdownIcon = () => {
        return ((0, jsx_runtime_1.jsx)("div", { className: "led-combox__icon", children: (0, jsx_runtime_1.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M3.5 5.25L7 8.75L10.5 5.25", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
    };
    // Renderiza a descrição
    const renderDescription = () => {
        if (!showDescription || !description)
            return null;
        return ((0, jsx_runtime_1.jsx)("p", { className: getDescriptionClasses(), children: description }));
    };
    // Renderiza as opções do dropdown
    const renderOptions = () => {
        if (!isOpen || !filteredOptions.length)
            return null;
        return ((0, jsx_runtime_1.jsx)("div", { className: getDropdownClasses(), children: filteredOptions.map((option, index) => ((0, jsx_runtime_1.jsx)("div", { className: getOptionClasses(index), onClick: () => handleOptionSelect(option), children: (0, jsx_runtime_1.jsx)("p", { className: "led-combox__option-text", children: option }) }, index))) }));
    };
    // Manipula a abertura/fechamento do dropdown
    const handleToggleDropdown = () => {
        if (disabled)
            return;
        setIsOpen(!isOpen);
    };
    // Manipula clique no container do input
    const handleInputAreaClick = () => {
        if (disabled)
            return;
        setIsOpen(true);
    };
    // Manipula a seleção de uma opção
    const handleOptionSelect = (option) => {
        setSelected(option);
        setInputValue(option);
        setIsOpen(false);
        if (onOptionSelect) {
            onOptionSelect(option);
        }
        if (onChange) {
            onChange(option);
        }
    };
    // Manipula mudanças no input
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // Abre o dropdown quando o usuário digita
        if (!isOpen && newValue.trim() !== '') {
            setIsOpen(true);
        }
        if (onChange) {
            onChange(newValue);
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
    // Filtra opções baseado no texto digitado
    (0, react_1.useEffect)(() => {
        if (inputValue && inputValue.trim() !== '') {
            const filtered = options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredOptions(filtered);
        }
        else {
            setFilteredOptions(options);
        }
    }, [inputValue, options]);
    // Fecha o dropdown quando clica fora
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (comboxRef.current && !comboxRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Determina o valor a ser exibido
    const getDisplayValue = () => {
        if (value !== undefined && value !== '') {
            return value;
        }
        if (inputValue && inputValue !== 'input-text' && inputValue !== '') {
            return inputValue;
        }
        return '';
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: getContainerClasses(), "data-name": `state=${comboxState}`, "data-node-id": "178:266", ref: comboxRef, children: [renderLabel(), (0, jsx_runtime_1.jsxs)("div", { className: getTextAreaClasses(), onClick: handleInputAreaClick, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: getDisplayValue(), placeholder: placeholder, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, className: getInputTextClasses(), name: name, id: id }), (0, jsx_runtime_1.jsx)("div", { className: "led-combox__icon-container", onClick: handleToggleDropdown, children: renderDropdownIcon() })] }), renderOptions(), renderDescription()] }));
};
exports.Combox = Combox;
exports.default = exports.Combox;
//# sourceMappingURL=Combox.js.map