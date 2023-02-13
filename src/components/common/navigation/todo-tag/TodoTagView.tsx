import { Typography } from "@mui/material";

interface TodoTagViewProps {
  tags: string[]
}

export function TodoTagView({ tags }: TodoTagViewProps) {
  return (
    <>
      <Typography variant="h6">Existing Tags</Typography>
      {tags.map((value, index) => {
        return <Typography key={index} variant="body1">{value}</Typography>
      })}
    </>
  );
}