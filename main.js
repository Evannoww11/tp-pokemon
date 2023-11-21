//Affichage de la liste des article sur le site
function showListPost(list){
   
    list.forEach(element => {
        showPost(element)
    });
}

//affiche Un article dans le site
function showPost(article){
console.log(article.title);

//récupérer la cible
let cible = document.getElementById("listPost");
//construire le contenue
let contenue = `
<article class="elListPost" oneclick="showPostDetail(`+article+`)">
`+article.title+`
</article>

`;
//ajouter le contenue dans la cible
cible.innerHTML=cible.innerHTML+contenue;

}

async function getUsernameByID(id){
    
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((listPost) => showListPost(listPost))
  ;
  
