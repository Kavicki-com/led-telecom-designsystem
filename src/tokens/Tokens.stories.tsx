import type { Meta, StoryObj } from '@storybook/react';
import { designTokens } from '../tokens';

const meta: Meta = {
    title: 'Design Tokens',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Visualização dos tokens de design do LED Telecom Design System.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story para cores de superfície
export const SurfaceColors: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h2>Cores de Superfície</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                {Object.entries(designTokens.surface).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: value,
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                marginBottom: '8px',
                            }}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{key}</span>
                        <span style={{ fontSize: '10px', color: '#666' }}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    ),
};

// Story para cores de conteúdo
export const ContentColors: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h2>Cores de Conteúdo</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                {Object.entries(designTokens.content).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: value,
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                marginBottom: '8px',
                            }}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{key}</span>
                        <span style={{ fontSize: '10px', color: '#666' }}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    ),
};

// Story para espaçamentos
export const Spacing: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h2>Espaçamentos</h2>

            <div style={{ marginBottom: '32px' }}>
                <h3>Padding</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(designTokens.padding).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div
                                style={{
                                    width: '100px',
                                    height: '40px',
                                    backgroundColor: '#e0e0e0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                {key}
                            </div>
                            <div
                                style={{
                                    width: '200px',
                                    height: '40px',
                                    backgroundColor: '#f0f0f0',
                                    padding: value ? `${value}px` : '0',
                                    border: '1px solid #ccc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                padding: {value}px
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
                <h3>Margin</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(designTokens.margin).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div
                                style={{
                                    width: '100px',
                                    height: '40px',
                                    backgroundColor: '#e0e0e0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                {key}
                            </div>
                            <div
                                style={{
                                    width: '200px',
                                    height: '40px',
                                    backgroundColor: '#f0f0f0',
                                    margin: value ? `${value}px` : '0',
                                    border: '1px solid #ccc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                margin: {value}px
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Gap</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(designTokens.gap).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div
                                style={{
                                    width: '100px',
                                    height: '40px',
                                    backgroundColor: '#e0e0e0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                {key}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: value ? `${value}px` : '0',
                                    border: '1px solid #ccc',
                                    padding: '8px',
                                }}
                            >
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#ff6b6b' }}></div>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#4ecdc4' }}></div>
                                <div style={{ width: '20px', height: '20px', backgroundColor: '#45b7d1' }}></div>
                            </div>
                            <span style={{ fontSize: '12px' }}>gap: {value}px</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};

// Story para tipografia
export const Typography: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h2>Tipografia</h2>

            <div style={{ marginBottom: '32px' }}>
                <h3>Famílias de Fonte</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(designTokens.typography.family).map(([key, value]) => (
                        <div key={key}>
                            <span style={{ fontWeight: 'bold', marginRight: '16px' }}>{key}:</span>
                            <span style={{ fontFamily: value, fontSize: '18px' }}>{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
                <h3>Tamanhos de Fonte</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(designTokens.typography.size).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ width: '60px', fontSize: '12px' }}>{key}:</span>
                            <span style={{ fontSize: `${value}px`, fontFamily: designTokens.typography.family.body }}>
                                Texto com tamanho {value}px
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Pesos de Fonte</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Object.entries(designTokens.typography.weight).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ width: '80px', fontSize: '12px' }}>{key}:</span>
                            <span style={{ fontWeight: value.toLowerCase(), fontSize: '16px' }}>
                                Texto com peso {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};

// Story para bordas
export const Borders: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h2>Bordas</h2>

            <div style={{ marginBottom: '32px' }}>
                <h3>Tamanhos de Borda</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(designTokens.border.size).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ width: '60px', fontSize: '12px' }}>{key}:</span>
                            <div
                                style={{
                                    width: '100px',
                                    height: '50px',
                                    backgroundColor: '#f0f0f0',
                                    border: `${value}px solid #333`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                }}
                            >
                                {value}px
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Raio de Borda</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(designTokens.border.radius).map(([key, value]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ width: '60px', fontSize: '12px' }}>{key}:</span>
                            <div
                                style={{
                                    width: '100px',
                                    height: '50px',
                                    backgroundColor: '#4ecdc4',
                                    borderRadius: `${value}px`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    color: 'white',
                                }}
                            >
                                {value}px
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};
