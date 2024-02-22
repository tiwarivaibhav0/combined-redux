import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./redux/store";
import Toggle from "./components/Toggle";
import ToolkitCounter from "./components/ToolkitCounter";
import { lazy } from "react";
import PromiseComp from "./components/Promise";
// import Users from "./components/Users";
const Users = lazy(() => import("./components/Users"));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Counter />
        <Toggle />
        <ToolkitCounter /> */}
        {/* <Users /> */}
        <PromiseComp/>
      </Provider>
    </div>
  );
}

export default App;
