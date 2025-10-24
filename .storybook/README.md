# LED Telecom Design System - Storybook

Este é o Storybook do LED Telecom Design System, uma ferramenta para visualizar e testar os componentes e tokens de design.

## Como usar

### Executar o Storybook localmente

```bash
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`

### Build para produção

```bash
npm run build-storybook
```

## Estrutura

- **Components**: Visualização dos componentes React do design system
- **Design Tokens**: Visualização dos tokens de design (cores, tipografia, espaçamentos, etc.)

## Funcionalidades

- ✅ Visualização interativa dos componentes
- ✅ Documentação automática dos componentes
- ✅ Controles para testar diferentes props
- ✅ Visualização dos tokens de design
- ✅ Tema personalizado do LED Telecom
- ✅ Suporte a TypeScript
- ✅ Integração com Vite

## Adicionando novas stories

Para adicionar uma nova story para um componente:

1. Crie um arquivo `ComponentName.stories.tsx` na pasta do componente
2. Siga o padrão das stories existentes
3. Use os tipos `Meta` e `StoryObj` do Storybook
4. Configure os `argTypes` para controles interativos

Exemplo:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MeuComponente } from './MeuComponente';

const meta: Meta<typeof MeuComponente> = {
  title: 'LED Telecom/Components/MeuComponente',
  component: MeuComponente,
  // ... configurações
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props padrão
  },
};
```
