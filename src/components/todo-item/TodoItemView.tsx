import { List, ListItem, ListItemText, Typography } from "@mui/material";

export type Guid = string;

export interface TodoItem {
  description: string;
  isActive: boolean;
  isComplete: boolean;
  rollsOver: boolean;
  dueDate: moment.Moment;
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
