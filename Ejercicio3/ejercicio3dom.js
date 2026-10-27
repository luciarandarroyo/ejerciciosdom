/*1.1 Basandote en el array siguiente, crea una lista 
ul > li 
dinámicamente en el html que imprima cada
 uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que c
ontenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para 
cada uno de los 
divs que elimine ese mismo elemento del html.*/
/*const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const crearul=document.createElement("ul"); 
for(const country of countries){
    const crearli=document.createElement("li");
    crearli.textContent=country;
    crearul.appendChild(crearli);}
    

  

document.body.appendChild(crearul)*/
/*const eliminar=document.querySelector(".fn-remove-me");

eliminar.remove();
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const escribeaqui=document.querySelector(".printHere"); 
const crearotroul=document.createElement("ul")
escribeaqui.appendChild(crearotroul)
for (const car of cars){
    const crearotroli=document.createElement("li");
    crearotroli.textContent=car;
    crearotroul.appendChild(crearotroli);
    
}; */

 

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for(const country of countries){
    const divcountry=document.createElement("div")
    const h4country=document.createElement("h4"); 
    const imagen=document.createElement("img");
    h4country.textContent=country.title;
    imagen.src=country.imgUrl;
    divcountry.appendChild(h4country);
    divcountry.appendChild(imagen);
    document.body.appendChild(divcountry);
    const button=document.createElement("button");
    divcountry.appendChild(button)
    button.textContent="borrar"; 
    button.addEventListener("click",()=>divcountry.remove())

};




