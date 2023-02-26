import { Typography } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";
import { TodoTagListItem } from "./TodoTagListItem";

interface TodoTagListViewProps {
  tags: ITodoTagResponse[]
}

export function TodoTagListView({ tags }: TodoTagListViewProps) {
  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      {tags.map((value, index) => {
        return <TodoTagListItem key={index} tag={value} />
      })}
    </>
  );
}
