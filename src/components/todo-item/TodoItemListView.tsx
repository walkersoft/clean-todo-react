import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTodoItemsAllQuery } from "../../api/api-client/Query";
import { useTodoItems, useTodoItemsDispatch } from "../../contexts/TodoItemsContext";

export function TodoItemListView() {
  const { todoItems, fetchRequired } = useTodoItems();

  const dispatch = useTodoItemsDispatch();

  const todoItemsQuery = useTodoItemsAllQuery({
    onSuccess: (todoItems) => 
      dispatch({
        type: "todo-items-fetched",
        todoItems: todoItems
      }),
  });

  useEffect(() => {
    if (fetchRequired) {
      todoItemsQuery.refetch();
    }
  }, [fetchRequired, todoItemsQuery])

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
