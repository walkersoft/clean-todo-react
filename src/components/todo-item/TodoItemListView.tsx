import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ITodoItemResponse } from "../../api/api-client";

interface TodoItemListViewProps {
  todoItems: ITodoItemResponse[];
}

export function TodoItemListView({ todoItems }: TodoItemListViewProps) {
  return (
    <>
      <Typography variant="h5">Todo Items</Typography>
      <List>
        {todoItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={item.description} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
