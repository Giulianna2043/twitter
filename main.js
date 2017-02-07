var listaTareas = [];
var tareaInput=document.getElementById("tareaInput");
//var listaTareas = [{nombre:tareaInput,isDone:false}];

//var btnNuevaTarea=document.getElementById("btn-agregar");
//btn-agregar.setAttribute("onclick","onButtonClick()");[
function agregar() {
	if(tareaInput.value=="" || tareaInput.value==0){
		tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
	}else {
		listaTareas.push({nombre:tareaInput.value, isDone:false});
	 drawTasksList();
	}
}

//funcion k encarga  de cargar las tareas en lista
function drawTasksList(){
   var lista=document.getElementById("lista");

	 lista.innerHTML ="";

    for(var i in listaTareas) {
        var html = "<li style='"+(listaTareas[i].isDone?"text-decoration:line-through ":"")+"'><input type='checkbox' onclick=check("+i+") "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre +
				"<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right ' onclick=eliminar("+i+") >" +"</li>";


			lista.innerHTML+=html;
    }

		tareaInput.value="";
		tareaInput.focus();
}


function check(_index){
    listaTareas[_index].isDone = !listaTareas[_index].isDone;
		drawTasksList();
}

function eliminar(tacho){
	 listaTareas.splice(tacho,1);
	 drawTasksList();
}
