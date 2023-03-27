import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { ITodoTagResponse } from "../api/api-client";

const TagsContext = createContext({} as TagsState);
const TagsDispatchContext = createContext({} as React.Dispatch<TagActions>);

interface TagsState {
  fetchRequired: boolean;
  tags: ITodoTagResponse[];
}

const initialState: TagsState = {
  fetchRequired: false,
  tags: [],
};

export function TagsStateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(tagsReducer, initialState);

  return (
    <TagsContext.Provider value={state}>
      <TagsDispatchContext.Provider value={dispatch}>
        {children}
      </TagsDispatchContext.Provider>
    </TagsContext.Provider>
  );
}

export function useTags() {
  return useContext(TagsContext);
}

export function useTagsDispatch() {
  return useContext(TagsDispatchContext);
}

type TagActions =
  | { type: "tags-fetched"; tags: ITodoTagResponse[] }
  | { type: "require-refetch" };

function tagsReducer(state: TagsState, action: TagActions): TagsState {
  switch (action.type) {
    case "tags-fetched": {
      return {
        ...state,
        fetchRequired: false,
        tags: action.tags,
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

export const refetchTagsDispatchAction = {
  type: "require-refetch",
} as TagActions;
