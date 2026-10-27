const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const crearul=document.createElement("ul");
for(const place of places){
    const crearli=document.createElement("li");
    crearli.textContent=place;
    crearul.appendChild(crearli)
};
const escribeaqui=document.querySelector('[data-function="printHere"]');
escribeaqui.appendChild(crearul)
