import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface TodoTagEditorProps {
  addTag: (event: string) => void
}

export default function TodoTagEditor({ addTag }: TodoTagEditorProps) {
  const [tag, setTag] = useState<string>("");

  return (
    <>
      <Stack direction="row">
        <Typography variant="h5">Create Tag</Typography>
        <TextField variant="standard" 
          onChange={e => setTag(e.target.value)}
        />
        <Button 
          variant="contained"
          onClick={() => addTag(tag)}
        >
          Save Tag
        </Button>
      </Stack>
    </>
  );
}
