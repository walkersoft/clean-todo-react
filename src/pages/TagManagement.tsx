import { Box, Stack, Typography } from "@mui/material";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagView } from "../components/todo-tag/TodoTagView";

export function TagManagement() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Stack direction="column">
          <Typography variant="h4" align="left">
            Tag Management
          </Typography>
          <TodoTagEditor />
          <TodoTagView />
        </Stack>
      </Box>
    </>
  );
}
