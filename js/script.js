
/**Boton 1 */
document.getElementById("text_btn")
document. addEventListener("click" , function(){
    text.classList.toggle("mostrar"); 
    if (text.classList.contains("mostrar")){
        text_btn.innerHTML="Mostrar menos";
    } 
    else{
        text_btn.innerHTML="Mostrar más";
    }
}
);
/*-- FORMULARIO------ no funciona

document.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("enviando formulario");
   const response = document.querySelector("form_respuesta");

   setTimeout(() =>{
    response.remove("none");
   }
   )
})*/

document.addEventListener("submit", (e)=> {
    e.preventDefault();
  alert("Sus datos han sido enviados")

  setTimeout(()=>{
const form= document.getElementById("formulario")
    form.reset();
  },1000);
  
  
        
    
})
