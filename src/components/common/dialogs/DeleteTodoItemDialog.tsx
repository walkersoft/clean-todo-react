import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

export interface DeleteTodoItemDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  handleItemDeleteClick: () => void;
}

export default function DeleteTodoItemDialog({
  dialogOpen,
  setDialogOpen,
  handleItemDeleteClick,
}: DeleteTodoItemDialogProps) {
  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Delete TODO Item?</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this TODO item? The item cannot be
            recovered.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleItemDeleteClick}>
            Delete Item
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
