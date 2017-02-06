var listaTareas = [];
var tareaInput=document.getElementById("tareaInput");
var listaTareas = [{nombre:tareaInput,isDone:false}];

var btnNuevaTarea=document.getElementById("btn-agregar");
btn-agregar.setAttribute("onclick","onButtonClick()");

//funcion k encarga  de cargar las tareas en lista
function drawTasksList(){
   var lista=document.getElementById("lista"); 
    
    for(var i in listaTareas) {
        var html = "<li><input class=onclick='selectCheck'(+i+)type='checkbox' "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre.value + "<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right '>" +"</li>";
        var html = "<li><input class=onclick='selectCheck'(+i+)type='checkbox' "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre.value + "<i type='onclick'  class='glyphicon  glyphicon-trash , icon , pull-right '>" +"</li>";
        
        lista.innerHTML+=html;
    }     
}

/*---------------------------------------------------------------*/
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




























