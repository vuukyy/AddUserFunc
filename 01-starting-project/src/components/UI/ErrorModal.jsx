import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import classes from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
