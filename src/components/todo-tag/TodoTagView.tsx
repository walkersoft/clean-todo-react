import { Typography } from "@mui/material";
import { Guid } from "../todo-item/TodoItemView"

export interface TodoTag {
  id: Guid;
  name: string;
}

interface TodoTagViewProps {
  tags: TodoTag[]
}

export function TodoTagView({ tags }: TodoTagViewProps) {
  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      {tags.map((value, index) => {
        return <Typography key={index} variant="body1">{value.name}</Typography>
      })}
    </>
  );
}
