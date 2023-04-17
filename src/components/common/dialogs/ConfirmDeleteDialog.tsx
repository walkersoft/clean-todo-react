import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";

interface ConfirmDeleteDialogProps {
  dialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  handleDeleteAction: () => void;
  dialogTitle: string;
  dialogText: string;
}

export default function ConfirmDeleteDialog({
  dialogOpen,
  setDialogOpen,
  handleDeleteAction,
  dialogTitle,
  dialogText,
}: ConfirmDeleteDialogProps) {
  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="body1">{dialogText}</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDeleteAction}>
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
