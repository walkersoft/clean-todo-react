import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
}

export function TodoTagListItem({ tag }: TodoTagListItemProps) {
  const { name } = tag;
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" color="error">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} />
    </ListItem>
  );
}
