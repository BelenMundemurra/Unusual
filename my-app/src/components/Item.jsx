import React from 'react';

const ListaProductos = [
    {nombre: "Remera Blanca", precio: 200, descrip: "Camiseta corta con puntada de manga raglán cremallera",img:"../img/remera1.png",stock: 10},
    {nombre: "Remera Roja", precio: 400, descrip: "Camiseta corta de cuello asimétrico de manga con volante",img:"../img/remera2.png",stock: 15 },
    {nombre: "Remera Flores", precio: 450, descrip: "Camiseta corta 90s con estampado de figura",img:"../img/remera3.png",stock: 20},
    {nombre: "Pantalon Woow", precio: 1600, descrip: "Cargo de pierna ancha 90s talle bajo unicolor",img:"../img/pantalon1.png",stock: 10},
    {nombre: "Falda Baddie", precio: 1500, descrip: "Falda bajo con abertura de hombros asimétricos",img:"../img/falda1.png",stock: 5}
]
function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(ListaProductos)
        } else {
            rej("Acceso denegado")
        }
    })
}
consultarPromesa(true)
export default ListaProductos;