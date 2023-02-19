import { List, ListItem, ListItemText, Typography } from "@mui/material";

type Guid = string;

interface TodoItem {
  description: string;
  isComplete: boolean;
  rollsOver: boolean;
  dueDate: Date;
  tagIds: Guid[];
}

interface TodoItemViewProps {
  todoItems: TodoItem[];
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
