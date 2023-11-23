import { useState } from "react";

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
        .then((cocktailsInJs) => {
            setCocktails(cocktailsInJs.drinks);
          });
      }
    return (
        <main>
            {cocktails ? (
                // // ici on utilise la fonction map pour récupérer le tableau cocktails et on affiche le nom des cocktails (ici avec cocktail.strDrink)
            <>
            {cocktails.map((cocktail) => {
                return (
                <article>
                    <h2>{cocktail.strDrink}</h2>
                </article>
                );
            })}
            </>
        ) : (
            <p>Cocktails en cours de chargement</p>
        )}
        </main>
    );
    }
   export default CocktailsPage ;

   /**
    * import { useState } from "react";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null);

  if (!cocktails) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((coktailsResponse) => {
        return coktailsResponse.json();
      })
      .then((cocktailsInJs) => {
        setCocktails(cocktailsInJs.drinks);
      });
  }

  return (
    <main>
      {cocktails ? (
        <>
          {cocktails.map((cocktail) => {
            return (
              <article>
                <h2>{cocktail.strDrink}</h2>
              </article>
            );
          })}
        </>
      ) : (
        <p>Cocktails en cours de chargement</p>
      )}
    </main>
  );
}

export default CocktailsPage;
    */