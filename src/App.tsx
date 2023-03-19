import { Counter } from "./components/Counter";
import Todo from "./components/Todo";
import { AppProvider } from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Counter />
      <Todo />
    </AppProvider>
  );
}

export default App;
