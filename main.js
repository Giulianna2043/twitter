//var listaTareas = [];

var listaTareas = [{nombre:"tarea1",isDone:true},{nombre:"tarea2",isDone:false}];


//funcion k encarga  de cargar las tareas en lista
function drawTasksList(){
    var tareaInput=document.getElementById("tareaInput");
    var lista=document.getElementById("lista");
    var btnNuevaTarea=document.getElementById("btn-agregar");
    
    
    for(var i in listaTareas) {
        var html = "<li><input type='checkbox' "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre + "<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right '>" +"</li>";
        
        lista.innerHTML+=html;
    }    
}
// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

var agregarTarea = function(){

		var tarea = tareaInput.value;
		var	contenido = document.createTextNode(tarea);
        
        		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
    lista.appendChild(nuevaTarea)
    

































