
import { useState } from "react";
// => on importe la fonction hook "useState" depuis la bibliothèque React;


function LikesPage(){
// => on declare la fonction "LikesPage";

     const [likes, setLikes] = useState(0);
     const [message, setMessage] = useState(false)
      // => on utilise le hook "useState" pour déclarer une variable appelée “likes“ avec une valeur initiale de 0, La fonction “setLikes“ est utilisée pour mettre à jour la valeur de "likes".


    const handLikeClick = () =>{
        if (likes < 5 ) {
        setLikes(likes + 1);
    }else {
        setMessage(true);

    }
    };
    
    // => la fonction fait: lorsque on click "setLikes" pour augmenter (ici de 1 a chaque click)
    const handClosed = () =>{
        setMessage(false)
    }

    
        return (
        <main>
            {message && (
            <div>
                <p>Vous ne pouvez plus liker</p>
                <button onClick={handClosed}>Fermer</button> 
            </div>
            )};
            
            <button onClick={handLikeClick}>Like</button>
            <p>Vous avez liké {likes}fois</p>
        </main>

    )
    // => on "return" via la fonction, une balise <p> qui affiche le nombre de likes aprés click.

}

export default LikesPage;

// le composant "LikesPage" est exporté pour qu'il puisse être utilisé ailleurs dans l'application (ici dans le fichier App.jsx).