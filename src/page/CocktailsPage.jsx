function CocktailsPage (){
    
    const [cocktails, setCocktails] = useState(null);
    // => on utilise le hook "useState" pour déclarer une variable appelée “cocktails“ avec une valeur initiale de null, La fonction “setcocktails“ 
        //est utilisée pour mettre à jour la valeur de "cocktails".

    if (!cocktails) {
        //  on mais une condition (ici nococktails)

    // la fonction "fetch" nous permet de réccupérer une API qui nous donne un fichier json
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((cocktailsResponse) => {
        //  dans l'attente de la variable pour réccupérer les informations du fichier json
    return cocktailsResponse.json();
        })
        .then ((cocktailsInJs) => {
            // dans l'attente de réccupérer le fichiers json pour le convertir
            console.log(cocktails)
            setCocktails(cocktails);
            // on stock la variable cocktails
        });
        

        return <main>{cocktails ? <article>cocktails prêts</article> : <p>Cocktails en cours de chargement</p>}</main>;
}
export default CocktailsPage;

/**
*import { useState } from "react";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null);

  if (!cocktails) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((coktailsResponse) => {
        return coktailsResponse.json();
      })
      .then((cocktailsInJs) => {
        console.log(cocktailsInJs);
        setCocktails(cocktailsInJs);
      });
  }

  return <main>{cocktails ? <article>cocktails prêts</article> : <p>Cocktails en cours de chargement</p>}</main>;
}

  export default CocktailsPage;
