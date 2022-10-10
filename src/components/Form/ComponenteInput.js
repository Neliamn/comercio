import React from 'react';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, nombre, leyendaError, expresionRegular, funcion}) => {


	const onChange = (event) => {
		cambiarEstado({...estado, campo: event.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: true});
			} else {
				cambiarEstado({...estado, valido: false});
			}
		}

		if(funcion){
			funcion();
		}
	}


    return (
		<div>
            <label htmlFor={nombre}>{label}</label>
            <input  type={tipo} 
                    placeholder={placeholder} 
                    id={nombre}
                    name={nombre}
                    value={estado.campo}   
                    onChange={onChange} 
                    onKeyUp={validacion}
                    onBlur={validacion}            
                />
                {estado.valido !== null && !estado.valido ? <p className='error'>{leyendaError}</p>: ''}
		</div>
	);

}

export default ComponenteInput;