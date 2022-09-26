import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebaseConfig';

const Form = ({ cart, totalPrice, clear, idCompra }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const Submit = (event) => {
        event.preventDefault();
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

    const formNombre = (event) => {
        setNombre(event.target.value);
    };

    const formApellido = (event) => {
        setApellido(event.target.value);
    };

    const formEmail = (event) => {
        setEmail(event.target.value);
    };

    const formPhone = (event) => {
        setPhone(event.target.value);
    };

    return (
        <div>
            <form className='formulario' action="" onSubmit={Submit}>
                <input type="text" placeholder="Nombre" name="nombre"
                    value={nombre}
                    onChange={formNombre} />

                <input type="text" placeholder="Apellido" name="apellido"
                    value={apellido}
                    onChange={formApellido} />

                <input type="text" placeholder="email" name="email"
                    value={email}
                    onChange={formEmail} />

                <input type="text" placeholder="Telefono" name="telefono"
                    value={phone}
                    onChange={formPhone} />

                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;