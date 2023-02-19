import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ITodoTagResponse } from "../../api/api-client";

interface TodoTagEditorProps {
  addTag: (tag: ITodoTagResponse) => void;
}

const initialItem: ITodoTagResponse = {
  id: "",
  name: ""
};

export default function TodoTagEditor({ addTag }: TodoTagEditorProps) {
  const [tag, setTag] = useState<ITodoTagResponse>(initialItem);

  return (
    <Stack direction="row">
      <Typography variant="h5">Create Tag</Typography>
      <TextField
        variant="standard"
        onChange={(e) => {
          setTag({
            id: e.target.value + "-" + Math.random(),
            name: e.target.value,
          });
        }}
      />
      <Button variant="contained" onClick={() => addTag(tag)}>
        Save Tag
      </Button>
    </Stack>
  );
}
