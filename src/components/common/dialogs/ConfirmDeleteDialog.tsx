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
  title: string;
  text: string;
}

export default function ConfirmDeleteDialog({
  dialogOpen,
  setDialogOpen,
  handleDeleteAction,
  title,
  text,
}: ConfirmDeleteDialogProps) {
  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="body1">{text}</Typography>
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
