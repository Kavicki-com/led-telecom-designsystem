import React from 'react';
import './Tag.css';
/**
 * Props do componente Tag
 */
export interface TagProps {
    /** Texto da tag */
    label: string;
    /** Variante da tag */
    variant?: 'Vencido' | 'Em atraso' | 'Pago';
    /** Estado da tag */
    state?: 'default' | 'hover' | 'pressed';
    /** Classes CSS adicionais */
    className?: string;
    /** Função de callback para clique (opcional) */
    onClick?: () => void;
    /** Se a tag é clicável */
    clickable?: boolean;
}
/**
 * Componente Tag do LED Telecom
 * Tag de status seguindo o design system
 * Baseado no design do Figma: https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=124-1284&m=dev
 */
export declare const Tag: React.FC<TagProps>;
export default Tag;
//# sourceMappingURL=Tag.d.ts.map