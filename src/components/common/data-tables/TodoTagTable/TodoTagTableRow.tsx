import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { ITodoTagResponse, TodoTagRequest } from "../../../../api/api-client";
import {
  useTodoTagsDELETEMutation,
  useUnassignMutation,
} from "../../../../api/api-client/Query";
import {
  refetchTagsDispatchAction,
  useTagsDispatch,
} from "../../../../contexts/TagsContext";

export interface TodoTagTableRowProps {
  tag: ITodoTagResponse;
}

export default function TodoTagTableRow({ tag }: TodoTagTableRowProps) {
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

  const getTagAssignmentsText = (): string => {
    return `${assignedCount} assignment${assignedCount === 1 ? "" : "(s)"}`;
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell width="250">{getTagAssignmentsText()}</TableCell>
      <TableCell width="100">
        <IconButton
          edge="end"
          color="info"
          title="Unassign Tag"
          disabled={!isAssigned}
          onClick={handleUnassign}
          sx={{ mr: 0 }}
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
      </TableCell>
    </TableRow>
  );
}
