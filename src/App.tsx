import { useState } from "react";
import styles from "./App.module.css";
import Background from "./Background/Background";
import Grid from "./Grid/Grid";
import Rocket from "./Rocket/Rocket";
import Smoke from "./Rocket/Smoke";
import Title from "./Title/Title";
import facts from "./data/NASA_facts.json";
import { Fact } from "./types";

function App() {
  const [nasaFacts, setNasaFacts] = useState<Fact[]>(facts);
  function updateClicked(id: number) {
    setNasaFacts(
      nasaFacts.map((fact) => {
        if (fact.id == id) {
          return {
            id: fact.id,
            title: fact.title,
            fact: fact.fact,
            clicked: !fact.clicked,
          };
        } else return fact;
      })
    );
  }
  return (
    <div className={styles.App}>
      <Title />
      <Grid facts={nasaFacts} updateClicked={updateClicked} />
      <Background />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
