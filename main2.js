let container = $("#poke_container")

fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((pokemons) => showList(pokemons));

function showList(pokemons) {
    pokemons.forEach(e => {
        showPokemon(e)
    });
    let random = Math.floor(Math.random() * $('.cart-pokemons').length);
    $($('.cart-pokemons')[random]).show()
}
function showPokemon(poke) {
    let cart = "<div class='cart-pokemons'>" +
        "<img class='img' src='" + poke.sprites.regular + "'>" +
        "<h4 class='nom'>" + poke.name.fr + "</h4>" +
        "</div>"

        $(container).append(cart)
        
        for (let i=0; i<$('.cart-pokemons').length; i++) {
            $($('.cart-pokemons')[i]).hide()
        }




}