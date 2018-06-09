import React from "react";
import ReactDOM from "react-dom";

import { observable, configure, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

configure({ enforceActions: true });

const appState = observable({
  count: 0,
  incCounter: action("Increment Counter", () => {
    appState.count = appState.count + 1;
  }),
  decCounter: action("Decrement Counter", () => {
    appState.count = appState.count - 1;
  })
});

const Counter = observer(props => (
  <section>
    {props.appState.count}
    <div>
      <button onClick={props.appState.incCounter}>Add</button>
      <button onClick={props.appState.decCounter}>Dec</button>
    </div>

    <DevTools />
  </section>
));

ReactDOM.render(
  <Counter appState={appState} />,
  document.getElementById("root")
);
