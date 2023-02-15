import { Fact } from "../types";
import cx from "classnames";
import GridItem from "./GridItem";

import styles from "./Grid.module.css";
import mediaStyles from "./Media.module.css";
export default function Grid(props: {
  facts: Fact[];
  updateClicked: (id: number) => void;
}) {
  return (
    <section className={cx(styles.grid, mediaStyles.grid)}>
      {props.facts.map((fact) => (
        <GridItem
          updateClicked={props.updateClicked}
          key={fact.id}
          fact={fact}
        ></GridItem>
      ))}
    </section>
  );
}
