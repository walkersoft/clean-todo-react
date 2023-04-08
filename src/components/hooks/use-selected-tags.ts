import { ITodoItemResponse } from "../../api/api-client";
import { useTags } from "../../contexts/TagsContext";

export default function useSelectedTagNames(
  todoItem: ITodoItemResponse
): string[] {
  const { tags } = useTags();
  if (!!todoItem.tags && todoItem.tags.length === 0) {
    return [];
  }

  const names: string[] = [];
  todoItem.tags?.forEach((tagId) => {
    const searchTag = tags.find((t) => t.id === tagId);
    if (searchTag !== undefined) {
      names.push(searchTag.name ?? "");
    }
  });

  return names;
}
