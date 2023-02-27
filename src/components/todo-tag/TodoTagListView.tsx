import { List, Typography } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";
import { TodoTagListItem } from "./TodoTagListItem";

interface TodoTagListViewProps {
  tags: ITodoTagResponse[];
  onNotifyOfTagDeleted: () => void;
}

export function TodoTagListView({
  tags,
  onNotifyOfTagDeleted,
}: TodoTagListViewProps) {
  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      <List dense>
        {tags.map((value, index) => {
          return (
            <TodoTagListItem
              key={index}
              tag={value}
              onNotifyTagDeleted={onNotifyOfTagDeleted}
            />
          );
        })}
      </List>
    </>
  );
}
