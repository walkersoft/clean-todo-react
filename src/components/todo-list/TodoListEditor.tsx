import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ITodoListRequest, TodoListRequest } from "../../api/api-client";
import { useTodoListsMutation } from "../../api/api-client/Query";
import {
  refetchListsDispatchAction,
  useListsDispatch,
} from "../../contexts/ListsContext";

const initialItem: ITodoListRequest = {
  title: "",
  description: "",
};

export function TodoListEditor() {
  const [list, setList] = useState<ITodoListRequest>(initialItem);

  const dispatch = useListsDispatch();

  const saveList = useTodoListsMutation({
    onSuccess: () => {
      setList({ ...list, title: "", description: "" });
      dispatch(refetchListsDispatchAction);
    },
  });

  const handleClick = () => {
    saveList.mutate(new TodoListRequest({ ...list }));
  };

  return (
    <Paper elevation={6} sx={{ mt: 2, p: 2, maxWidth: 600 }}>
      <Typography variant="h6" align="left">
        Create Todo List
      </Typography>
      <Stack direction="column">
        <TextField
          variant="standard"
          helperText="Enter a list title."
          onChange={(e) => {
            setList({
              ...list,
              title: e.target.value,
            });
          }}
          value={list.title}
          sx={{ mb: 2 }}
        />
        <TextField
          variant="outlined"
          helperText="Enter a description for this list."
          onChange={(e) => {
            setList({
              ...list,
              description: e.target.value,
            });
          }}
          value={list.description}
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          disabled={!list.title}
        >
          Save List
        </Button>
      </Stack>
    </Paper>
  );
}
