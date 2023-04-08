import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
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
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useState } from "react";
import {
  ITodoItemRequest,
  ITodoItemResponse,
  TodoItemRequest,
} from "../../api/api-client";
import { useTodoItemsPOSTMutation, useTodoItemsPUTMutation } from "../../api/api-client/Query";
import { useTags } from "../../contexts/TagsContext";
import { useTodoItemsDispatch } from "../../contexts/TodoItemsContext";

const initialItem: ITodoItemRequest = {
  description: "",
  isActive: true,
  rollsOver: false,
  dueDate: moment(),
  tagIds: [],
};

export interface TodoItemEditorProps {
  editorOpen: boolean;
  setEditorOpen: (isOpen: boolean) => void;
  saveMode: "create" | "update";
  currentItem?: ITodoItemResponse;
  selectedTagNames?: string[];
}

export function TodoItemEditor({
  editorOpen,
  setEditorOpen,
  saveMode,
  currentItem,
  selectedTagNames,
}: TodoItemEditorProps) {
  const [todoItem, setTodoItem] = useState<ITodoItemRequest>(
    currentItem ?? initialItem
  );

  const [selectedTags, setSelectedTags] = useState<string[]>(
    selectedTagNames ?? []
  );

  const { tags } = useTags();
  const dispatch = useTodoItemsDispatch();

  const updateTodoItem = useTodoItemsPUTMutation({
    onSuccess: () => dispatch({ type: "require-refetch" }),
  });

  const createTodoItem = useTodoItemsPOSTMutation({
    onSuccess: () => dispatch({ type: "require-refetch" }),
  });

  const closeAndResetEditor = () => {
    setTodoItem(currentItem ?? initialItem);
    setSelectedTags(selectedTagNames ?? []);
    setEditorOpen(false);
  };

  const handleSaveItemClick = () => {
    const successHandler = () => {
      closeAndResetEditor();
    };

    if (saveMode === "create") {
      createTodoItem.mutate(
        new TodoItemRequest({
          ...todoItem,
        }),
        {
          onSuccess: successHandler,
        }
      );
    }

    if (saveMode === "update") {
      updateTodoItem.mutate(
        new TodoItemRequest({
          ...todoItem,
          tagIds: getSelectedTagIds(selectedTags),
        }),
        {
          onSuccess: successHandler,
        }
      );
      return;
    }
  };

  const handleCancelEditClick = () => {
    closeAndResetEditor();
  };

  const handleDueDateChange = (newDate: moment.Moment | null) => {
    if (newDate !== null) {
      setTodoItem({ ...todoItem, dueDate: newDate });
    }
  };

  const handleTagsChanged = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags((_) => {
      const newlySelected =
        typeof value === "string" ? value.split(",") : value;
      setTodoItem({ ...todoItem, tagIds: getSelectedTagIds(newlySelected) });
      return newlySelected;
    });
  };

  const getSelectedTagIds = (selected: string[]): string[] => {
    const ids: string[] = [];
    tags
      .filter((t) => !!t.name && selected.includes(t.name))
      .forEach((t) => !!t.id && ids.push(t.id));
    return ids;
  };

  return (
    <Dialog open={editorOpen} onClose={() => setEditorOpen(false)}>
      <Paper sx={{ width: 600, p: 3 }}>
        <DialogTitle>Edit TODO Item</DialogTitle>
        <Divider />
        <DialogContent>
          <Stack direction="column" spacing={3}>
            <TextField
              label="Enter todo item..."
              variant="standard"
              value={todoItem.description}
              onChange={(e) =>
                setTodoItem({ ...todoItem, description: e.target.value })
              }
            />
            <Stack direction="row" spacing={4}>
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
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={todoItem.rollsOver}
                      onChange={(e) =>
                        setTodoItem({
                          ...todoItem,
                          rollsOver: e.target.checked,
                        })
                      }
                    />
                  }
                  label="Rolling item"
                />
              </FormGroup>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Due Date"
                value={todoItem.dueDate}
                onChange={handleDueDateChange}
                minDate={moment()}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FormControl>
              <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
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
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSaveItemClick}>
            Save Todo
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleCancelEditClick}
          >
            Cancel
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
}
