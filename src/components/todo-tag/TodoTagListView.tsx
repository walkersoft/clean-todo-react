import { Divider, List, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
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
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
    >
      <Stack direction="column">
        <Typography variant="h4" align="left">
          Tag Management
        </Typography>
        <Divider sx={{ width: 800, mt: 2, mb: 1 }} />
        <List dense>
          {tags.map((value, index) => {
            return <TodoTagListItem key={index} tag={value} />;
          })}
        </List>
      </Stack>
    </Box>
  );
}
