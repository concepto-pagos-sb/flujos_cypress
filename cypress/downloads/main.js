/*let peliculas = [
    {nombre : "La llorona", calificacion: 8},
    {nombre : "El principito", calificacion:1},
    {nombre: "sancho panza", calificacion:6}
];

for (let numero of peliculas)
{
    if(numero.calificacion > 5)
    {
        console.log(`${numero.nombre} (${numero.calificacion})`);
    }
    else
    {
        console.log("holis");

    }
    
}

let a=4;
 let n= a ? "a" : "b";
 
//------------programacion-------funcional------//

const numeros = [3, 7, 2, 9, 4, 6];

function funcion_1(a){

    return a*2
}

function funcion_2(b){
    return b**2
}


function numero_1 (fn,arreglo){
    const new_arreglo = [];
    for(let numero of arreglo)
    {
        const j=fn(numero)
        new_arreglo.push(j);
    }
    return new_arreglo;
    
    
    
}
console.log(numero_1(funcion_1,numeros));

console.log(numero_1(funcion_2,numeros));

const precios =[100,250,80,400];

function iva(precios2) {

    return precios2.map(variable => variable*1.16);

}

console.log(iva(precios));

const alumnos = [
    {nombre: "Ana", calificacion:8},
    {nombre: "Luis", calificacion:6},
    {nombre: "Carlos", calificacion:9}
];

function convertirMayusculas(estudiantes)
{
    return estudiantes.map(variable => variable.nombre.toUpperCase());

}

console.log(convertirMayusculas(alumnos));*/


const edades = [12,18,25,14,30,16];

const mayores = edades.filter(usuario => usuario>=18);

const multiplicados = mayores.map(usuario=> usuario*2);

console.log(mayores);
console.log(multiplicados);







