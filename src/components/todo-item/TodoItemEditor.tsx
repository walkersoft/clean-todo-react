import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useState } from "react";
import { TodoTag } from "../todo-tag/TodoTagView";
import { Guid, TodoItem } from "./TodoItemView";

interface TodoItemEditorProps {
  tags: TodoTag[];
  addTodoItem: (item: TodoItem) => void;
}

const initialItem: TodoItem = {
  description: "",
  isActive: true,
  isComplete: false,
  rollsOver: false,
  dueDate: moment(),
  tagIds: [],
};

export function TodoItemEditor({ tags, addTodoItem }: TodoItemEditorProps) {
  const [todoItem, setTodoItem] = useState<TodoItem>(initialItem);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleDueDateChange = (newDate: moment.Moment | null) => {
    if (newDate !== null) {
      setTodoItem({ ...todoItem, dueDate: newDate });
    }
  };

  const handleTagsChanged = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(typeof value === "string" ? value.split(",") : value);
    setTodoItem({ ...todoItem, tagIds: getSelectedTagIds() });
  };

  const getSelectedTagIds = (): Guid[] => {
    return tags
      .filter((t) => selectedTags.includes(t.name) !== undefined)
      .map((x) => x.id);
  };

  return (
    <>
      <Paper sx={{ maxWidth: 800 }}>
        <Typography variant="h5">Create Todo Item</Typography>
        <Stack direction="column">
          <TextField
            variant="standard"
            value={todoItem.description}
            onChange={(e) =>
              setTodoItem({ ...todoItem, description: e.target.value })
            }
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todoItem.isActive}
                  onChange={(e) =>
                    setTodoItem({ ...todoItem, isActive: e.target.checked })
                  }
                />
              }
              label="Active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={todoItem.rollsOver}
                  onChange={(e) =>
                    setTodoItem({ ...todoItem, rollsOver: e.target.checked })
                  }
                />
              }
              label="Rolling item"
            />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Due Date"
              value={todoItem.dueDate}
              onChange={handleDueDateChange}
              minDate={moment()}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={selectedTags}
              onChange={handleTagsChanged}
              input={<OutlinedInput id="select-mulitple-chip" label="Tag" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={() => addTodoItem(todoItem)}>
            Save Todo
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
