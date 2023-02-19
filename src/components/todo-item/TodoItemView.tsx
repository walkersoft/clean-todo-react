import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ITodoItemResponse } from "../../api/api-client";

interface TodoItemViewProps {
  todoItems: ITodoItemResponse[];
}

export function TodoItemView({ todoItems }: TodoItemViewProps) {
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
