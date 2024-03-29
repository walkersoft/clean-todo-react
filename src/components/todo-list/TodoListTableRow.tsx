import { TableCell, TableRow } from "@mui/material";
import { ITodoListResponse } from "../../api/api-client";

export interface TodoListTableRowProps {
  list: ITodoListResponse;
}

export default function TodoListTableRow({ list }: TodoListTableRowProps) {
  const { title, description, dueDate, todoItems } = list;

  return (
    <>
      <TableRow>
        <TableCell>{title}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{dueDate?.format("MM-DD-YYYY")}</TableCell>
        <TableCell>{todoItems?.length}</TableCell>
      </TableRow>
    </>
  );
}
