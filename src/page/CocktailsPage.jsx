function CocktailsPage (){
    // la fonction "fetch" nous permet de reccuperer une API qui nous donne un fichier json
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response) => {
        // ici la variable reccupere les informations du fichier json
    return response.json();
        })
        .then ((json) => {
            // ici on reccupere le fichiers json
            console.log(json);
        });
        

    return <p>test</p>
}
export default CocktailsPage;

/**
 * function CocktailsPage() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });

  return <p>test</p>;
}

export default CocktailsPage;
 */