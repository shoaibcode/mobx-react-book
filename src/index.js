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
  }),
  get countByThree() {
    return this.count * 3;
  },
  get countByFour() {
    return this.count * 4;
  }
});

const Counter = observer(props => (
  <section>
    {props.appState.count}
    <div>
      <button onClick={props.appState.incCounter}>Add</button>
      <button onClick={props.appState.decCounter}>Dec</button>
    </div>

    <div>Count by Three {props.appState.countByThree}</div>
    <div>Count by Four {props.appState.countByFour}</div>

    <DevTools />
  </section>
));

ReactDOM.render(
  <Counter appState={appState} />,
  document.getElementById("root")
);
