import { TableCell, TableRow } from "@mui/material";
import { ReactNode } from "react"

export interface DataTableRowProps {
  rowData: ReactNode[];
}

export default function DataTableRow({ rowData }: DataTableRowProps) {
  return (
    <TableRow>
      {rowData.map((data) => (
        <TableCell>{data}</TableCell>
      ))}
    </TableRow>
  )
}