/*1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p
  utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html 
una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto
 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here*/




const divacio=document.createElement("div");
document.body.appendChild(divacio); 
const divp=document.createElement("div");
const p=document.createElement("p");
divp.appendChild(p);
document.body.appendChild(divp); 

const div6=document.createElement("div");

for (let i=0;i<6;i++){
	const p6=document.createElement("p");
	div6.appendChild(p6)
};


document.body.appendChild(div6);

const dinamico=document.createElement("p");
dinamico.textContent="Soy dinamico"
document.body.appendChild(dinamico);
const wuba=document.querySelector("fn-insert-here");
wuba.textContent="Wubba Lubba dub dub";
const crearul=document.createElement("ul");

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (let i=0;i<apps.length;i++){
	const crearli=document.createElement("li");
	crearli.textContent=apps[i];
	crearul.appendChild(crearli)
	
};
document.body.appendChild(crearul);
const eliminar=document.querySelectorAll(".fn-remove-me");
for (const elimina of eliminar){
	elimina.remove()
}; 
const pentrediv=document.createElement("p");
pentrediv.textContent="Voy en medio"; 
const divselecionado=document.querySelector("div"); 
divselecionado.appendChild(pentrediv);
document.body.appendChild(divselecionado); 
const voydentro=document.querySelectorAll("div.fn-insert-here"); 
for (const detro of voydentro){
	const pdetro=document.createElement("p");
	pdetro.textContent="Voy dentro!";
	detro.appendChild(pdetro)
};
