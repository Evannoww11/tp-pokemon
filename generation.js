fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((gens) => triGen(gens));

function triGen(pokemons) {
    pokemons.forEach(e => {
        showPokemon(e)
    });
}
function showPokemon(poke) {
    let cart =
        "<div class='cart-pokemons'>" +
        "<img class='img' src='" + poke.sprites.regular + "'>" +
        "<h4 class='nom'>" + poke.name.fr + "</h4>" +
        "</div>"
    console.log($("#bloc-gen-" + poke.generation))
    let container = $("#bloc-gen-" + poke.generation)
    $(container).append(cart)
}
function selectionner() {
    var selection = document.getElementById('generation');
    var valeur = selection.value;

    switch (valeur) {
        case 'gen1':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-1").show()
            break;

        case 'gen2':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-2").show()
            break;

        case 'gen3':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-3").show()
            break;

        case 'gen4':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-4").show()
            break;

        case 'gen5':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-5").show()
            break;

        case 'gen6':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-6").show()
            break;

        case 'gen7':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-7").show()
            break;

        case 'gen8':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-8").show()
            break;

        case 'gen9':
            for (let i = 0; i < $('.bloc-gen').length; i++) {
                $($('.bloc-gen')[i]).hide()
            }
            $("#bloc-gen-9").show()
            break;
    }
}