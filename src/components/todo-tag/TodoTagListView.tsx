import { List, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTodoTagsAllQuery } from "../../api/api-client/Query";
import { useTags, useTagsDispatch } from "../../contexts/TagsContext";
import { TodoTagListItem } from "./TodoTagListItem";

export function TodoTagListView() {
  const { tags, fetchRequired } = useTags();

  const dispatch = useTagsDispatch();

  const tagsQuery = useTodoTagsAllQuery({
    onSuccess: (tags) =>
      dispatch({
        type: "tags-fetched",
        tags: tags,
      }),
  });

  useEffect(() => {
    if (fetchRequired) {
      tagsQuery.refetch();
    }
  }, [fetchRequired, tagsQuery]);

  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      <List dense>
        {tags.map((value, index) => {
          return <TodoTagListItem key={index} tag={value} />;
        })}
      </List>
    </>
  );
}
