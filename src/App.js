import Hello from "./Hello";
import ClickCounter from "./ClickCounter";
import OpenClose from "./OpenClose";
import "./styles.css";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const App = () => (
  <div>
    <Hello name="there" />
    <ClickCounter />
    <OpenClose text={text} />
  </div>
);

export default App;
