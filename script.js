$(document).ready(function(){

mostrarTodosJSON(); //se van a mostrar todos los pokemones

$("#botonLimpiar").click(function(e){
    e.preventDefault();

    limpiar();

});

$("#botonMostrarTodos").click(function(e){
    e.preventDefault();

    limpiar();
    mostrarTodosJSON();
});


});


function limpiar(){
    $("#pictures-container").empty();
}

function mostrarTodosJSON(){
    $.ajax({

        type: "GET",
        url: "data/data.json",
        dataType: "json",
        async: true,
        success: function(data){
            
           mostrarTodos(data)

        }

    });
}

function mostrarTodos(data){
    
    for(let i=0; i<data.pokemones.length;i++){
        var pokemon = data.pokemones[i];
        crearCard(pokemon);
    }
}

function crearCard(pokemon){
    //creando la cartilla del pokemon
    let divCard = $("<div></<div>");
    divCard.addClass("card");

    //creando el numero y nombre del pokemon
    let nombre = $("<h3></h3>");
    nombre.append(pokemon.num+" "+pokemon.nombre);
    nombre.addClass("nombre");

    //creando la imagen del pokemon
    let img = $("<img></img>");
    img.attr("src",pokemon.img);

    // creando la informacion del pokemon
    let info = $("<p></p>");
    info.append(pokemon.info);
    info.addClass("info");

    divCard.append(nombre);//colocando el num y nombre del pok en la cartilla
    divCard.append(img);//colocando la imagen del pok en la cartilla
    divCard.append(info);//colocando la info del pok en la cartilla

    $("#pictures-container").append(divCard); //agregando la cartilla al contenedor principal
}
