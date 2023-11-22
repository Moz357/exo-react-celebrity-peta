import CelebrityCard from "../component/CelebrityCard";
import Header from "../component/Header";
import { shittyStars } from "../utils/ShittyStars";

function RandomIndexPage() {
  const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

  const randomCelebrity = shittyStars[randomIndex];

  return (
    <>
      <Header currentPage="random" />
      <CelebrityCard starToDisplay={randomCelebrity} />
    </>
  );
}

export default RandomIndexPage;


/**
 * import Footer from "../component/Footer";
import Header from "../component/Header";
import { shittyStars } from "../utils/ShittyStars";
import CelebrityCard from "../component/CelebrityCard";

function RandomIndexPage(){

    const RandomIndexPage = shittyStars[(Math.random()*(stars.length-1)).toFixed()]

    
    return(
        <>
            <Header/>
            <main>
                {<CelebrityCard star={randomstar}/>}
            </main>
            <Footer/>
        </>
    )
}

export default RandomIndexPage
*/