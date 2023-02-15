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

interface TodoItemEditorProps {
  tags: string[];
}

export function TodoItemEditor({ tags }: TodoItemEditorProps) {
  const [dueDate, setDueDate] = useState<moment.Moment | null>(moment());
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const handleDueDateChange = (newDate: moment.Moment | null) => {
    setDueDate(newDate);
  }

  const handleTagsChanged = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {target: { value}, } = event;
    setSelectedTags(
      typeof value === "string" ? value.split(',') : value,
    )
  }
  
  return (
    <>
      <Paper sx={{ maxWidth: 800 }}>
        <Typography variant="h5">Create Todo Item</Typography>
        <Stack direction="column">
          <TextField variant="standard" />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Active"
            />
            <FormControlLabel control={<Checkbox />} label="Rolling item" />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Due Date"
              value={dueDate}
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
                <MenuItem
                  key={tag}
                  value={tag}
                >
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        <Button variant="contained">Save Todo</Button>
        </Stack>        
      </Paper>
    </>
  );
}
