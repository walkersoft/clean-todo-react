import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

export interface DeleteTodoTagDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  handleTagDeleteClick: () => void;
}

export default function DeleteTodoTagDialog({
  dialogOpen,
  setDialogOpen,
  handleTagDeleteClick,
}: DeleteTodoTagDialogProps) {
  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Delete TODO Tag?</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this TODO tag? The tag cannot be
            recovered.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleTagDeleteClick}>
            Delete Tag
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setDialogOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
