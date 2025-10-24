# LED Telecom Design Tokens

Biblioteca de tokens de design para o sistema LED Telecom, fornecendo uma base consistente para cores, tipografia, espaçamento e outros elementos visuais.

## 📦 Instalação

```bash
npm install @led-telecom/design-tokens
```

## 🚀 Uso

### JavaScript/TypeScript

```typescript
import { designTokens, getToken, getCSSVariable } from '@led-telecom/design-tokens';

// Usar tokens diretamente
const primaryColor = designTokens.surface.primary; // '#1f2453'

// Obter token específico
const errorColor = getToken('surface', 'error'); // '#e5102e'

// Obter variável CSS
const cssVar = getCSSVariable('surface.primary'); // 'var(--led-surface-primary)'
```

### CSS

```css
/* Importar o arquivo CSS */
@import '@led-telecom/design-tokens/css/tokens.css';

/* Usar variáveis CSS */
.my-component {
  background-color: var(--led-surface-primary);
  color: var(--led-content-light);
  padding: var(--led-padding-m);
  border-radius: var(--led-border-radius-m);
}

/* Usar classes utilitárias */
<div class="led-surface-primary led-text-light led-p-m led-radius-m">
  Conteúdo
</div>
```

## 🎨 Tokens Disponíveis

### Cores de Superfície
- `primary`: #1f2453
- `standard`: #fafafa
- `grey`: #dadada
- `primary-light`: #9da5e8
- `secondary`: #ffaa00
- `secondary-light`: #ffefc2
- `error`: #e5102e
- `error-light`: #fab3bd
- `sucess`: #2a613d
- `sucess-light`: #98d2ac
- `warning`: #e69900
- `warning-light`: #ffdd8a
- `info`: #565fcc
- `info-light`: #9da5e8
- `hover`: #fafafa

### Cores de Conteúdo
- `dark`: #1f1f1f
- `light`: #fafafa
- `disable`: #7f7f7f

### Espaçamento
- `xs`: 4px
- `s`: 8px
- `sm`: 12px
- `m`: 16px
- `ml`: 20px
- `l`: 24px
- `xl`: 32px
- `2xl`: 40px

### Tipografia
- **Famílias**: Raleway (títulos), Montserrat (corpo)
- **Pesos**: Light, Medium, Regular, Bold
- **Tamanhos**: 8px a 32px

### Bordas
- **Espessuras**: 1px, 2px, 4px
- **Raio**: 4px, 8px, 16px

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Desenvolvimento (watch mode)
npm run dev

# Build da biblioteca
npm run build

# Gerar CSS
npm run generate-css

# Limpar arquivos de build
npm run clean
```

### Estrutura do Projeto

```
led-telecom/
├── src/
│   ├── index.ts          # Arquivo principal
│   ├── types.ts          # Definições TypeScript
│   ├── tokens.ts         # Tokens de design
│   └── css-utils.ts      # Utilitários CSS
├── tokens/
│   ├── tokens.json       # Tokens de design
│   └── typo.json         # Tokens de tipografia
├── css/
│   ├── tokens.css        # CSS com variáveis
│   └── tokens.min.css    # CSS minificado
├── scripts/
│   └── generate-css.js   # Script de geração CSS
└── dist/                 # Arquivos compilados
```

## 📝 API

### `designTokens`
Objeto completo com todos os tokens de design.

### `getToken(category, key)`
Obtém um token específico por categoria e chave.

**Parâmetros:**
- `category`: Categoria do token (surface, border, padding, etc.)
- `key`: Chave do token

**Retorna:** Valor do token como string

### `getTokensByCategory(category)`
Obtém todos os tokens de uma categoria específica.

**Parâmetros:**
- `category`: Categoria do token

**Retorna:** Objeto com todos os tokens da categoria

### `getAllTokens()`
Obtém todos os tokens de design.

**Retorna:** Objeto completo com todos os tokens

### `generateCSSVariables(tokens, prefix)`
Gera variáveis CSS a partir de um objeto de tokens.

**Parâmetros:**
- `tokens`: Objeto com tokens
- `prefix`: Prefixo para as variáveis (padrão: 'led')

**Retorna:** String com variáveis CSS

### `generateFullCSS(prefix)`
Gera CSS completo com variáveis e classes utilitárias.

**Parâmetros:**
- `prefix`: Prefixo para as variáveis (padrão: 'led')

**Retorna:** String com CSS completo

### `getCSSVariable(path, prefix)`
Obtém o nome de uma variável CSS específica.

**Parâmetros:**
- `path`: Caminho para a variável (ex: 'surface.primary')
- `prefix`: Prefixo para a variável (padrão: 'led')

**Retorna:** Nome da variável CSS

## 🎯 Classes Utilitárias

A biblioteca inclui classes CSS utilitárias para uso rápido:

### Cores de Fundo
- `.led-surface-primary`
- `.led-surface-secondary`
- `.led-surface-error`
- `.led-surface-sucess`
- `.led-surface-warning`
- `.led-surface-info`

### Cores de Texto
- `.led-text-primary`
- `.led-text-secondary`
- `.led-text-error`
- `.led-text-sucess`
- `.led-text-warning`
- `.led-text-info`
- `.led-text-dark`
- `.led-text-light`

### Espaçamento
- `.led-p-xs`, `.led-p-s`, `.led-p-m`, `.led-p-l`, etc.
- `.led-m-xs`, `.led-m-s`, `.led-m-m`, `.led-m-l`, etc.
- `.led-gap-xs`, `.led-gap-s`, `.led-gap-m`, `.led-gap-l`, etc.

### Tipografia
- `.led-font-title`, `.led-font-body`
- `.led-text-s`, `.led-text-m`, `.led-text-l`, etc.
- `.led-weight-light`, `.led-weight-regular`, `.led-weight-bold`

### Bordas
- `.led-border-s`, `.led-border-m`, `.led-border-l`
- `.led-radius-s`, `.led-radius-m`, `.led-radius-l`

## 📄 Licença

MIT © LED Telecom

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento da LED Telecom.
