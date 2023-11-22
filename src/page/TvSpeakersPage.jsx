import Header from "../component/Header";
import SpeakerCard from "../component/Speakers";

function TvSpeakersPage() {
  const shittyTvSpeakers = ["Laurent Ruquier", "Pascal Praud", "Hanouna", "Morandini", "Fogiel"];

  return (
    <>
      <Header />

      <main>
        <h3>Les Présentateurs Avengers Wish 2.0 : </h3>
        {shittyTvSpeakers.map((speaker) => {
          return <SpeakerCard speakerName={speaker} />;
        })}
      </main>
    </>
  );
}

export default TvSpeakersPage;

// liste des vainqueurs


