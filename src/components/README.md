# Componentes LED Telecom

Esta pasta contém todos os componentes do design system LED Telecom.

## Combox

O componente Combox é um dropdown com input que permite aos usuários digitar ou selecionar opções de uma lista.

### Características

- **Input com dropdown**: Permite digitação livre e seleção de opções
- **Estados visuais**: Default, aberto e desabilitado
- **Acessibilidade**: Suporte completo a navegação por teclado
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Customizável**: Múltiplas props para personalização

### Uso Básico

```tsx
import { Combox } from 'led-telecom';

function MyComponent() {
    return (
        <Combox
            label="Selecione uma opção"
            description="Escolha uma das opções disponíveis"
            options={['Opção 1', 'Opção 2', 'Opção 3']}
            onChange={(value) => console.log('Valor:', value)}
            onOptionSelect={(option) => console.log('Selecionado:', option)}
        />
    );
}
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | `'label'` | Label do combox |
| `inputText` | `string` | `'input-text'` | Texto do input |
| `description` | `string` | `'description'` | Descrição do combox |
| `showDescription` | `boolean` | `true` | Se deve exibir a descrição |
| `showLabel` | `boolean` | `true` | Se deve exibir o label |
| `state` | `'default' \| 'open' \| 'disable'` | `'default'` | Estado do combox |
| `options` | `string[]` | `['option1', 'option2', 'option3']` | Opções do dropdown |
| `selectedOption` | `string` | `''` | Opção selecionada |
| `placeholder` | `string` | `''` | Placeholder do input |
| `disabled` | `boolean` | `false` | Se o combox está desabilitado |
| `value` | `string` | `''` | Valor do input |
| `onChange` | `(value: string) => void` | - | Callback para mudança de valor |
| `onOptionSelect` | `(option: string) => void` | - | Callback para seleção de opção |
| `onFocus` | `() => void` | - | Callback para foco |
| `onBlur` | `() => void` | - | Callback para perda de foco |
| `className` | `string` | `''` | Classes CSS adicionais |
| `name` | `string` | - | Nome do combox para formulários |
| `id` | `string` | - | ID do combox |

### Estados

#### Default
Estado padrão do combox, pronto para interação.

#### Open
Estado quando o dropdown está aberto, mostrando as opções disponíveis.

#### Disable
Estado desabilitado, não permite interação.

### Exemplos

#### Combox Básico
```tsx
<Combox
    label="Cidade"
    options={['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']}
    placeholder="Digite ou selecione uma cidade..."
/>
```

#### Combox com Callbacks
```tsx
<Combox
    label="País"
    options={['Brasil', 'Argentina', 'Chile']}
    onChange={(value) => console.log('Valor alterado:', value)}
    onOptionSelect={(option) => console.log('Opção selecionada:', option)}
/>
```

#### Combox Desabilitado
```tsx
<Combox
    label="Categoria"
    options={['Tecnologia', 'Saúde', 'Educação']}
    disabled={true}
/>
```

### Acessibilidade

O componente Combox foi desenvolvido seguindo as diretrizes de acessibilidade:

- **Navegação por teclado**: Suporte completo a Tab, Enter, Escape e setas
- **Screen readers**: Labels e descrições apropriadas
- **ARIA attributes**: Estados e propriedades bem definidos
- **Contraste**: Cores que atendem aos padrões WCAG

### Estilização

O componente usa CSS customizado que segue o design system LED Telecom:

- **Tokens de design**: Cores, tipografia e espaçamentos padronizados
- **Estados visuais**: Hover, focus e disabled bem definidos
- **Responsividade**: Adapta-se a diferentes tamanhos de tela
- **Animações**: Transições suaves para melhor UX

### Storybook

O componente possui stories completas no Storybook:

- **Default**: Estado padrão
- **Open**: Estado aberto
- **Disabled**: Estado desabilitado
- **WithoutLabel**: Sem label
- **WithoutDescription**: Sem descrição
- **WithValue**: Com valor preenchido
- **ManyOptions**: Com muitas opções
- **LongOptions**: Com opções de texto longo
- **Custom**: Configuração customizada
- **WithCallbacks**: Com callbacks
- **Accessibility**: Para teste de acessibilidade

### Exemplos de Uso

Consulte os arquivos de exemplo:

- `examples/combox-example.html` - Exemplo HTML
- `examples/combox-react-example.tsx` - Exemplo React

### Design System

Este componente segue o design system LED Telecom baseado no Figma:
https://www.figma.com/design/khpDUvOTAPMlWap9QKba2q/Library-led-telecon?node-id=178-266&m=dev