import { Typography } from "@mui/material";
import { ITodoTagResponse } from "../../api/api-client";

interface TodoTagViewProps {
  tags: ITodoTagResponse[]
}

export function TodoTagView({ tags }: TodoTagViewProps) {
  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      {tags.map((value, index) => {
        return <Typography key={index} variant="body1">{value.name}</Typography>
      })}
    </>
  );
}
