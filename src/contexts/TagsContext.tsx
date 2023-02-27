import { createContext, PropsWithChildren, useContext, useReducer } from "react";

const TagsStateContext = createContext({});
const TagsStateDispatchContext = createContext({});

export function TagsStateProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(tagsStateReducer, initialState);

  return (
    <TagsStateContext.Provider value={state}>
      <TagsStateDispatchContext.Provider value={dispatch}>
        {children}
      </TagsStateDispatchContext.Provider>
    </TagsStateContext.Provider>
  )
}

export function useTagsState() {
  return useContext(TagsStateContext);
}

export function useTagsDispatch() {
  return useContext(TagsStateDispatchContext);
}

interface TagsState {
  tagAdded: boolean;
  tagDeleted: boolean;
}

interface TagActions {
  type: TagsStateActions,
  payload: TagsState
}

const initialState: TagsState = {
  tagAdded: false,
  tagDeleted: false
}

type TagsStateActions =
  "tag-added"
  | "tag-deleted"
  | "tags-loaded";

function tagsStateReducer(state: TagsState, action: TagActions) {
  switch (action.type) {
    case "tag-added": {
      return {
        ...state,
        tagAdded: true
      };
    }

    case "tag-deleted": {
      return {
        ...state,
        tagDeleted: true
      }
    }

    case "tags-loaded": {
      return {
        ...state,
        tagAdded: false,
        tagDeleted: false
      }
    }
  }
}