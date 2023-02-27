import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";
import { useTodoTagsDELETEMutation } from "../../api/api-client/Query";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
  onNotifyTagDeleted: () => void;
}

export function TodoTagListItem({
  tag,
  onNotifyTagDeleted,
}: TodoTagListItemProps) {
  const { name, isAssigned } = tag;
  const tagDelete = useTodoTagsDELETEMutation(tag.id, {
    onSuccess: () => onNotifyTagDeleted(),
  });

  const handleDelete = () => {
    tagDelete.mutate();
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          color="error"
          disabled={isAssigned}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} />
    </ListItem>
  );
}
