import React from 'react';
import './Toast.css';

/**
 * Props do componente Toast
 */
export interface ToastProps {
    /** Tipo do toast */
    type?: 'default' | 'success' | 'warning';
    /** Título do toast */
    title?: string;
    /** Mensagem do toast */
    message?: string;
    /** Se deve exibir o botão de fechar */
    showCloseButton?: boolean;
    /** Função de callback para fechar o toast */
    onClose?: () => void;
    /** Classes CSS adicionais */
    className?: string;
}

/**
 * Componente Toast do LED Telecom
 * Componente de notificação seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1415&m=dev
 */
export const Toast: React.FC<ToastProps> = ({
    type = 'default',
    title,
    message,
    showCloseButton = true,
    onClose,
    className = ''
}) => {
    // Determina o conteúdo padrão baseado no tipo - conforme design do Figma
    const getDefaultContent = () => {
        switch (type) {
            case 'success':
                return {
                    title: 'sucess :D',
                    message: 'Voce está fazendo tudo certo!'
                };
            case 'warning':
                return {
                    title: 'Atenção',
                    message: 'Cuidado! Esqueceu de preencher o campo.'
                };
            default:
                return {
                    title: 'Error!',
                    message: 'Que pena! Campo incorreto :('
                };
        }
    };

    const defaultContent = getDefaultContent();
    const toastTitle = title || defaultContent.title;
    const toastMessage = message || defaultContent.message;

    // Gera as classes CSS baseadas no tipo
    const getToastClasses = () => {
        const baseClasses = 'led-toast';
        const typeClasses = `led-toast--${type}`;
        return `${baseClasses} ${typeClasses} ${className}`.trim();
    };

    // Renderiza o ícone baseado no tipo - conforme design do Figma
    const renderIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <div className="led-toast__icon led-toast__icon--success">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.793l6.646-6.647a.5.5 0 0 1 .708 0z" fill="currentColor" />
                        </svg>
                    </div>
                );
            case 'warning':
                return (
                    <div className="led-toast__icon led-toast__icon--warning">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="led-toast__icon led-toast__icon--error">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="currentColor" />
                        </svg>
                    </div>
                );
        }
    };

    // Renderiza o botão de fechar
    const renderCloseButton = () => {
        if (!showCloseButton) return null;

        return (
            <button
                type="button"
                className="led-toast__close"
                onClick={onClose}
                aria-label="Fechar notificação"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="currentColor" />
                </svg>
            </button>
        );
    };

    return (
        <div
            className={getToastClasses()}
            data-name={`Property 1=${type === 'default' ? 'Default' : type === 'success' ? 'Sucess' : 'Warning'}`}
            data-node-id={type === 'default' ? '124:1397' : type === 'success' ? '124:1416' : '124:1424'}
            role="alert"
            aria-live="polite"
        >
            {renderIcon()}
            <div className="led-toast__content">
                <p className="led-toast__title">{toastTitle}</p>
                <p className="led-toast__message">{toastMessage}</p>
            </div>
            {renderCloseButton()}
        </div>
    );
};

export default Toast;
