import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { ITodoTagResponse, TodoTagRequest } from "../../api/api-client";
import {
  useTodoTagsDELETEMutation,
  useTodoTagsPUTMutation,
  useUnassignMutation,
} from "../../api/api-client/Query";
import {
  refetchTagsDispatchAction,
  useTagsDispatch,
} from "../../contexts/TagsContext";
import ConfirmDeleteDialog from "../common/dialogs/ConfirmDeleteDialog";

export interface TodoTagTableRowProps {
  tag: ITodoTagResponse;
}

export default function TodoTagTableRow({ tag }: TodoTagTableRowProps) {
  const { name, isAssigned, assignedCount } = tag;

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTag, setEditedTag] = useState<ITodoTagResponse>(tag);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const dispatch = useTagsDispatch();

  const updateTag = useTodoTagsPUTMutation({
    onSuccess: () => {
      dispatch(refetchTagsDispatchAction);
      setEditMode(false);
    },
  });

  const deleteTag = useTodoTagsDELETEMutation(tag.id, {
    onSuccess: () => dispatch(refetchTagsDispatchAction),
  });

  const unassignTag = useUnassignMutation({
    onSuccess: () => dispatch(refetchTagsDispatchAction),
  });

  const handleUpdate = () => {
    updateTag.mutate(new TodoTagRequest({ ...editedTag }));
  };

  const handleCancelEdit = () => {
    handleEditModeChanged(false);
    setEditedTag(tag);
  };

  const handleEditModeChanged = (mode: boolean) => {
    setEditMode(mode);
  };

  const handleTagEdited = (updatedName: string) => {
    setEditedTag({ ...editedTag, name: updatedName });
  };

  const handleDelete = async () => {
    await deleteTag.mutateAsync();
    setDeleteDialogOpen(false);
  };

  const handleUnassign = () => {
    unassignTag.mutate(new TodoTagRequest({ ...tag }));
  };

  const getTagAssignmentsText = (): string => {
    return `${assignedCount} assignment${assignedCount === 1 ? "" : "s"}`;
  };

  const DELETE_DIALOG_TEXT: string = "Are you sure you want to delete this TODO tag? The tag cannot be recovered.";

  return (
    <>
      <TableRow>
        <TableCell>
          {editMode ? (
            <TextField
              variant="standard"
              fullWidth
              value={editedTag.name}
              onChange={(e) => handleTagEdited(e.target.value)}
            />
          ) : (
            name
          )}
        </TableCell>
        <TableCell width="250">{getTagAssignmentsText()}</TableCell>
        <TableCell width="150">
          {editMode ? (
            <>
              <IconButton
                edge="end"
                color="success"
                title="Edit Tag"
                onClick={handleUpdate}
                disabled={editedTag.name?.length === 0}
                sx={{ mr: 0 }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="error"
                title="Cancel Editing"
                sx={{ mr: 0 }}
                onClick={handleCancelEdit}
              >
                <ClearIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                edge="end"
                color="info"
                title="Edit Tag"
                sx={{ mr: 0 }}
                onClick={() => handleEditModeChanged(true)}
              >
                <EditIcon />
              </IconButton>
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
                onClick={() => setDeleteDialogOpen(true)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </TableCell>
      </TableRow>
      <ConfirmDeleteDialog
        dialogOpen={deleteDialogOpen}
        setDialogOpen={setDeleteDialogOpen}
        handleDeleteAction={handleDelete}
        title="Delete TODO Tag?"
        text={DELETE_DIALOG_TEXT}
      />
    </>
  );
}
