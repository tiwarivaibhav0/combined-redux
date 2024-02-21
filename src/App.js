import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import Toggle from "./components/Toggle";
import ToolkitCounter from "./components/ToolkitCounter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Toggle />
        <ToolkitCounter />
      </Provider>
    </div>
  );
}

export default App;
