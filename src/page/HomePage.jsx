import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import { shittyStars } from "../utils/ShittyStars";

function HomePage() {
  const shittyStarsSortedByDate = shittyStars.sort((star1, star2) => {
    return new Date(star1.publishedAt) - new Date(star2.publishedAt);
  });

  const lastShittyStars = shittyStarsSortedByDate.slice(-5);

  const shittyStarsPickedByTeam = shittyStarsSortedByDate.filter((star) => {
    return star.isPickedByTeam === true;
  });

  const lastShittyStarsPickedByTeam = shittyStarsPickedByTeam.slice(-3);

  return (
    <>
      <Header currentPage="home" />
      <main>
        <section>
          <h2>Last Celebrities: </h2>
          {lastShittyStars.map((star) => {
            return <CelebrityCard starToDisplay={star} />;
          })}
          <h2>Choix de de la rédac :</h2>
          {lastShittyStarsPickedByTeam.map((star) => {
            return <CelebrityCard starToDisplay={star} />;
          })}
        </section>
      </main>
    </>
  );
}

export default HomePage;


/**
 * 

import { Link } from "react-router-dom";
import { shittyStars } from "../utils/ShittyStars";
import Header from "../component/Header";
import CelebrityCard from "../component/CelebrityCard";
import Footer from "../component/Footer";

function HomePage(){
    const sortByPublisheDate = shittyStars.sort((date1,date2)=>{
        return new Date(date1.publishedAt) - new Date(date2.publishedAt)
    })
    const newest5Publishedstar = sortByPublisheDate.slice(-5)
    const choosedstars = shittyStars.filter(star=>{
        return shittyStars.isPickedByTeam
    })

    return(
        <>
            <Header/>
            <main>
            <h2>Les 5 célébrités les plus récentes</h2>
                {newest5Publishedstar.map(star=>{
                    return <CelebrityCard star={star}/>
                })} 
                <h2>Choix de la rédaction</h2>
                {choosedstars.map(star=>{
                    return <CelebrityCard star={star}/>
                })}
            </main>
            <Footer/>
        </>
    )
}

export default HomePage;

 */
/**
 * EXO : 

Créer une nouvelle app pour les célébrités pétées avec :
Une page d'accueil qui affiche les 5 célebritées  publiées les plus récemments
la page d'accueil affiche aussi les 3 célebritées choisies par la rédac
une page qui affiche toutes les célebritées
une page qui affiche le détail de la célebritée
une page qui affiche une célebritée au hasard parmi toutes les celebritées
toutes les page doivent afficher un header et un footer
 */