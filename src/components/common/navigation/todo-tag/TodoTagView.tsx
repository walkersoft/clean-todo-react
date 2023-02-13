import { Typography } from "@mui/material";

interface TodoTagViewProps {
  tags: string[]
}

export function TodoTagView({ tags }: TodoTagViewProps) {
  console.log(tags);
  return (
    <>
      {tags.map((value, index) => {
        return <Typography key={index} variant="body1">{value}</Typography>
      })}
    </>
  );
}