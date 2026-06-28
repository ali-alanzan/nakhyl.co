// resources/js/Pages/Welcome.jsx
import React from 'react';

export default function Welcome() {
    return (
        <div style={{ 
            fontFamily: 'sans-serif', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            backgroundColor: '#f9fafb',
            color: '#111827'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                🌴 Nakhyl Core
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>
                Frontend page loaded successfully via Vite!
            </p>
            <div style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', background: '#e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}>
                Route Testing: Active
            </div>
        </div>
    );
}