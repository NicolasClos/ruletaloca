"use client"

import React, { useState } from "react";
import Image from 'next/image'
import ruletaImg from '../img/ruleta.png'
import boton from '../img/boton.png'


const Ruleta = () => {

    const [girando, setGirando] = useState(false);
    const [angulo, setAngulo] = useState(0)

    const girarRuleta = () => {
        if (girando) return;
    
    
        console.log('GIRANDO')
        setGirando(true);
    
        const vueltas = Math.floor(Math.random() * 5) + 3;
        const anguloFinal = Math.random() * 360;
        const nuevoAngulo = vueltas * 360 + anguloFinal; 

        setAngulo(prevAngulo => prevAngulo + nuevoAngulo);

        setTimeout(() => {
          setGirando(false);
        }, 5000);
      };

    return (
        <div className="ruleta-container">
            <div className={`ruleta ${girando ? "girar" : ""}`}>
                <Image
                    id="img-ruleta"
                    src={ruletaImg}
                    alt="Ruleta"
                    className={`ruleta ${girando ? "girando" : ""}`}
                    style={{ transform: `rotate(${angulo}deg)` }}
                />
            </div>
            <Image  
                className="boton-girar" 
                onClick={girarRuleta}
                src={boton}
                alt="Ruleta"
            />
        </div>
    );
};

export default Ruleta