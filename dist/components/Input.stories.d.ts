import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
/**
 * Meta configuração do Storybook para o componente Input
 */
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Estado Default - Input padrão
 */
export declare const Default: Story;
/**
 * Estado Hover - Input com hover
 */
export declare const Hover: Story;
/**
 * Estado OnClick - Input com foco/clique
 */
export declare const OnClick: Story;
/**
 * Estado Filled - Input preenchido
 */
export declare const Filled: Story;
/**
 * Estado Disable - Input desabilitado
 */
export declare const Disable: Story;
/**
 * Input com ícone
 */
export declare const WithIcon: Story;
/**
 * Input com descrição
 */
export declare const WithDescription: Story;
/**
 * Input de email
 */
export declare const Email: Story;
/**
 * Input de senha
 */
export declare const Password: Story;
/**
 * Input sem label
 */
export declare const WithoutLabel: Story;
/**
 * Todos os estados - Comparação
 */
export declare const AllStates: Story;
//# sourceMappingURL=Input.stories.d.ts.map