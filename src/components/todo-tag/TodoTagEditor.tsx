import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ITodoTagResponse, TodoTagRequest } from "../../api/api-client";
import { useTodoTagsPOSTMutation } from "../../api/api-client/Query";
import { useTagsDispatch } from "../../contexts/TagsContext";

const initialItem: ITodoTagResponse = {
  id: "",
  name: "",
};

export default function TodoTagEditor() {
  const [tag, setTag] = useState<ITodoTagResponse>(initialItem);

  const dispatch = useTagsDispatch();

  const saveTag = useTodoTagsPOSTMutation({
    onSuccess: () => dispatch({ type: "require-refetch" }),
  });

  const handleClick = () => {
    saveTag.mutate(new TodoTagRequest({ ...tag }));
  };

  return (
    <Paper elevation={6} sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" align="left">Create Tag</Typography>
      <Stack direction="row">
        <TextField
          variant="standard"
          helperText="Enter a tag name. Duplicate tags (case-insensitive) will be ignored."
          onChange={(e) => {
            setTag({
              name: e.target.value,
            });
          }}
          fullWidth
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleClick} sx={{ width: 200, height: 36 }}>
          Save Tag
        </Button>
      </Stack>
    </Paper>
  );
}
