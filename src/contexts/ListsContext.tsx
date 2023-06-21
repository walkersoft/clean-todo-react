import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { ITodoListResponse } from "../api/api-client";

const ListsContext = createContext({} as ListsState);
const ListsDispatchContext = createContext({} as React.Dispatch<ListActions>);

interface ListsState {
  fetchRequired: boolean;
  lists: ITodoListResponse[];
}

const initialState: ListsState = {
  fetchRequired: false,
  lists: [],
};

export function ListsStateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(listsReducer, initialState);

  return (
    <ListsContext.Provider value={state}>
      <ListsDispatchContext.Provider value={dispatch}>
        {children}
      </ListsDispatchContext.Provider>
    </ListsContext.Provider>
  );
}

export function useLists() {
  return useContext(ListsContext);
}

export function useListsDispatch() {
  return useContext(ListsDispatchContext);
}

type ListActions =
  | { type: "lists-fetched"; lists: ITodoListResponse[] }
  | { type: "require-refetch" };

function listsReducer(state: ListsState, action: ListActions): ListsState {
  switch (action.type) {
    case "lists-fetched": {
      return {
        ...state,
        fetchRequired: false,
        lists: action.lists,
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

export const refetchListsDispatchAction = {
  type: "require-refetch",
} as ListActions;
