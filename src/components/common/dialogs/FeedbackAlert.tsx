import { AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";

export interface FeedbackAlertProps {
  message: string;
  severity: AlertColor;
  isOpen: boolean;
  vertical?: "bottom" | "top";
  horizontal?: "left" | "right" | "center";
}

export function FeedbackAlert({
  message,
  severity,
  isOpen,
  vertical = "bottom",
  horizontal = "center",
}: FeedbackAlertProps) {
  const [open, setOpen] = useState(isOpen);

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={7000}
      onClose={handleClose}
      message={message}
    />
  );
}
