import { Button, Stack, TextField, Typography } from "@mui/material";

export default function TodoTagEditor() {
  return (
    <>
      <Stack direction="row">
        <Typography variant="h5">Create Tag</Typography>
        <TextField variant="standard" />
        <Button variant="contained">Save Tag</Button>
      </Stack>
    </>
  );
}
