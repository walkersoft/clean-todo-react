import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import { ITodoTagResponse, TodoTagRequest } from "../../api/api-client";
import {
  useTodoTagsDELETEMutation,
  useUnassignMutation,
} from "../../api/api-client/Query";
import {
  refetchTagsDispatchAction,
  useTagsDispatch,
} from "../../contexts/TagsContext";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
}

export function TodoTagListItem({ tag }: TodoTagListItemProps) {
  const { name, isAssigned, assignedCount } = tag;

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

  const getTagAssignmentsText = (quantity: number): string => {
    return `${quantity} assignment${quantity === 1 ? "" : "(s)"}`;
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            color="info"
            title="Unassign Tag"
            disabled={!isAssigned}
            onClick={handleUnassign}
          >
            <PlaylistRemoveIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="error"
            title="Delete Tag"
            disabled={isAssigned}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption" color="info">
          {getTagAssignmentsText(assignedCount ?? 0)}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}
