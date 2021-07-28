import React from 'react';
import '../App.css';

export function Etapa1() {
  return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
            <div>
                <p>1. Qual o seu nome?</p>
                <input></input>
            </div>
        
            <div>
                <p>2. Qual sua idade?</p>
                <input></input>
            </div>
        
            <div>
                <p>3. Qual seu email?</p>
                <input></input>
            </div>
        
            <div>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
    </div>
  );
}