import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { ITodoItemResponse } from "../../api/api-client";
import {
  useTodoItemsAllQuery,
  useTodoTagsAllQuery,
} from "../../api/api-client/Query";
import { useTags, useTagsDispatch } from "../../contexts/TagsContext";
import {
  useTodoItems,
  useTodoItemsDispatch,
} from "../../contexts/TodoItemsContext";
import { TodoItemEditor } from "./TodoItemEditor";

export function TodoItemTableView() {
  const [editorOpen, setEditorOpen] = useState<boolean>(false);

  const { todoItems, fetchRequired } = useTodoItems();
  const { tags } = useTags();

  const itemsDispatch = useTodoItemsDispatch();
  const tagsDispatch = useTagsDispatch();

  const todoItemsQuery = useTodoItemsAllQuery({
    onSuccess: (todoItems) => {
      itemsDispatch({
        type: "todo-items-fetched",
        todoItems: todoItems,
      });
      tagsDispatch({
        type: "require-refetch",
      });
    },
  });

  const todoTagsQuery = useTodoTagsAllQuery({
    onSuccess: (tags) =>
      tagsDispatch({
        type: "tags-fetched",
        tags: tags,
      }),
  });

  const getTodoItemTags = (item: ITodoItemResponse): string => {
    const filteredTags = tags.filter((tag) =>
      item.tags?.includes(tag.id ?? "")
    );
    return filteredTags.length > 0
      ? filteredTags.map((t) => t.name).join(", ")
      : "N/A";
  };

  useEffect(() => {
    if (fetchRequired) {
      todoItemsQuery.refetch();
      todoTagsQuery.refetch();
    }
  }, [fetchRequired, todoItemsQuery, todoTagsQuery]);

  return (
    <>
      <Button variant="outlined" onClick={() => setEditorOpen(true)}>
        Create Todo Item
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Complete</TableCell>
              <TableCell>Rolls Over</TableCell>
              <TableCell>Roll Over Qty.</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Completion Date</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoItems.map((item) => (
              <RenderItemRow
                key={item.id}
                item={item}
                tags={getTodoItemTags(item)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TodoItemEditor editorOpen={editorOpen} setEditorOpen={setEditorOpen} />
    </>
  );
}

interface RenderItemRowProps {
  item: ITodoItemResponse;
  tags: string;
}

function RenderItemRow({ item, tags }: RenderItemRowProps) {
  const isOverdue = !!item.dueDate && item.dueDate < moment().startOf("day");
  const bgColor = isOverdue ? "warning.light" : "";

  const [editorOpen, setEditorOpen] = useState<boolean>(false);

  return (
    <>
      <TableRow key={item.id} sx={{ bgcolor: bgColor }}>
        <TableCell>{item.description}</TableCell>
        <TableCell>{item.isActive ? "Yes" : "No"}</TableCell>
        <TableCell>{item.isComplete ? "Yes" : "No"}</TableCell>
        <TableCell>{item.rollsOver ? "Yes" : "No"}</TableCell>
        <TableCell>{item.rollOverCount ?? 0}</TableCell>
        <TableCell>{item.dueDate?.format("MM-DD-YYYY")}</TableCell>
        <TableCell>{item.completionDate?.format("MM-DD-YYYY")}</TableCell>
        <TableCell>{tags}</TableCell>
        <TableCell>
          <>
            <IconButton
              edge="end"
              color="info"
              title="Edit Tag"
              sx={{ mr: 0 }}
              onClick={() => setEditorOpen(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="error"
              title="Delete Tag"
              onClick={() => {}}
            >
              <DeleteIcon />
            </IconButton>
          </>
        </TableCell>
      </TableRow>
      <TodoItemEditor
        editorOpen={editorOpen}
        setEditorOpen={setEditorOpen}
        currentItem={item}
      />
    </>
  );
}
