import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { ITodoTagResponse } from "../api/api-client";

const TagsContext = createContext({});
const TagsDispatchContext = createContext({});

export function TagsStateProvider({ children }: PropsWithChildren) {
  const [tags, dispatch] = useReducer(tagsReducer, []);

  return (
    <TagsContext.Provider value={tags}>
      <TagsDispatchContext.Provider value={dispatch}>
        {children}
      </TagsDispatchContext.Provider>
    </TagsContext.Provider>
  )
}

export function useTags() {
  return useContext(TagsContext);
}

export function useTagsDispatch() {
  return useContext(TagsDispatchContext);
}

type TagActions =
  | { type: "tags-fetched", tags: ITodoTagResponse[] };

function tagsReducer(state: ITodoTagResponse[], action: TagActions): ITodoTagResponse[] {
  switch (action.type) {
    case "tags-fetched": {
      return action.tags;
    }
  }
}