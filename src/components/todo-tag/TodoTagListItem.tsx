import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { ITodoTagResponse, TodoTagRequest } from "../../api/api-client";
import {
  useTodoTagsDELETEMutation,
  useUnassignMutation,
} from "../../api/api-client/Query";
import { refetchTagsDispatchAction, useTagsDispatch } from "../../contexts/TagsContext";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
}

export function TodoTagListItem({ tag }: TodoTagListItemProps) {
  const { name, isAssigned } = tag;

  const dispatch = useTagsDispatch();

  const deleteTag = useTodoTagsDELETEMutation(tag.id, {
    onSuccess: () => dispatch(refetchTagsDispatchAction),
  });

  const unassignTag = useUnassignMutation({
    onSuccess: () => dispatch(refetchTagsDispatchAction),
  });

  const handleDelete = () => {
    deleteTag.mutate();
  };

  const handleUnassign = () => {
    unassignTag.mutate(new TodoTagRequest({ ...tag }));
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            color="info"
            disabled={!isAssigned}
            onClick={handleUnassign}
          >
            <PlaylistRemoveIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="error"
            disabled={isAssigned}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={name} />
    </ListItem>
  );
}
