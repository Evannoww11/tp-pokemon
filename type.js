fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((types) => tritype(types));

function tritype(pokemons) {
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
    console.log($("#bloc-type-" + poke.type))
    let container = $("#bloc-type-" + poke.type)
    $(container).append(cart)
}
function selectionner() {
    var selection = document.getElementById('type');
    var valeur = selection.value;

    switch (valeur) {
        case 'Normal':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-1").show()
            break;

        case 'Plante':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-2").show()
            break;

        case 'Feu':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-3").show()
            break;

        case 'Eau':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-4").show()
            break;

        case 'Electrik':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-5").show()
            break;

        case 'Glace':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-6").show()
            break;

        case 'Combat':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-7").show()
            break;

        case 'Poison':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-8").show()
            break;

        case 'Sol':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-9").show()
            break;

        case 'Psy':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-10").show()
            break;

        case 'Insecte':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-11").show()
            break;

        case 'Roche':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-12").show()
            break;

        case 'Spectre':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-13").show()
            break;

        case 'Dragon':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-14").show()
            break;

            case 'Ténèbres':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-15").show()
            break;

            case 'Acier':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-16").show()
            break;

            case 'Fée':
            for (let i = 0; i < $('.bloc-type').length; i++) {
                $($('.bloc-type')[i]).hide()
            }
            $("#bloc-type-17").show()
            break;
    }
}