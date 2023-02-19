import { QueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {
  ITodoTagResponse,
  ITodoItemResponse,
  CreateTodoTagRequest,
} from "../api/api-client";
import {
  useTodoTagsAllQuery,
  useTodoTagsMutation,
} from "../api/api-client/Query";
import { TodoItemEditor } from "../components/todo-item/TodoItemEditor";
import { TodoItemView } from "../components/todo-item/TodoItemView";
import TodoTagEditor from "../components/todo-tag/TodoTagEditor";
import { TodoTagView } from "../components/todo-tag/TodoTagView";

interface LandingPageProps {
  apiClient: QueryClient;
}

export function LandingPage({ apiClient }: LandingPageProps) {
  const tagsQuery = useTodoTagsAllQuery();
  const tagsPost = useTodoTagsMutation();
  
  const [tags, setTags] = useState<ITodoTagResponse[]>([]);
  const [todoItems, setTodoItems] = useState<ITodoItemResponse[]>([]);

  const addTag = (tag: ITodoTagResponse) => {
    tagsPost.mutate(new CreateTodoTagRequest({ ...tag }), {
      onSuccess: () => tagsQuery.refetch(),
    });
  };

  const addTodoItem = (item: ITodoItemResponse) => {
    setTodoItems([...todoItems, item]);
  };

  useEffect(() => {
    setTags(!!tagsQuery.data ? tagsQuery.data : []);
  }, [tagsQuery.data]);

  return (
    <>
      <TodoTagEditor addTag={addTag} />
      <TodoTagView tags={tags} />
      <TodoItemEditor tags={tags} addTodoItem={addTodoItem} />
      <TodoItemView todoItems={todoItems} />
    </>
  );
}
