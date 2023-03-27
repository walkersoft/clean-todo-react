import { TableCell, TableHead, TableRow } from "@mui/material";

export interface TableHeaderProps {
  columnHeaders: string[];
}

export default function TableHeader({ columnHeaders }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {columnHeaders.map(header => (
          <TableCell>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
