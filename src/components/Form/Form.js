import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import ComponenteInput from './ComponenteInput';

const Form = ({ cart, totalPrice, clear, idCompra }) => {

    const [nombre, setNombre] = useState({campo: '', valido: null});
    const [apellido, setApellido] = useState({campo:'', valido: null});
    const [email, setEmail] = useState({campo:'', valido: null});
    const [phone, setPhone] = useState({campo:'', valido: null});
    const [formulario, setFormulario] = useState({campo:'', valido: null});

    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
        apellidos: /^[a-zA-ZÀ-ÿ\s]{2,50}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

    const Submit = (event) => {
        event.preventDefault();

        if((nombre.valido == null || apellido.valido == null || email.valido == null || phone.valido == null)){
            setFormulario({...formulario, valido: false});
            return;
        }
        else{
            if(!nombre.valido || !apellido.valido || !email.valido || !phone.valido){
                setFormulario({...formulario, valido: false});
                return;
            }
        }

        const pedido = {
            buyer: { nombre: nombre, apellido: apellido, phone: phone, email: email },
            items: cart,
            total: totalPrice(),
            date: serverTimestamp()
        };

        const pedidosCollection = collection(db, 'pedidos');

        addDoc(pedidosCollection, pedido).then((res) => {
            idCompra(res.id);
            clear();
        });
    };


    return (
        <div className='contenedorForm'>
            <form className='formulario' action="" onSubmit={Submit}>

                <ComponenteInput
					estado={nombre}
					cambiarEstado={setNombre}
					tipo="text"
					label="Nombre"
					placeholder="Nombre"
					name="nombre"
					leyendaError="El nombre tiene que ser de 2 a 20 dígitos y solo puede contener letras."
					expresionRegular={expresiones.nombre}
                    valido={nombre.valido}
				/>

                <ComponenteInput
					estado={apellido}
					cambiarEstado={setApellido}
					tipo="text"
					label="Apellidos"
					placeholder="Apellidos"
					name="apellidos"
					leyendaError="Los apellidos tienen que ser de 2 a 50 dígitos y solo pueden contener letras."
					expresionRegular={expresiones.nombre}
                    valido={apellido.valido}
				/>

                <ComponenteInput
					estado={email}
					cambiarEstado={setEmail}
					tipo="email"
					label="Email"
					placeholder="Email"
					name="email"
					leyendaError="El campo email debe contener una dirección válida."
					expresionRegular={expresiones.correo}
                    valido={email.valido}
				/>                

                <ComponenteInput
					estado={phone}
					cambiarEstado={setPhone}
					tipo="tel"
					label="Teléfono"
					placeholder="Teléfono"
					name="telefono"
					leyendaError="Debe introducir un número de teléfono válido."
					expresionRegular={expresiones.telefono}
                    valido={phone.valido}
				/>      

                <button className='enviar' type='submit' onClick={Submit}>Enviar</button>
                {formulario.valido !== null && !formulario.valido ? <p className='error'>Debe cumplimentar el formulario.</p>: ''}   
            </form>
            
        </div>
    );
};

export default Form;