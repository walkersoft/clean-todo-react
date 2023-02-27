import { useEffect, useState } from "react";
import {
  CreateTodoItemRequest,
  ICreateTodoItemRequest,
  ITodoItemResponse,
  ITodoTagResponse,
  TodoTagRequest,
} from "../api/api-client";
import {
  useTodoItemsAllQuery,
  useTodoItemsMutation,
  useTodoTagsAllQuery,
  useTodoTagsPOSTMutation,
} from "../api/api-client/Query";
import { TodoItemEditor } from "../components/todo-item/TodoItemEditor";
import { TodoItemListView } from "../components/todo-item/TodoItemListView";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagListView } from "../components/todo-tag/TodoTagListView";

export function LandingPage() {
  const tagsQuery = useTodoTagsAllQuery();
  const tagsPost = useTodoTagsPOSTMutation();
  const itemsQuery = useTodoItemsAllQuery();
  const itemsPost = useTodoItemsMutation();

  const [tags, setTags] = useState<ITodoTagResponse[]>([]);
  const [todoItems, setTodoItems] = useState<ITodoItemResponse[]>([]);
  const [notifyOfTagDeleted, setNotifyOfTagDeleted] = useState<boolean>(false);

  const addTag = (tag: ITodoTagResponse) => {
    tagsPost.mutate(new TodoTagRequest({ ...tag }), {
      onSuccess: () => tagsQuery.refetch(),
    });
  };

  const addTodoItem = (item: ICreateTodoItemRequest) => {
    itemsPost.mutate(new CreateTodoItemRequest({ ...item }), {
      onSuccess: () => itemsQuery.refetch(),
    });
  };

  useEffect(() => {
    setTags(!!tagsQuery.data ? tagsQuery.data : []);
    setTodoItems(!!itemsQuery.data ? itemsQuery.data : []);
    if (notifyOfTagDeleted) {
      tagsQuery.refetch();
      setNotifyOfTagDeleted((notified) => !notified);
    }
  }, [tagsQuery, tagsQuery.data, itemsQuery.data, notifyOfTagDeleted]);

  return (
    <>
      <TodoTagEditor addTag={addTag} />
      <TodoTagListView
        tags={tags}
        onNotifyOfTagDeleted={() => setNotifyOfTagDeleted(true)}
      />
      <TodoItemEditor tags={tags} addTodoItem={addTodoItem} />
      <TodoItemListView todoItems={todoItems} />
    </>
  );
}
