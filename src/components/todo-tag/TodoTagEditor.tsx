import { Button, Stack, TextField, Typography } from "@mui/material";
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
    <Stack direction="row">
      <Typography variant="h5">Create Tag</Typography>
      <TextField
        variant="standard"
        onChange={(e) => {
          setTag({
            name: e.target.value,
          });
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        Save Tag
      </Button>
    </Stack>
  );
}
