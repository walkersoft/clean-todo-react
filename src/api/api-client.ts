//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import * as moment from "moment";

export * as Client from "./api-client/Client";
export { getFetch, setBaseUrl, setFetchFactory } from "./api-client/helpers";
export * as Query from "./api-client/Query";

export class CreateTodoItemRequest implements ICreateTodoItemRequest {
  description?: string | undefined;
  isActive?: boolean;
  rollsOver?: boolean;
  dateDate?: moment.Moment;
  tagIds?: string[] | undefined;

  constructor(data?: ICreateTodoItemRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.description = _data["description"];
      this.isActive = _data["isActive"];
      this.rollsOver = _data["rollsOver"];
      this.dateDate = _data["dateDate"]
        ? moment(_data["dateDate"].toString())
        : <any>undefined;
      if (Array.isArray(_data["tagIds"])) {
        this.tagIds = [] as any;
        for (let item of _data["tagIds"]) this.tagIds!.push(item);
      }
    }
  }

  static fromJS(data: any): CreateTodoItemRequest {
    data = typeof data === "object" ? data : {};
    let result = new CreateTodoItemRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["description"] = this.description;
    data["isActive"] = this.isActive;
    data["rollsOver"] = this.rollsOver;
    data["dateDate"] = this.dateDate
      ? this.dateDate.toISOString()
      : <any>undefined;
    if (Array.isArray(this.tagIds)) {
      data["tagIds"] = [];
      for (let item of this.tagIds) data["tagIds"].push(item);
    }
    return data;
  }
}

export interface ICreateTodoItemRequest {
  description?: string | undefined;
  isActive?: boolean;
  rollsOver?: boolean;
  dateDate?: moment.Moment;
  tagIds?: string[] | undefined;
}

export class CreateTodoTagRequest implements ICreateTodoTagRequest {
  name?: string | undefined;

  constructor(data?: ICreateTodoTagRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): CreateTodoTagRequest {
    data = typeof data === "object" ? data : {};
    let result = new CreateTodoTagRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["name"] = this.name;
    return data;
  }
}

export interface ICreateTodoTagRequest {
  name?: string | undefined;
}

export class TodoItemResponse implements ITodoItemResponse {
  id?: string;
  description?: string | undefined;
  isActive?: boolean;
  isComplete?: boolean;
  rollsOver?: boolean;
  rollOverCount?: number;
  dueDate?: moment.Moment;
  completionDate?: moment.Moment | undefined;
  tags?: string[] | undefined;

  constructor(data?: ITodoItemResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.description = _data["description"];
      this.isActive = _data["isActive"];
      this.isComplete = _data["isComplete"];
      this.rollsOver = _data["rollsOver"];
      this.rollOverCount = _data["rollOverCount"];
      this.dueDate = _data["dueDate"]
        ? moment(_data["dueDate"].toString())
        : <any>undefined;
      this.completionDate = _data["completionDate"]
        ? moment(_data["completionDate"].toString())
        : <any>undefined;
      if (Array.isArray(_data["tags"])) {
        this.tags = [] as any;
        for (let item of _data["tags"]) this.tags!.push(item);
      }
    }
  }

  static fromJS(data: any): TodoItemResponse {
    data = typeof data === "object" ? data : {};
    let result = new TodoItemResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    data["description"] = this.description;
    data["isActive"] = this.isActive;
    data["isComplete"] = this.isComplete;
    data["rollsOver"] = this.rollsOver;
    data["rollOverCount"] = this.rollOverCount;
    data["dueDate"] = this.dueDate
      ? this.dueDate.toISOString()
      : <any>undefined;
    data["completionDate"] = this.completionDate
      ? this.completionDate.toISOString()
      : <any>undefined;
    if (Array.isArray(this.tags)) {
      data["tags"] = [];
      for (let item of this.tags) data["tags"].push(item);
    }
    return data;
  }
}

export interface ITodoItemResponse {
  id?: string;
  description?: string | undefined;
  isActive?: boolean;
  isComplete?: boolean;
  rollsOver?: boolean;
  rollOverCount?: number;
  dueDate?: moment.Moment;
  completionDate?: moment.Moment | undefined;
  tags?: string[] | undefined;
}

export class TodoTagResponse implements ITodoTagResponse {
  id?: string;
  name?: string | undefined;

  constructor(data?: ITodoTagResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): TodoTagResponse {
    data = typeof data === "object" ? data : {};
    let result = new TodoTagResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    return data;
  }
}

export interface ITodoTagResponse {
  id?: string;
  name?: string | undefined;
}

export class WeatherForecast implements IWeatherForecast {
  date?: moment.Moment;
  temperatureC?: number;
  readonly temperatureF?: number;
  summary?: string | undefined;

  constructor(data?: IWeatherForecast) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.date = _data["date"]
        ? moment(_data["date"].toString())
        : <any>undefined;
      this.temperatureC = _data["temperatureC"];
      (<any>this).temperatureF = _data["temperatureF"];
      this.summary = _data["summary"];
    }
  }

  static fromJS(data: any): WeatherForecast {
    data = typeof data === "object" ? data : {};
    let result = new WeatherForecast();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["date"] = this.date ? this.date.toISOString() : <any>undefined;
    data["temperatureC"] = this.temperatureC;
    data["temperatureF"] = this.temperatureF;
    data["summary"] = this.summary;
    return data;
  }
}

export interface IWeatherForecast {
  date?: moment.Moment;
  temperatureC?: number;
  temperatureF?: number;
  summary?: string | undefined;
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

export function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}

import { addResultTypeFactory } from "./api-client/helpers";

//-----PersistorHydrator.File-----
import type { QueryKey } from "@tanstack/react-query";
import type { PersistedClient } from "@tanstack/react-query-persist-client";
import { getResultTypeFactory } from "./api-client/helpers";

/*
 * If you have Dates in QueryKeys (i.e. in request parameters), you need to deserialize them to Dates correctly
 * (otherwise they are deserialized as strings by default, and your queries are broken).
 */
export function deserializeDate(str: unknown) {
  if (!str || typeof str !== "string") return str;
  if (!/^\d\d\d\d\-\d\d\-\d\d/.test(str)) return str;

  const date = new Date(str);
  const isDate = date instanceof Date && !isNaN(date as any);

  return isDate ? date : str;
}

export function deserializeDatesInQueryKeys(queryKey: QueryKey) {
  return (
    queryKey
      // We need to replace `null` with `undefined` in query key, because
      // `undefined` is serialized as `null`.
      // And most probably if we have `null` in QueryKey it actually means `undefined`.
      // We can't keep nulls, because they have a different meaning, and e.g. boolean parameters are not allowed to be null.
      .map((x) => (x === null ? undefined : x))
      .map((x) => deserializeDate(x))
  );
}

export function deserializeClassesInQueryData(queryKey: QueryKey, data: any) {
  if (!data) {
    return data;
  } else if (typeof data !== "object") {
    return data;
  } else if (
    "pages" in data &&
    "pageParams" in data &&
    Array.isArray(data.pages) &&
    Array.isArray(data.pageParams)
  ) {
    // infinite query
    data.pages = data.pages.map((page: any) =>
      deserializeClassesInQueryData(queryKey, page)
    );
  } else if (Array.isArray(data)) {
    return data.map((elem) => constructDtoClass(queryKey, elem));
  } else {
    return constructDtoClass(queryKey, data);
  }
}

/*
 * Pass this function as `deserialize` option to createSyncStoragePersister/createAsyncStoragePersister
 * to correctly deserialize your DTOs (including Dates)
 */
export function persisterDeserialize(cache: string): PersistedClient {
  const client: PersistedClient = JSON.parse(cache);
  client.clientState.queries.forEach((query) => {
    query.state.data = deserializeClassesInQueryData(
      query.queryKey,
      query.state.data
    );
    query.queryKey = deserializeDatesInQueryKeys(query.queryKey);
  });

  return client;
}

export function constructDtoClass(queryKey: QueryKey, data: any): unknown {
  const resultTypeKey = getResultTypeClassKey(queryKey);
  const constructorFunction = getResultTypeFactory(resultTypeKey);

  if (!data || !constructorFunction) return data;

  const dto = constructorFunction();
  dto.init(data);

  return dto;
}

export function getResultTypeClassKey(queryKey: QueryKey): string {
  if (!Array.isArray(queryKey)) {
    return queryKey as unknown as string;
  }
  if (queryKey.length >= 2) {
    // We concatenate first and second elements, because they uniquely identify the query.
    // All other QueryKey elements are query parameters
    return `${queryKey[0]}___${queryKey[1]}`;
  }

  // We actually should never reach this point :)
  return queryKey.join("___");
}

export function initPersister() {
  addResultTypeFactory("Client___todoItemsAll", () => new TodoItemResponse());
  addResultTypeFactory("Client___todoTagsAll", () => new TodoTagResponse());
  addResultTypeFactory(
    "Client___getWeatherForecast",
    () => new WeatherForecast()
  );
}
//-----/PersistorHydrator.File----
