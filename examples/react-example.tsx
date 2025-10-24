import React from 'react';
import { designTokens, getToken } from '@led-telecom/design-tokens';

// Exemplo de componente React usando os tokens
const Button: React.FC<{
  variant?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ variant = 'primary', size = 'medium', children, onClick }) => {
  const getButtonStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: getToken('border', 'radius.m'),
      cursor: 'pointer',
      fontFamily: designTokens.typography.family.body,
      fontWeight: designTokens.typography.weight.medium,
      transition: 'all 0.2s ease',
    };

    const sizeStyles = {
      small: {
        padding: `${getToken('padding', 'xs')} ${getToken('padding', 's')}`,
        fontSize: designTokens.typography.size.sm,
      },
      medium: {
        padding: `${getToken('padding', 's')} ${getToken('padding', 'm')}`,
        fontSize: designTokens.typography.size.m,
      },
      large: {
        padding: `${getToken('padding', 'm')} ${getToken('padding', 'l')}`,
        fontSize: designTokens.typography.size.l,
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: designTokens.surface.primary,
        color: designTokens.content.light,
      },
      secondary: {
        backgroundColor: designTokens.surface.secondary,
        color: designTokens.content.dark,
      },
      error: {
        backgroundColor: designTokens.surface.error,
        color: designTokens.content.light,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <button style={getButtonStyles()} onClick={onClick}>
      {children}
    </button>
  );
};

// Exemplo de card usando tokens
const Card: React.FC<{
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}> = ({ title, children, variant = 'default' }) => {
  const getCardStyles = () => {
    const baseStyles = {
      borderRadius: getToken('border', 'radius.m'),
      padding: getToken('padding', 'l'),
      marginBottom: getToken('margin', 'm'),
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const variantStyles = {
      default: {
        backgroundColor: designTokens.surface.standard,
        border: `${getToken('border', 'size.s')} solid ${designTokens.surface.grey}`,
      },
      primary: {
        backgroundColor: designTokens.surface['primary-light'],
        border: `${getToken('border', 'size.s')} solid ${designTokens.surface.primary}`,
      },
      secondary: {
        backgroundColor: designTokens.surface['secondary-light'],
        border: `${getToken('border', 'size.s')} solid ${designTokens.surface.secondary}`,
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
    };
  };

  return (
    <div style={getCardStyles()}>
      <h3 style={{ 
        fontFamily: designTokens.typography.family.title,
        fontSize: designTokens.typography.size.l,
        marginBottom: getToken('margin', 's'),
        color: designTokens.content.dark,
      }}>
        {title}
      </h3>
      <div style={{ 
        fontFamily: designTokens.typography.family.body,
        fontSize: designTokens.typography.size.m,
        color: designTokens.content.dark,
      }}>
        {children}
      </div>
    </div>
  );
};

// Exemplo de uso dos componentes
const App: React.FC = () => {
  return (
    <div style={{
      fontFamily: designTokens.typography.family.body,
      backgroundColor: designTokens.surface.standard,
      color: designTokens.content.dark,
      padding: getToken('padding', 'l'),
      minHeight: '100vh',
    }}>
      <header style={{
        backgroundColor: designTokens.surface.primary,
        color: designTokens.content.light,
        padding: getToken('padding', 'l'),
        borderRadius: getToken('border', 'radius.m'),
        marginBottom: getToken('margin', 'l'),
      }}>
        <h1 style={{
          fontFamily: designTokens.typography.family.title,
          fontSize: designTokens.typography.size['2xl'],
          margin: 0,
        }}>
          LED Telecom Design System
        </h1>
        <p style={{
          fontSize: designTokens.typography.size.m,
          margin: `${getToken('margin', 's')} 0 0 0`,
        }}>
          Exemplo de uso dos tokens em React
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Card title="Botões" variant="default">
          <div style={{ display: 'flex', gap: getToken('gap', 's'), flexWrap: 'wrap' }}>
            <Button variant="primary" size="small">Pequeno</Button>
            <Button variant="primary" size="medium">Médio</Button>
            <Button variant="primary" size="large">Grande</Button>
          </div>
          <div style={{ display: 'flex', gap: getToken('gap', 's'), flexWrap: 'wrap', marginTop: getToken('margin', 's') }}>
            <Button variant="secondary">Secondary</Button>
            <Button variant="error">Error</Button>
          </div>
        </Card>

        <Card title="Paleta de Cores" variant="primary">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: getToken('gap', 's'),
          }}>
            {Object.entries(designTokens.surface).map(([key, value]) => (
              <div
                key={key}
                style={{
                  backgroundColor: value,
                  padding: getToken('padding', 's'),
                  borderRadius: getToken('border', 'radius.s'),
                  textAlign: 'center',
                  fontSize: designTokens.typography.size.sm,
                  color: key.includes('light') ? designTokens.content.dark : designTokens.content.light,
                }}
              >
                {key}
              </div>
            ))}
          </div>
        </Card>

        <Card title="Espaçamento" variant="secondary">
          <div style={{ display: 'flex', flexDirection: 'column', gap: getToken('gap', 'xs') }}>
            {Object.entries(designTokens.padding).filter(([key]) => key !== 'empty').map(([key, value]) => (
              <div
                key={key}
                style={{
                  backgroundColor: designTokens.surface.primary,
                  height: '20px',
                  width: value,
                  borderRadius: getToken('border', 'radius.s'),
                }}
              />
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default App;
