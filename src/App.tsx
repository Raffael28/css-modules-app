import { useState } from "react";
import styles from "./App.module.css";
import Background from "./Background/Background";
import Grid from "./Grid/Grid";
import Rocket from "./Rocket/Rocket";
import Smoke from "./Rocket/Smoke";
import Title from "./Title/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <Background />
      <Grid />
      <Rocket />
      <Smoke />
      <Title />
    </div>
  );
}

export default App;
