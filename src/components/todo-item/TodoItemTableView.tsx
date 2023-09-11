import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Checkbox,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  AssignTodoItemRequest,
  ITodoItemResponse,
  ITodoListResponse,
} from "../../api/api-client";
import {
  useAssignToListMutation,
  useSetCompletionMutation,
  useTodoItemsAllQuery,
  useTodoItemsDELETEMutation,
  useTodoListsAllQuery,
  useTodoTagsAllQuery,
} from "../../api/api-client/Query";
import { useLists, useListsDispatch } from "../../contexts/ListsContext";
import { useTagsDispatch } from "../../contexts/TagsContext";
import {
  useTodoItems,
  useTodoItemsDispatch,
} from "../../contexts/TodoItemsContext";
import ConfirmDeleteDialog from "../common/dialogs/ConfirmDeleteDialog";
import {
  FeedbackAlert,
  FeedbackAlertData,
} from "../common/dialogs/FeedbackAlert";
import useSelectedTagNames from "../hooks/use-selected-tags";
import { TodoItemEditor } from "./TodoItemEditor";

const INITIAL_ALERT: FeedbackAlertData = {
  message: "",
  severity: "error",
  open: false,
};

export function TodoItemTableView() {
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [stagedItemIds, setStagedItemIds] = useState<string[]>([]);
  const [alertData, setAlertData] = useState(INITIAL_ALERT);

  const { todoItems, fetchRequired } = useTodoItems();
  const { lists } = useLists();
  const dispatch = useListsDispatch();

  const listsQuery = useTodoListsAllQuery({
    onSuccess: (lists) =>
      dispatch({
        type: "lists-fetched",
        lists: lists,
      }),
  });

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

  const toggleStagedItemState = (id: string) => {
    if (id.length === 0) {
      return;
    }

    const index = stagedItemIds.findIndex((x) => x === id);
    if (index === -1) {
      setStagedItemIds([id, ...stagedItemIds]);
    } else {
      setStagedItemIds(stagedItemIds.filter((x) => x !== id));
    }
  };

  useEffect(() => {
    if (fetchRequired) {
      todoItemsQuery.refetch();
      todoTagsQuery.refetch();
      listsQuery.refetch();
    }
  }, [fetchRequired, todoItemsQuery, todoTagsQuery, listsQuery]);

  return (
    <>
      <Button variant="outlined" onClick={() => setEditorOpen(true)}>
        Create Todo Item
      </Button>
      <TodoItemAssignmentForm todoLists={lists} selectedItems={stagedItemIds} />
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell>Assign</TableCell>
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
                setItemStaging={toggleStagedItemState}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TodoItemEditor
        editorOpen={editorOpen}
        setEditorOpen={setEditorOpen}
        saveMode="create"
        setAlertData={setAlertData}
      />
      <FeedbackAlert
        {...alertData}
        handleClose={() =>
          setAlertData((prev) => {
            return {
              ...prev,
              open: false,
            };
          })
        }
      />
    </>
  );
}

interface RenderItemRowProps {
  item: ITodoItemResponse;
  setItemStaging: (id: string) => void;
}

function RenderItemRow({ item, setItemStaging }: RenderItemRowProps) {
  const isOverdue = !!item.dueDate && item.dueDate < moment().startOf("day");
  const bgColor = isOverdue ? "warning.light" : "";

  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<FeedbackAlertData>(INITIAL_ALERT);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const selectedTagNames = useSelectedTagNames(item);
  const itemsDispatch = useTodoItemsDispatch();

  const deleteTodoItem = useTodoItemsDELETEMutation(item.id, {
    onSuccess: () => {
      itemsDispatch({ type: "require-refetch" });
    },
  });

  const handleDeleteItemClick = async () => {
    await deleteTodoItem.mutateAsync();
    setDeleteDialogOpen(false);
  };

  const DELETE_DIALOG_TEXT: string =
    "Are you sure you want to delete this TODO item? The item cannot be recovered.";

  return (
    <>
      <TableRow key={item.id} sx={{ bgcolor: bgColor }}>
        <TableCell>
          <Checkbox onChange={() => setItemStaging(item.id ?? "")} />
        </TableCell>
        <TableCell>{item.description}</TableCell>
        <TableCell>{item.isActive ? "Yes" : "No"}</TableCell>
        <TableCell>
          <CompletionState
            id={item.id ?? ""}
            isComplete={item.isComplete ?? false}
          />
        </TableCell>
        <TableCell>{item.rollsOver ? "Yes" : "No"}</TableCell>
        <TableCell>{item.rollOverCount ?? 0}</TableCell>
        <TableCell>{item.dueDate?.format("MM-DD-YYYY")}</TableCell>
        <TableCell>{item.completionDate?.format("MM-DD-YYYY")}</TableCell>
        <TableCell>{selectedTagNames.join(", ")}</TableCell>
        <TableCell>
          <>
            <IconButton
              edge="end"
              color="info"
              title="Edit Item"
              sx={{ mr: 0 }}
              onClick={() => setEditorOpen(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="error"
              title="Delete Item"
              onClick={() => setDeleteDialogOpen(true)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        </TableCell>
      </TableRow>
      {editorOpen && (
        <TodoItemEditor
          editorOpen={editorOpen}
          setEditorOpen={setEditorOpen}
          saveMode="update"
          currentItem={item}
          selectedTagNames={selectedTagNames}
          setAlertData={setAlertData}
        />
      )}
      {deleteDialogOpen && (
        <ConfirmDeleteDialog
          dialogOpen={deleteDialogOpen}
          setDialogOpen={setDeleteDialogOpen}
          handleDeleteAction={handleDeleteItemClick}
          title="Delete TODO Item?"
          text={DELETE_DIALOG_TEXT}
        />
      )}
      <FeedbackAlert
        {...alertData}
        handleClose={() =>
          setAlertData((prev) => {
            return {
              ...prev,
              open: false,
            };
          })
        }
      />
    </>
  );
}

interface CompletionStateProps {
  id: string;
  isComplete: boolean;
}

function CompletionState({ id, isComplete }: CompletionStateProps) {
  const [nextCompletionState, setNextCompletionState] = useState(!isComplete);

  const dispatch = useTodoItemsDispatch();
  const updateCompletion = useSetCompletionMutation(id, nextCompletionState, {
    onSuccess: () => dispatch({ type: "require-refetch" }),
  });

  const handleCheckboxChanged = (toggledState: boolean) => {
    setNextCompletionState(!toggledState);
    updateCompletion.mutate();
  };

  return (
    <>
      <Checkbox
        checked={isComplete}
        onChange={(e) => handleCheckboxChanged(e.target.checked)}
      />
    </>
  );
}

interface TodoItemAssignmentFormProps {
  todoLists: ITodoListResponse[];
  selectedItems: string[];
}

function TodoItemAssignmentForm({
  todoLists,
  selectedItems,
}: TodoItemAssignmentFormProps) {
  const [selectedList, setSelectedList] = useState<string>("");
  const assignToList = useAssignToListMutation();

  const handleChange = (selected: string) => setSelectedList(selected);
  const handleClick = () => {
    selectedItems.map((item) =>
      assignToList.mutate(
        new AssignTodoItemRequest({
          todoListId: selectedList,
          todoItemId: item,
        })
      )
    );

    resetForm();
  };

  const resetForm = () => {
    setSelectedList("");
  };

  return (
    <>
      <Stack direction="row">
        <Typography variant="body1" sx={{ mr: 2 }}>
          Assign to list:
        </Typography>
        <Select
          variant="outlined"
          size="small"
          value={selectedList}
          onChange={(e) => handleChange(e.target.value)}
        >
          {todoLists.map((list) => (
            <MenuItem key={list.id} value={list.id}>
              {list.title}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="outlined"
          disabled={selectedList.length === 0}
          onClick={handleClick}
        >
          Assign Items
        </Button>
      </Stack>
    </>
  );
}
