//1. Importation "useState" depuis React:
     import { useState } from "react";

      // => Cette ligne import "useState" depuis la bibliothèque React. "useState" est un hook de React qui permet à un composant fonctionnel de conserver un état local.

//2. Définition du Composant => Cette ligne déclare la fonction FormMessagePage, qui est un composant React.
function FormMessagePage(){
    // Déclaration de l'Etat "message" avec "useState"
    // => Ici on utilise le hook "useState" pour déclarer une variable d'état appelée "message" avec une valeur initiale vide("").La fonction "setMessage" est utilisée p"message"
    const [message, setMessage] = useState("");
   // Définition de la fonction "handMessageChange";
   // =>Cette fonction est appelée chaque fois que le contenu de la zone de texte ( input) change. Elle prend l'objet event(qui représente l'événemsetMessagepour mettre à jour la valeur de messageavec le contenu actuel de la zone de texte.
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    // Rendu du formulaire dans la fonction "return";
    // => La fonction returnrenvoie le JSX (syntaxe JavaScript étendue) qui représente la structure du composant. il ylabel) et une zone de texte ( input). Lorsque le contenu de la zone de texte change, la fonction handleMessageChangeest appelée. 
    return (
        <form action="">
            <label htmlFor="">
                Message
                <input onChange={handleMessageChange}type="text" name="message" />
            </label>
            <p>Vous avez envoyé : "{message}</p>
        </form>

    )
}


export default FormMessagePage;

/**
 * import { useState } from "react";

function FormMessagePage() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form>
      <label>
        Message
        <input onChange={handleMessageChange} type="text" name="message" />
      </label>
      <p>Vous avez envoyé : "{message}"</p>
    </form>
  );
}

export default FormMessagePage;
 */