import { TableCell, TableHead, TableRow } from "@mui/material";

export interface DataTableHeaderProps {
  columnHeaders: string[];
}

export default function DataTableHeader({ columnHeaders }: DataTableHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {columnHeaders.map((header, index) => (
          <TableCell key={index}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
