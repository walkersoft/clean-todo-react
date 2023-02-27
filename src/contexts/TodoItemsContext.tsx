import { createContext, PropsWithChildren, useReducer } from "react";
import { ITodoItemResponse } from "../api/api-client";

const TodoItemsContext = createContext({} as TodoItemsState);
const TodoItemsDispatchContext = createContext({} as React.Dispatch<TodoItemActions>);

interface TodoItemsState {
  fetchRequired: boolean;
  todoItems: ITodoItemResponse[];
}

const initialState: TodoItemsState = {
  fetchRequired: false,
  todoItems: [],
};

export function TodoItemsStateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(todoItemsReducer, initialState);

  return (
    <TodoItemsContext.Provider value={state}>
      <TodoItemsDispatchContext.Provider value={dispatch}>
        {children}
      </TodoItemsDispatchContext.Provider>
    </TodoItemsContext.Provider>
  )
}

type TodoItemActions =
  | { type: "todo-items-fetched"; todoItems: ITodoItemResponse[] }
  | { type: "require-refetch" };

function todoItemsReducer(
  state: TodoItemsState,
  action: TodoItemActions
): TodoItemsState {
  switch (action.type) {
    case "todo-items-fetched": {
      return {
        ...state,
        fetchRequired: false,
        todoItems: action.todoItems,
      };
    }

    case "require-refetch": {
      return {
        ...state,
        fetchRequired: true,
      };
    }
  }
}
