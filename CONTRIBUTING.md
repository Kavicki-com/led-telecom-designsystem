# Guia de Contribuição

Obrigado por considerar contribuir para o LED Telecom Design Tokens! Este documento fornece diretrizes para contribuições.

## Como Contribuir

### 1. Fork e Clone
1. Faça um fork do repositório
2. Clone seu fork localmente
3. Crie uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`

### 2. Desenvolvimento
1. Instale as dependências: `npm install`
2. Execute os testes: `npm test`
3. Execute o linter: `npm run lint`
4. Faça suas mudanças seguindo as convenções de código

### 3. Testes
- Adicione testes para novas funcionalidades
- Execute `npm run test:coverage` para verificar cobertura
- Todos os testes devem passar

### 4. Commit
- Use mensagens de commit descritivas
- Siga o padrão: `tipo(escopo): descrição`
- Exemplos:
  - `feat(tokens): adiciona nova cor de sucesso`
  - `fix(css): corrige geração de variáveis CSS`
  - `docs(readme): atualiza documentação de uso`

### 5. Pull Request
1. Push suas mudanças: `git push origin feature/nova-funcionalidade`
2. Abra um Pull Request
3. Preencha o template do PR
4. Aguarde revisão

## Convenções de Código

### TypeScript
- Use tipagem explícita quando necessário
- Prefira interfaces sobre types para objetos
- Use nomes descritivos para variáveis e funções

### CSS
- Use kebab-case para classes CSS
- Prefira variáveis CSS sobre valores hardcoded
- Mantenha consistência com os tokens existentes

### Testes
- Teste todas as funções públicas
- Use nomes descritivos para testes
- Mantenha cobertura de testes alta

## Estrutura do Projeto

```
led-telecom/
├── src/                    # Código fonte TypeScript
│   ├── __tests__/         # Testes unitários
│   ├── index.ts           # Arquivo principal
│   ├── types.ts           # Definições de tipos
│   ├── tokens.ts          # Tokens de design
│   └── css-utils.ts       # Utilitários CSS
├── tokens/                 # Arquivos JSON com tokens
├── css/                   # Arquivos CSS gerados
├── examples/              # Exemplos de uso
├── scripts/               # Scripts de build
└── .github/               # Configurações GitHub
```

## Scripts Disponíveis

- `npm run build` - Build da biblioteca
- `npm run dev` - Modo desenvolvimento
- `npm test` - Executar testes
- `npm run lint` - Verificar código
- `npm run generate-css` - Gerar CSS

## Processo de Revisão

1. **Revisão de código** - Verificamos qualidade e padrões
2. **Testes** - Todos os testes devem passar
3. **Documentação** - Atualize docs se necessário
4. **Compatibilidade** - Verifique que não quebra APIs existentes

## Reportando Bugs

Use o template de bug report no GitHub:
1. Descreva o problema claramente
2. Inclua passos para reproduzir
3. Especifique ambiente (OS, Node.js, etc.)
4. Adicione screenshots se aplicável

## Sugerindo Features

Use o template de feature request:
1. Descreva a funcionalidade desejada
2. Explique o caso de uso
3. Considere alternativas
4. Adicione contexto adicional

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a licença MIT.

## Contato

Para dúvidas sobre contribuições, entre em contato com a equipe de desenvolvimento da LED Telecom.
