/*Basandote en el array siguiente, crea una lista
 ul > li dinámicamente en el html 
que imprima cada uno de los albums.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const crearul=document.createElement("ul");
for(const album of albums){
    const crearli=document.createElement("li");
    crearli.textContent=album;
    crearul.appendChild(crearli)

};

document.body.appendChild(crearul)