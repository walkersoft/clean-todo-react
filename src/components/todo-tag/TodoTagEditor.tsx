import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TodoTag } from "./TodoTagView";

interface TodoTagEditorProps {
  addTag: (tag: TodoTag) => void;
}

const initialItem: TodoTag = {
  id: "",
  name: "",
};

export default function TodoTagEditor({ addTag }: TodoTagEditorProps) {
  const [tag, setTag] = useState<TodoTag>(initialItem);

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
