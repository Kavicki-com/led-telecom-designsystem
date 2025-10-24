// Exemplo de uso dos tokens em JavaScript vanilla
import { designTokens, getToken, getCSSVariable } from '@led-telecom/design-tokens';

// Função para criar um botão usando os tokens
function createButton(text, variant = 'primary', size = 'medium') {
  const button = document.createElement('button');
  button.textContent = text;
  
  // Aplicar estilos usando os tokens
  const sizeTokens = {
    small: { padding: getToken('padding', 'xs'), fontSize: designTokens.typography.size.sm },
    medium: { padding: getToken('padding', 's'), fontSize: designTokens.typography.size.m },
    large: { padding: getToken('padding', 'm'), fontSize: designTokens.typography.size.l }
  };
  
  const variantTokens = {
    primary: { 
      backgroundColor: designTokens.surface.primary, 
      color: designTokens.content.light 
    },
    secondary: { 
      backgroundColor: designTokens.surface.secondary, 
      color: designTokens.content.dark 
    },
    error: { 
      backgroundColor: designTokens.surface.error, 
      color: designTokens.content.light 
    }
  };
  
  Object.assign(button.style, {
    border: 'none',
    borderRadius: getToken('border', 'radius.m'),
    cursor: 'pointer',
    fontFamily: designTokens.typography.family.body,
    fontWeight: designTokens.typography.weight.medium,
    transition: 'all 0.2s ease',
    ...sizeTokens[size],
    ...variantTokens[variant]
  });
  
  return button;
}

// Função para criar um card usando os tokens
function createCard(title, content, variant = 'default') {
  const card = document.createElement('div');
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  titleElement.style.cssText = `
    font-family: ${designTokens.typography.family.title};
    font-size: ${designTokens.typography.size.l};
    margin-bottom: ${getToken('margin', 's')};
    color: ${designTokens.content.dark};
    margin-top: 0;
  `;
  
  const contentElement = document.createElement('div');
  contentElement.innerHTML = content;
  contentElement.style.cssText = `
    font-family: ${designTokens.typography.family.body};
    font-size: ${designTokens.typography.size.m};
    color: ${designTokens.content.dark};
  `;
  
  const variantStyles = {
    default: {
      backgroundColor: designTokens.surface.standard,
      border: `${getToken('border', 'size.s')} solid ${designTokens.surface.grey}`
    },
    primary: {
      backgroundColor: designTokens.surface['primary-light'],
      border: `${getToken('border', 'size.s')} solid ${designTokens.surface.primary}`
    },
    secondary: {
      backgroundColor: designTokens.surface['secondary-light'],
      border: `${getToken('border', 'size.s')} solid ${designTokens.surface.secondary}`
    }
  };
  
  Object.assign(card.style, {
    borderRadius: getToken('border', 'radius.m'),
    padding: getToken('padding', 'l'),
    marginBottom: getToken('margin', 'm'),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    ...variantStyles[variant]
  });
  
  card.appendChild(titleElement);
  card.appendChild(contentElement);
  
  return card;
}

// Função para criar uma paleta de cores
function createColorPalette() {
  const palette = document.createElement('div');
  palette.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${getToken('gap', 's')};
    margin: ${getToken('margin', 'l')} 0;
  `;
  
  Object.entries(designTokens.surface).forEach(([key, value]) => {
    const colorSwatch = document.createElement('div');
    colorSwatch.textContent = key;
    colorSwatch.style.cssText = `
      background-color: ${value};
      color: ${key.includes('light') ? designTokens.content.dark : designTokens.content.light};
      padding: ${getToken('padding', 's')};
      border-radius: ${getToken('border', 'radius.s')};
      text-align: center;
      font-size: ${designTokens.typography.size.sm};
      font-family: ${designTokens.typography.family.body};
    `;
    palette.appendChild(colorSwatch);
  });
  
  return palette;
}

// Função para criar um exemplo de espaçamento
function createSpacingDemo() {
  const demo = document.createElement('div');
  demo.style.cssText = `
    background-color: ${designTokens.surface.grey};
    padding: ${getToken('padding', 'm')};
    border-radius: ${getToken('border', 'radius.s')};
    margin: ${getToken('margin', 'm')} 0;
  `;
  
  Object.entries(designTokens.padding)
    .filter(([key]) => key !== 'empty')
    .forEach(([key, value]) => {
      const spacingBox = document.createElement('div');
      spacingBox.style.cssText = `
        background-color: ${designTokens.surface.primary};
        height: 20px;
        width: ${value};
        border-radius: ${getToken('border', 'radius.s')};
        margin-bottom: ${getToken('margin', 'xs')};
      `;
      demo.appendChild(spacingBox);
    });
  
  return demo;
}

// Função para inicializar a aplicação
function initializeApp() {
  const app = document.getElementById('app');
  
  // Criar header
  const header = document.createElement('header');
  header.style.cssText = `
    background-color: ${designTokens.surface.primary};
    color: ${designTokens.content.light};
    padding: ${getToken('padding', 'l')};
    border-radius: ${getToken('border', 'radius.m')};
    margin-bottom: ${getToken('margin', 'l')};
  `;
  
  const title = document.createElement('h1');
  title.textContent = 'LED Telecom Design Tokens';
  title.style.cssText = `
    font-family: ${designTokens.typography.family.title};
    font-size: ${designTokens.typography.size['2xl']};
    margin: 0;
  `;
  
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Demonstração dos tokens em JavaScript vanilla';
  subtitle.style.cssText = `
    font-size: ${designTokens.typography.size.m};
    margin: ${getToken('margin', 's')} 0 0 0;
  `;
  
  header.appendChild(title);
  header.appendChild(subtitle);
  
  // Criar container principal
  const container = document.createElement('div');
  container.style.cssText = `
    max-width: 1200px;
    margin: 0 auto;
  `;
  
  // Adicionar cards
  const buttonCard = createCard('Botões', '');
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    gap: ${getToken('gap', 's')};
    flex-wrap: wrap;
  `;
  
  buttonContainer.appendChild(createButton('Primary', 'primary', 'small'));
  buttonContainer.appendChild(createButton('Secondary', 'secondary', 'medium'));
  buttonContainer.appendChild(createButton('Error', 'error', 'large'));
  
  buttonCard.appendChild(buttonContainer);
  
  const colorCard = createCard('Paleta de Cores', '');
  colorCard.appendChild(createColorPalette());
  
  const spacingCard = createCard('Espaçamento', '');
  spacingCard.appendChild(createSpacingDemo());
  
  // Montar a aplicação
  container.appendChild(buttonCard);
  container.appendChild(colorCard);
  container.appendChild(spacingCard);
  
  app.appendChild(header);
  app.appendChild(container);
}

// Inicializar quando o DOM estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

export { createButton, createCard, createColorPalette, createSpacingDemo };
