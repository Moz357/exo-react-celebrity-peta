
import { useState } from "react";
// => on importe la fonction hook "useState" depuis la bibliothèque React;


function LikesPage(){
// => on declare la fonction "LikesPage";

     const [likes, setLikes] = useState(0);
     // => on utilise le hook "useState" pour déclarer une variable appelée “likes“ avec une valeur initiale de 0, La fonction “setLikes“ est utilisée pour mettre à jour la valeur de "likes".


    const handLikeClick = () =>{
        setLikes(likes + 1);
    };
    // => la fonction fait: lorsque on click "setLikes" pour augmenter (ici de 1 a chaque click)

    
        return (
        <main>
            <button onClick={handLikeClick}>Like</button>
            <p>Vous avez liké {likes}fois</p>
        </main>
    )
    // => on "return" via la fonction, une balise <p> qui affiche le nombre de likes aprés click.

}

export default LikesPage;

// le composant "LikesPage" est exporté pour qu'il puisse être utilisé ailleurs dans l'application (ici dans le fichier App.jsx).