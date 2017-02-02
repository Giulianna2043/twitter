(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
 
	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);
      
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
 
		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
        //Agregamos 
 
		tareaInput.value = "";
 
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
 
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Eventos
 
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
 
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	}
}());





































/*var boton = document.getElementById('boton');
var input = document.getElementById('mensaje');
var lista = document.getElementById('lista');

boton.addEventListener('click', onButtonClick);

function onButtonClick(evt)
{
	input.className = "otraclase otraclasemas";
	console.log(input.classList);
	//agregarMensaje();
}

function agregarMensaje()
{
	var item = document.createElement('li');
	var span = document.createElement('span');

	span.innerHTML = input.value;
	item.appendChild(span);
	lista.appendChild(item);

	input.value = '';
	input.focus();

	span.addEventListener('click', onItemClick);
}

function onItemClick(evt)
{
	console.log(evt.target.parentNode.parentNode);
	//var padre = evt.target.parentNode.parentNode;
	lista.removeChild(evt.target.parentNode);
}*/



