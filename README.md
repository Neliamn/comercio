# Supermercado de productos de mascotas

<p>Proyecto para una petshop desarrollada en React.</p> 

## Tenologías usadas

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,html,js,git,github,firebase" />
  </a>
</p>

## ¿De qué trata este proyecto?

Este proyecto despliega una aplicación web en un puerto determinado. Esta web contiene el negocio relacionado con una tienda de mascotas, donde se pueden comprar artículos cribando por categorías.

La página dispone de un carrito de la compra donde se iran sumando los artículos que se han ido añadiendo durante el proceso de compra.

Al finalizar, se rellenará un formulario con los datos del cliente y el pedido quedará registrado en una base de datos.

## Requisitos.

Para desplegar este proyecto es necesaria la instalación de Node.
Dependiendo de su sistema operativo, el proceso de instalación puede variar. 
En cualquier caso los pasos para la instalación del mismo lo podemos encontrar en la página oficial de <a href="https://nodejs.org/es/">Node</a>

Una vez instalado Node, se necesita instalar un gestor de paquetes como <a href="https://www.npmjs.com/">Npm</a>
.

Con ```npm``` instalado, podremos instalar la extensión que nos permite crear proyectos ```React```.

``` 
install -g create-react-app 
```

## ¿Cómo se creó este proyecto?

Este proyecto se creó usando el siguiente comando:

```create-react-app comercio```

Este comando nos creó la estructura básica de un proyecto de ```React```.

## Instalación de dependencias

El proyecto necesitó las siguientes dependencias:

<ul>
    <li>react-router-dom</li>
    <li>react-spinners</li>
    <li>firebase</li>
</ul>

Estas dependencias se añadieron usando el gestor de paquetes ```npm```. Ejemplo:

```
npm install react-router-dom
```

## Recursos

El soporte de datos de esta aplicación viene dado de la mano de <a href="https://firebase.google.com/">Firebase</a>
, que nos proporciona una persistencia de datos de la aplicación. Las entidades almacenadas son:
<ul>
    <li>Productos</li>
    <li>Pedidos</li>
</ul>

La entidad producto tiene una estructura como esta:

```javascript
     {
        title:'Cama roja',
        description:'una camita a cuadros roja',
        price:24,
        stock:12,
        category:'perros',
        img: 'https://res.cloudinary.com/drlywmdcu/image/upload/v1661916239/16656-cuna-mullida-borreguito-scot_yhonqi.jpg',
    }
```

## ¿Cómo se pone en marcha el proyecto?

Este proyecto se pone en marcha ejecutando el siguiente comando:

```
npm start
```

Esto crea un endpoint con un puerto determinado que podrá ser abierto en un explorador de internet.

```
http://localhost:3000/
```