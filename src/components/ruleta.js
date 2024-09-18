'use client'

import React, { useState } from 'react';

const Ruleta = () => {
    const [girando, setGirando] = useState(false);
    const [angulo, setAngulo] = useState(0);
    const [resultado, setResultado] = useState(null);

    const categorias = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 5'];

    const girarRuleta = () => {
        if (girando) return;

        setGirando(true);
        const giroCompleto = 360 * 5; // 5 vueltas completas
        const anguloAleatorio = Math.floor(Math.random() * 360); // Ángulo aleatorio entre 0 y 360
        const nuevoAngulo = giroCompleto + anguloAleatorio;

        setAngulo(nuevoAngulo);

        setTimeout(() => {
            const categoriaSeleccionada = Math.floor((anguloAleatorio / 360) * categorias.length);
            setResultado(categoriaSeleccionada);
            setGirando(false);
        }, 5000); // 5 segundos de rotación
    };

    return (
        <div className="ruleta-container">
            <div className="ruleta-wrapper">
                <div
                    className={`ruleta ${girando ? 'girando' : ''}`}
                    style={{ transform: `rotate(${angulo}deg)` }}
                >
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            className={`sector sector-${index + 1} ${resultado === index ? 'resaltado' : ''}`}
                        >
                            <span className="texto-categoria">{categoria}</span>
                        </div>
                    ))}
                </div>
                <div className="boton-girar" onClick={girarRuleta}>
                    <span>GIRAR</span>
                </div>
            </div>
            {resultado !== null && (
                <div className="resultado">Resultado: {categorias[resultado]}</div>
            )}
        </div>
    );
};

export default Ruleta;
