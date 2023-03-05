//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import type {
  MutationKey,
  QueryClient,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { QueryMetaContext } from "react-query-swagger";
import * as Types from "../api-client";
import { addMetaToOptions, getBaseUrl, trimArrayEnd } from "./helpers";
export const Client = Types.Client;

export function todoItemsAllUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoItems";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let todoItemsAllDefaultOptions: UseQueryOptions<
  Types.TodoItemResponse[],
  unknown,
  Types.TodoItemResponse[]
> = {
  queryFn: __todoItemsAll,
};
export function getTodoItemsAllDefaultOptions(): UseQueryOptions<
  Types.TodoItemResponse[],
  unknown,
  Types.TodoItemResponse[]
> {
  return todoItemsAllDefaultOptions;
}
export function setTodoItemsAllDefaultOptions(
  options: UseQueryOptions<
    Types.TodoItemResponse[],
    unknown,
    Types.TodoItemResponse[]
  >
) {
  todoItemsAllDefaultOptions = options;
}

export function todoItemsAllQueryKey(): QueryKey;
export function todoItemsAllQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd(["Client", "todoItemsAll"]);
}
function __todoItemsAll() {
  return Types.Client.todoItemsAll();
}

/**
 * @return Success
 */
export function useTodoItemsAllQuery<
  TSelectData = Types.TodoItemResponse[],
  TError = unknown
>(
  options?: UseQueryOptions<Types.TodoItemResponse[], TError, TSelectData>
): UseQueryResult<TSelectData, TError>;
export function useTodoItemsAllQuery<
  TSelectData = Types.TodoItemResponse[],
  TError = unknown
>(...params: any[]): UseQueryResult<TSelectData, TError> {
  let options:
    | UseQueryOptions<Types.TodoItemResponse[], TError, TSelectData>
    | undefined = undefined;

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.TodoItemResponse[], TError, TSelectData>({
    queryFn: __todoItemsAll,
    queryKey: todoItemsAllQueryKey(),
    ...(todoItemsAllDefaultOptions as unknown as UseQueryOptions<
      Types.TodoItemResponse[],
      TError,
      TSelectData
    >),
    ...options,
  });
}
/**
 * @return Success
 */
export function setTodoItemsAllData(
  queryClient: QueryClient,
  updater: (
    data: Types.TodoItemResponse[] | undefined
  ) => Types.TodoItemResponse[]
) {
  queryClient.setQueryData(todoItemsAllQueryKey(), updater);
}

/**
 * @return Success
 */
export function setTodoItemsAllDataByQueryId(
  queryClient: QueryClient,
  queryKey: QueryKey,
  updater: (
    data: Types.TodoItemResponse[] | undefined
  ) => Types.TodoItemResponse[]
) {
  queryClient.setQueryData(queryKey, updater);
}

export function todoItemsUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoItems";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function todoItemsMutationKey(): MutationKey {
  return trimArrayEnd(["Client", "todoItems"]);
}

/**
 * @param body (optional)
 * @return Success
 */
export function useTodoItemsMutation<TContext>(
  options?: Omit<
    UseMutationOptions<
      Types.TodoItemResponse,
      unknown,
      Types.CreateTodoItemRequest,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<
  Types.TodoItemResponse,
  unknown,
  Types.CreateTodoItemRequest,
  TContext
> {
  const key = todoItemsMutationKey();

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useMutation(
    (body: Types.CreateTodoItemRequest) => Types.Client.todoItems(body),
    { ...options, mutationKey: key }
  );
}

export function todoTagsAllUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let todoTagsAllDefaultOptions: UseQueryOptions<
  Types.TodoTagResponse[],
  unknown,
  Types.TodoTagResponse[]
> = {
  queryFn: __todoTagsAll,
};
export function getTodoTagsAllDefaultOptions(): UseQueryOptions<
  Types.TodoTagResponse[],
  unknown,
  Types.TodoTagResponse[]
> {
  return todoTagsAllDefaultOptions;
}
export function setTodoTagsAllDefaultOptions(
  options: UseQueryOptions<
    Types.TodoTagResponse[],
    unknown,
    Types.TodoTagResponse[]
  >
) {
  todoTagsAllDefaultOptions = options;
}

export function todoTagsAllQueryKey(): QueryKey;
export function todoTagsAllQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd(["Client", "todoTagsAll"]);
}
function __todoTagsAll() {
  return Types.Client.todoTagsAll();
}

/**
 * @return Success
 */
export function useTodoTagsAllQuery<
  TSelectData = Types.TodoTagResponse[],
  TError = unknown
>(
  options?: UseQueryOptions<Types.TodoTagResponse[], TError, TSelectData>
): UseQueryResult<TSelectData, TError>;
export function useTodoTagsAllQuery<
  TSelectData = Types.TodoTagResponse[],
  TError = unknown
>(...params: any[]): UseQueryResult<TSelectData, TError> {
  let options:
    | UseQueryOptions<Types.TodoTagResponse[], TError, TSelectData>
    | undefined = undefined;

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.TodoTagResponse[], TError, TSelectData>({
    queryFn: __todoTagsAll,
    queryKey: todoTagsAllQueryKey(),
    ...(todoTagsAllDefaultOptions as unknown as UseQueryOptions<
      Types.TodoTagResponse[],
      TError,
      TSelectData
    >),
    ...options,
  });
}
/**
 * @return Success
 */
export function setTodoTagsAllData(
  queryClient: QueryClient,
  updater: (
    data: Types.TodoTagResponse[] | undefined
  ) => Types.TodoTagResponse[]
) {
  queryClient.setQueryData(todoTagsAllQueryKey(), updater);
}

/**
 * @return Success
 */
export function setTodoTagsAllDataByQueryId(
  queryClient: QueryClient,
  queryKey: QueryKey,
  updater: (
    data: Types.TodoTagResponse[] | undefined
  ) => Types.TodoTagResponse[]
) {
  queryClient.setQueryData(queryKey, updater);
}

export function todoTagsPOSTUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function todoTagsPOSTMutationKey(): MutationKey {
  return trimArrayEnd(["Client", "todoTagsPOST"]);
}

/**
 * @param body (optional)
 * @return Success
 */
export function useTodoTagsPOSTMutation<TContext>(
  options?: Omit<
    UseMutationOptions<
      Types.TodoTagResponse,
      unknown,
      Types.TodoTagRequest,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<
  Types.TodoTagResponse,
  unknown,
  Types.TodoTagRequest,
  TContext
> {
  const key = todoTagsPOSTMutationKey();

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useMutation(
    (body: Types.TodoTagRequest) => Types.Client.todoTagsPOST(body),
    { ...options, mutationKey: key }
  );
}

export function todoTagsPUTUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function todoTagsPUTMutationKey(): MutationKey {
  return trimArrayEnd(["Client", "todoTagsPUT"]);
}

/**
 * @param body (optional)
 * @return Success
 */
export function useTodoTagsPUTMutation<TContext>(
  options?: Omit<
    UseMutationOptions<
      Types.TodoTagResponse,
      unknown,
      Types.TodoTagRequest,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<
  Types.TodoTagResponse,
  unknown,
  Types.TodoTagRequest,
  TContext
> {
  const key = todoTagsPUTMutationKey();

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useMutation(
    (body: Types.TodoTagRequest) => Types.Client.todoTagsPUT(body),
    { ...options, mutationKey: key }
  );
}

export function todoTagsDELETEUrl(id?: string | undefined): string {
  let url_ = getBaseUrl() + "/api/TodoTags?";
  if (id === null) throw new Error("The parameter 'id' cannot be null.");
  else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function todoTagsDELETEMutationKey(
  id?: string | undefined
): MutationKey {
  return trimArrayEnd(["Client", "todoTagsDELETE", id as any]);
}

/**
 * @param id (optional)
 * @return Success
 */
export function useTodoTagsDELETEMutation<TContext>(
  id?: string | undefined,
  options?: Omit<
    UseMutationOptions<void, unknown, void, TContext>,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<void, unknown, void, TContext> {
  const key = todoTagsDELETEMutationKey(id);

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useMutation(() => Types.Client.todoTagsDELETE(id), {
    ...options,
    mutationKey: key,
  });
}

export function unassignUrl(): string {
  let url_ = getBaseUrl() + "/api/TodoTags/Unassign";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function unassignMutationKey(): MutationKey {
  return trimArrayEnd(["Client", "unassign"]);
}

/**
 * @param body (optional)
 * @return Success
 */
export function useUnassignMutation<TContext>(
  options?: Omit<
    UseMutationOptions<
      Types.TodoTagResponse,
      unknown,
      Types.TodoTagRequest,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<
  Types.TodoTagResponse,
  unknown,
  Types.TodoTagRequest,
  TContext
> {
  const key = unassignMutationKey();

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useMutation(
    (body: Types.TodoTagRequest) => Types.Client.unassign(body),
    { ...options, mutationKey: key }
  );
}

export function getWeatherForecastUrl(): string {
  let url_ = getBaseUrl() + "/WeatherForecast";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getWeatherForecastDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __getWeatherForecast,
};
export function getGetWeatherForecastDefaultOptions(): UseQueryOptions<
  void,
  unknown,
  void
> {
  return getWeatherForecastDefaultOptions;
}
export function setGetWeatherForecastDefaultOptions(
  options: UseQueryOptions<void, unknown, void>
) {
  getWeatherForecastDefaultOptions = options;
}

export function getWeatherForecastQueryKey(): QueryKey;
export function getWeatherForecastQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd(["Client", "getWeatherForecast"]);
}
function __getWeatherForecast() {
  return Types.Client.getWeatherForecast();
}

export function useGetWeatherForecastQuery<
  TSelectData = void,
  TError = unknown
>(
  options?: UseQueryOptions<void, TError, TSelectData>
): UseQueryResult<TSelectData, TError>;
export function useGetWeatherForecastQuery<
  TSelectData = void,
  TError = unknown
>(...params: any[]): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined =
    undefined;

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<void, TError, TSelectData>({
    queryFn: __getWeatherForecast,
    queryKey: getWeatherForecastQueryKey(),
    ...(getWeatherForecastDefaultOptions as unknown as UseQueryOptions<
      void,
      TError,
      TSelectData
    >),
    ...options,
  });
}

export function setGetWeatherForecastData(
  queryClient: QueryClient,
  updater: (data: void | undefined) => void
) {
  queryClient.setQueryData(getWeatherForecastQueryKey(), updater);
}

export function setGetWeatherForecastDataByQueryId(
  queryClient: QueryClient,
  queryKey: QueryKey,
  updater: (data: void | undefined) => void
) {
  queryClient.setQueryData(queryKey, updater);
}
