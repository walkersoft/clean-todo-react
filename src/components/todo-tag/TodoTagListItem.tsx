import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";
import { useTodoTagsDELETEMutation } from "../../api/api-client/Query";
import { useTagsDispatch } from "../../contexts/TagsContext";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
}

export function TodoTagListItem({
  tag
}: TodoTagListItemProps) {
  const { name, isAssigned } = tag;

  const dispatch = useTagsDispatch();

  const tagDelete = useTodoTagsDELETEMutation(tag.id, {
    onSuccess: () => dispatch({type: "tag-deleted"}),
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
