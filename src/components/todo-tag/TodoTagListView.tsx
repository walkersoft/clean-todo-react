import { Typography, Table } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { useTodoTagsAllQuery } from "../../api/api-client/Query";
import { useTags, useTagsDispatch } from "../../contexts/TagsContext";
import DataTableHeader from "../common/data-tables/DataTableHeader";
import TodoTagTableRow from "../common/data-tables/TableRows/TodoTagTableRow";

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

  const columnHeaders: string[] = [
    "Tag Name",
    "Assignments",
    "Actions"
  ]

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: 3 }}
    >
      <Stack direction="column">
        <Typography variant="h4" align="left">
          Tag Management
        </Typography>
        <Table sx={{ width: 700, mt: 2 }}>
          <DataTableHeader columnHeaders={columnHeaders} />
          {tags.map((tag) => {
            return <TodoTagTableRow key={tag.id} tag={tag} />;
          })}
        </Table>
      </Stack>
    </Box>
  );
}
