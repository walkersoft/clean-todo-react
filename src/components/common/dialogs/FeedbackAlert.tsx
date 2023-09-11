import { Alert, AlertColor, Snackbar } from "@mui/material";

export interface FeedbackAlertProps {
  message: string;
  severity: AlertColor;
  open: boolean;
  handleClose: () => void;
  vertical?: "bottom" | "top";
  horizontal?: "left" | "right" | "center";
}

export type FeedbackAlertData = Omit<FeedbackAlertProps, "handleClose">;

export function FeedbackAlert({
  message,
  severity,
  open,
  handleClose,
  vertical = "bottom",
  horizontal = "center",
}: FeedbackAlertProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={7000}
      onClose={handleClose}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
