import { QueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {
  ITodoTagResponse,
  ITodoItemResponse,
  TodoTagRequest,
  CreateTodoItemRequest,
  ICreateTodoItemRequest,
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

interface LandingPageProps {
  apiClient: QueryClient;
}

export function LandingPage({ apiClient }: LandingPageProps) {
  const tagsQuery = useTodoTagsAllQuery();
  const tagsPost = useTodoTagsPOSTMutation();
  const itemsQuery = useTodoItemsAllQuery();
  const itemsPost = useTodoItemsMutation();

  const [tags, setTags] = useState<ITodoTagResponse[]>([]);
  const [todoItems, setTodoItems] = useState<ITodoItemResponse[]>([]);

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
  }, [tagsQuery.data, itemsQuery.data]);

  return (
    <>
      <TodoTagEditor addTag={addTag} />
      <TodoTagListView tags={tags} />
      <TodoItemEditor tags={tags} addTodoItem={addTodoItem} />
      <TodoItemListView todoItems={todoItems} />
    </>
  );
}
