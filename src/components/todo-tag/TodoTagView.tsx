import { Table, TableBody, TableContainer } from "@mui/material";
import { useEffect } from "react";
import { useTodoTagsAllQuery } from "../../api/api-client/Query";
import { useTags, useTagsDispatch } from "../../contexts/TagsContext";
import DataTableHeader from "../common/data-tables/DataTableHeader";
import TodoTagTableRow from "./TodoTagTableRow";

export function TodoTagView() {
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

  const columnHeaders: string[] = ["Tag Name", "Assignments", "Actions"];

  return (
    <>
      <TableContainer>
        <Table sx={{ width: 700, mt: 2 }}>
          <DataTableHeader columnHeaders={columnHeaders} />
          <TableBody>
            {tags.map((tag) => {
              return <TodoTagTableRow key={tag.id} tag={tag} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
