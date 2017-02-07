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

    for(var i in listaTareas) {
        var html = "<li><input type='checkbox'onclick=check("+i+") "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre + "<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right ' onclick=selecTach("+i+")>" +"</li>";


			lista.innerHTML+=html;
    }
		tareaInput.value="";
}


//function checkList(box){

	//listaTareas[box].isDone = !listaTareas[box].isDone;


	/*if(listaTareas[box].isDone == false){
		listaTareas[box].isDone = true;
		//console.log();
		//lista.getElementsByClassName("works")[box].style.textDecoration="line-through";
	}else{
		listaTareas[box].isDone = false;
		//lista.getElementsByClassName("works")[box].style.textDecoration="none";
	}

	();
}*/

function eliminar(tach){
	listaTareas.splice(tach,1);
	drawTasksList();

}

/*---------------------------------------------------------------*/
/*
var textarea = document.getElementById("texto");


var listaTareas = [];


function agregar(){

	if(textarea.value == "" || textarea.value == 0){
		alert('Tienes que ingresar tarea');
	}else{

		listaTareas.push({nombre:textarea.value, isDone:false});
		drawTasksList();
	}
}


function drawTasksList(){

	var lista = document.getElementById("lista");

	//funcion dibujar tareas
	lista.innerHTML = "";
	for (var i in listaTareas){
		var html = "<li class='works' style = '"+ (listaTareas[i].isDone?"text-decoration:line-through":"") + "' ><input type='checkbox' onclick='checkList("+i+")'  "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre + "<i class='glyphicon glyphicon-trash' onclick='selecTach("+i+")'>" + "</Li>";

		lista.innerHTML += html;

	}

	textarea.value = "";
	textarea.focus();
	}



function checkList(box){

	listaTareas[box].isDone = !listaTareas[box].isDone;


	/*if(listaTareas[box].isDone == false){
		listaTareas[box].isDone = true;
		//console.log();
		//lista.getElementsByClassName("works")[box].style.textDecoration="line-through";
	}else{
		listaTareas[box].isDone = false;
		//lista.getElementsByClassName("works")[box].style.textDecoration="none";
	}*/

	/*();
}

function selecTach(tach){
	listaTareas.splice(tach,1);
	drawTasksList();

}*/





















// funcion para eliminar la tarea haciendo click al icono:
/*/var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var listaTareas = [];

function onButtonClick (){
    var lista = document.getElementById("lista");
    var texto=document.getElementById("texto");
    if(texto.value.length!=0){
    listaTareas.push({nombre:texto.value,isDone:false});
    texto.focus();
    texto.value=""
    drawTasksList();
    }else{
        alert("ingresa una tarea");
    }
}

function drawTasksList (){
    var lista = document.getElementById("lista");
    lista.innerHTML="";
    for(var i in listaTareas){
        var html = "<li class='tarea'><input class='check' onclick='selectCheck("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+"<span "+(listaTareas[i].isDone?"style='text-decoration:line-through'":"style='text-decoration:none'")+" id='new'>"+listaTareas[i].nombre+"</span><i onclick='removeSpan("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";

        lista.innerHTML += html;
    }
}

function selectCheck (_index){
    if(listaTareas[_index].isDone==false){
        listaTareas[_index].isDone=true;
    }else{
        listaTareas[_index].isDone=false;
    }
    drawTasksList();
}

function removeSpan(_value){
    listaTareas.splice(_value, 1);
    drawTasksList();
}*/
