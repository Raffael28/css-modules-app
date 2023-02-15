import React from "react";
import { Fact } from "../types";
import Badge from "./Badge";
import Explorer from "./Explorer";
import styles from "./GridItem.module.css";

export default function GridItem(props: {
  fact: Fact;
  updateClicked: (id: number) => void;
}) {
  return (
    <div
      className={styles.card}
      onClick={() => props.updateClicked(props.fact.id)}
    >
      {props.fact.clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{props.fact.title}</h2>
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  );
}
