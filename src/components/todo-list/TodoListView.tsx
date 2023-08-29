import { Table, TableBody, TableContainer } from "@mui/material";
import { useEffect } from "react";
import { useTodoListsAllQuery } from "../../api/api-client/Query";
import { useLists, useListsDispatch } from "../../contexts/ListsContext";
import DataTableHeader from "../common/data-tables/DataTableHeader";
import TodoListTableRow from "./TodoListTableRow";

export function TodoListView() {
  const { lists, fetchRequired } = useLists();

  const dispatch = useListsDispatch();

  const listsQuery = useTodoListsAllQuery({
    onSuccess: (lists) =>
      dispatch({
        type: "lists-fetched",
        lists: lists,
      }),
  });

  useEffect(() => {
    if (fetchRequired) {
      listsQuery.refetch();
    }
  }, [fetchRequired, listsQuery]);

  const columnHeaders: string[] = ["Title", "Description", "Due Date", "Assigned Items"];

  return (
    <>
      <TableContainer>
        <Table sx={{ widht: 700, mt: 2 }}>
          <DataTableHeader columnHeaders={columnHeaders} />
          <TableBody>
            {lists.map((list) => (
              <TodoListTableRow key={list.id} list={list} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
