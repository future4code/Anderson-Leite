import React from 'react';
import '../App.css';

export function Etapa3() {
  return (
    <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <div>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
            </div>
        
            <div>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>

                </select>
            </div>
    </div>
  );
}