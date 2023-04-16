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
  itemId: string;
}
export default function DeleteTodoItemDialog({
  dialogOpen,
  setDialogOpen,
  itemId,
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
          <Button variant="contained">Delete Item</Button>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
