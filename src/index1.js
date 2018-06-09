import React from "react";
import { hydrate, render } from 'react-dom';

import { observable } from "mobx";

const appState = observable({
  count: 0,
  incCounter() {
    appState.count = appState.count + 1;
  },
  decCounter() {
    appState.count = appState.count - 1;
  }
});

const Counter = props => (
  <section>
    $
    {props.appState.count}
    <div>
      <button onClick={props.appState.incCounter}>Add</button>
      <button onClick={props.appState.decCounter}>Dec</button>
    </div>
  </section>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Counter />, rootElement);
} else {
  render(<Counter />, rootElement);
}


