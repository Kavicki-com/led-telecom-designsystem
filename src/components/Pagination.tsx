import React from 'react';
import './Pagination.css';

/**
 * Props do componente Pagination
 */
export interface PaginationProps {
    /** Estado da paginação: begin, middle, end */
    property1?: 'begin' | 'middle' | 'end';
    /** Página atual */
    currentPage?: number;
    /** Total de páginas */
    totalPages?: number;
    /** Função de callback para mudança de página */
    onPageChange?: (page: number) => void;
    /** Classes CSS adicionais */
    className?: string;
    /** Se a paginação está desabilitada */
    disabled?: boolean;
}

/**
 * Componente Pagination do LED Telecom
 * Componente de paginação seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1184&m=dev
 */
export const Pagination: React.FC<PaginationProps> = ({
    property1 = 'begin',
    currentPage = 1,
    totalPages = 5,
    onPageChange,
    className = '',
    disabled = false
}) => {
    // Ícones SVG inline para as setas
    const ChevronLeftIcon = () => (
        <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 1L1.4 6L6.4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const ChevronRightIcon = () => (
        <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Função para renderizar botão de página
    const renderPageButton = (page: number, isActive: boolean = false) => (
        <button
            key={page}
            type="button"
            className={`led-pagination__page-button ${isActive ? 'led-pagination__page-button--active' : ''}`}
            onClick={() => !disabled && onPageChange?.(page)}
            disabled={disabled}
            data-node-id={`124:${1186 + (page - 1)}`}
        >
            <p className="led-pagination__page-text">{page}</p>
        </button>
    );

    // Função para renderizar botão de navegação
    const renderNavButton = (direction: 'left' | 'right', isActive: boolean = false) => (
        <button
            type="button"
            className={`led-pagination__nav-button ${isActive ? 'led-pagination__nav-button--active' : ''}`}
            onClick={() => !disabled && onPageChange?.(direction === 'left' ? currentPage - 1 : currentPage + 1)}
            disabled={disabled}
            data-node-id={direction === 'left' ? 'I124:1191;118:965' : 'I124:1222'}
        >
            <div className="led-pagination__nav-icon">
                {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </div>
        </button>
    );

    // Função para renderizar botão de ellipsis
    const renderEllipsisButton = () => (
        <div className="led-pagination__ellipsis" data-node-id="124:1190">
            <p className="led-pagination__ellipsis-text">...</p>
        </div>
    );

    // Renderiza o conteúdo baseado no estado
    const renderContent = () => {
        const baseClasses = `led-pagination ${className}`.trim();

        if (property1 === 'middle') {
            return (
                <div className={baseClasses} data-name="Property 1=middle" data-node-id="124:1185">
                    {renderNavButton('left', true)}
                    {renderPageButton(currentPage - 1, false)}
                    {renderPageButton(currentPage, true)}
                    {renderPageButton(currentPage + 1, false)}
                    {renderEllipsisButton()}
                    {renderNavButton('right', true)}
                </div>
            );
        }

        if (property1 === 'end') {
            return (
                <div className={baseClasses} data-name="Property 1=end" data-node-id="124:1230">
                    {renderNavButton('left', true)}
                    {renderEllipsisButton()}
                    {renderPageButton(currentPage - 3, false)}
                    {renderPageButton(currentPage - 2, false)}
                    {renderPageButton(currentPage - 1, false)}
                    {renderPageButton(currentPage, true)}
                </div>
            );
        }

        // Estado 'begin' (padrão)
        return (
            <div className={baseClasses} data-name="Property 1=begin" data-node-id="124:1173">
                {renderPageButton(currentPage, true)}
                {renderPageButton(currentPage + 1, false)}
                {renderPageButton(currentPage + 2, false)}
                {renderPageButton(currentPage + 3, false)}
                {renderEllipsisButton()}
                {renderNavButton('right', true)}
            </div>
        );
    };

    return renderContent();
};

export default Pagination;
