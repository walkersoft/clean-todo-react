import { Typography } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";

interface TodoTagListItemProps {
  tag: ITodoTagResponse;
}

export function TodoTagListItem({ tag }: TodoTagListItemProps) {
  const { name } = tag;
  return <Typography variant="body1">{name}</Typography>;
}
