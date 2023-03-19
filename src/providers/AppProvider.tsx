import { createContext, Dispatch, useMemo, useReducer } from "react";

export interface ITodos {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface IAppContext {
  count: number;
  todos: ITodos[];
  counterDispatch: Dispatch<ICounterAction>;
  todoDispatch: Dispatch<ITodoAction>;
}

interface ICounterState {
  count: number;
}

interface ITodoState {
  todos: ITodos[];
}

interface IAppProvider {
  children: React.ReactNode;
}

interface ICounterAction {
  type: "INCREMENT" | "DECREMENT";
}

interface ITodoAction {
  type: "GET_TODOS";
  payload: ITodos[];
}

const initialState: IAppContext = {
  count: 0,
  todos: [],
  counterDispatch: () => {},
  todoDispatch: () => {},
};

const initialCounterState: ICounterState = {
  count: 0,
};

const initialTodoState: ITodoState = {
  todos: [],
};

export const AppContext = createContext<IAppContext>(initialState);

const counterReducer = (state: ICounterState, action: ICounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error("Unknown Counter Action");
  }
};

const todoReducer = (state: ITodoState, action: ITodoAction) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      throw new Error("Unknown Todo Action");
  }
};

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [count, counterDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );
  const [todos, todoDispatch] = useReducer(todoReducer, initialTodoState);

  const values = useMemo(() => {
    return {
      ...count,
      ...todos,
      counterDispatch,
      todoDispatch,
    };
  }, [count, todos]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
