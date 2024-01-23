$(document).ready(function(){

mostrarTodosJSON();

$("#botonMostrarTodos").click(function(e){
    e.preventDefault();
    mostrarTodosJSON();
});

$("#botonLimpiar").click(function(e){
    e.preventDefault();
    limpiar();
})

$("#botonBuscar").click(function(e){
    e.preventDefault();
    var nombrePokemon = $("#campoBuscar").val().toLowerCase();
    if (nombrePokemon) {
        
      buscarPokemonJSON(nombrePokemon);
    }
    
})



})

function limpiar(){
    $("#pictures-container").empty();
    $("#campoBuscar").val("");
}

function buscarPokemonJSON(nombrePokemon){
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            buscarPokemon(data,nombrePokemon);
        }
    });
}

function buscarPokemon(data,nombrePokemon){
    console.log(nombrePokemon)
    limpiar();
    var encontrado = false;
    var pokemonEncontrado;
    for(let i=0;i<data.pokemones.length;i++){
        console.log(nombrePokemon+" "+data.pokemones[i].nombre);
        if(data.pokemones[i].nombre == nombrePokemon){
            console.log(true);
            encontrado = true;
            pokemonEncontrado = data.pokemones[i];
            break;
        }
    }

    if(encontrado == true){
        crearCard(pokemonEncontrado);
    }
}

function mostrarTodosJSON(){
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            mostrarTodos(data);
        }
    });
}

function mostrarTodos(data){
    limpiar();
    //console.log(divContainer.val());
    for(let i=0; i<data.pokemones.length; i++){
        crearCard(data.pokemones[i]);

    }
    
}

function crearCard(pokemon){
    let divCard = $("<div></div>");
    divCard.addClass("card");

    let nombre = $("<h3></h3>");
    nombre.append(pokemon.num+" "+pokemon.nombre);
    nombre.addClass("nombre");
    
    divCard.append(nombre);


    let img = $("<img></img>");
    img.attr("src",pokemon.img);
    img.addClass("card-img");

    divCard.append(img);

    let info = $('<p></p>');
    info.append(pokemon.info);
    info.addClass("info");

    divCard.append(info);

    
    $("#pictures-container").append(divCard);

}