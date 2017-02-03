//var listaTareas = [];
var tareaInput=document.getElementById("tareaInput");
var btnNuevaTarea=document.getElementById("btn-agregar");
var listaTareas = [{nombre:tareaInput,isDone:false}];


//funcion k encarga  de cargar las tareas en lista
function drawTasksList(){
   var lista=document.getElementById("lista"); 
    
    for(var i in listaTareas) {
        var html = "<li><input onclick='select'(+i+)type='checkbox' "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre.value + "<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right '>" +"</li>";
        
        lista.innerHTML+=html;
    }     
}

/*---------------------------------------------------------------*/
// funcion para eliminar la tarea haciendo click al icono:
/*//  funcion principal que crea los elemnetos en el html:
function drawTextList(){
    var input = document.getElementById("mensaje");
    var valorInput = input.value;
// nuevo metodo:
    var listaTareas = [ {nombre: valorInput, isDone:false} ];
    var lista = document.getElementById("lista");
    for(var i in listaTareas){
        var html = "<li> <input onclick='tachar' type = 'checkbox' " + (listaTareas[i].isDone?"checked":"") +  ">" + 
        listaTareas[i].nombre + "<span class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>";
        lista.innerHTML += html;
    }
    var valorInput = document.getElementById("mensaje").value="";
    eliminarTarea();
}
// funcion para eliminar la tarea haciendo click al icono:
function eliminarTarea(){
    var eliminar = document.getElementsByClassName("icon");
    for(var c = 0; c < eliminar.length; c++){
        eliminar[c].onclick = function(){
        var lista = this.parentElement;
        lista.style.display = "none";
       }
    }
};*/




























