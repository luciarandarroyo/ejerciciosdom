const boton=document.querySelector("#btnToClick"); 
boton.addEventListener("click", (event)=>console.log(event));
const focus1=document.querySelector(".focus");
focus1.addEventListener("focus",()=>console.log(focus1.value));
const inpun1=document.querySelector(".input");
inpun1.addEventListener("input", ()=>console.log(inpun1.value))