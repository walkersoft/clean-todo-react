import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { ITodoItemResponse } from "../../api/api-client";
import { useTodoItemsAllQuery } from "../../api/api-client/Query";
import { useTags, useTagsDispatch } from "../../contexts/TagsContext";
import {
  useTodoItems,
  useTodoItemsDispatch,
} from "../../contexts/TodoItemsContext";

export function TodoItemTableView() {
  const { todoItems, fetchRequired } = useTodoItems();
  const { tags } = useTags();

  const itemsDispatch = useTodoItemsDispatch();
  const tagsDispatch = useTagsDispatch();

  const todoItemsQuery = useTodoItemsAllQuery({
    onSuccess: (todoItems) => {
      itemsDispatch({
        type: "todo-items-fetched",
        todoItems: todoItems,
      });
      tagsDispatch({
        type: "require-refetch"
      });
    }
  });

  const getTodoItemTags = (item: ITodoItemResponse): string => {
    const filteredTags = tags.filter((tag) =>
      item.tags?.includes(tag.id ?? "")
    );
    return filteredTags.length > 0
      ? filteredTags.map((t) => t.name).join(", ")
      : "N/A";
  };

  useEffect(() => {
    if (fetchRequired) {
      todoItemsQuery.refetch();
    }
  }, [fetchRequired, todoItemsQuery]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1200 }}>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Complete</TableCell>
            <TableCell>Rolls Over</TableCell>
            <TableCell>Roll Over Qty.</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Completion Date</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.isActive ? "Yes" : "No"}</TableCell>
              <TableCell>{item.isComplete ? "Yes" : "No"}</TableCell>
              <TableCell>{item.rollsOver ? "Yes" : "No"}</TableCell>
              <TableCell>{item.rollOverCount ?? 0}</TableCell>
              <TableCell>{item.dueDate?.format("MM-DD-YYYY")}</TableCell>
              <TableCell>{item.completionDate?.format("MM-DD-YYYY")}</TableCell>
              <TableCell>{getTodoItemTags(item)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
