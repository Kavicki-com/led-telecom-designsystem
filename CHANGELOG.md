# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2024-01-XX

### Adicionado
- Biblioteca completa de design tokens para LED Telecom
- Tokens de cores (superfície e conteúdo)
- Tokens de espaçamento (padding, margin, gap)
- Tokens de tipografia (família, peso, tamanho)
- Tokens de borda (espessura e raio)
- Funções utilitárias para JavaScript/TypeScript
- Geração automática de variáveis CSS
- Classes utilitárias CSS
- Documentação completa
- Exemplos de uso (HTML, React, JavaScript vanilla)
- Configuração de build e desenvolvimento
- Testes unitários
- Configuração de linting e formatação
- CI/CD com GitHub Actions

### Estrutura
- `src/` - Código fonte TypeScript
- `tokens/` - Arquivos JSON com tokens
- `css/` - Arquivos CSS gerados
- `examples/` - Exemplos de uso
- `scripts/` - Scripts de build
- `.github/workflows/` - Configuração CI/CD

### Tokens Incluídos
- **Cores de Superfície**: primary, secondary, error, success, warning, info
- **Cores de Conteúdo**: dark, light, disable
- **Espaçamento**: xs (4px) até 2xl (40px)
- **Tipografia**: Raleway (títulos), Montserrat (corpo)
- **Bordas**: 1px, 2px, 4px (espessura) e 4px, 8px, 16px (raio)

### Funcionalidades
- Importação de tokens em JavaScript/TypeScript
- Geração de variáveis CSS customizadas
- Classes utilitárias para uso rápido
- Suporte a prefixos customizados
- TypeScript com tipagem completa
- Build otimizado para produção
