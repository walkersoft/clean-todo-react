/* tslint:disable */
/* eslint-disable */
import * as Types from "../api-client";
import { throwException } from "../api-client";
import { getBaseUrl, getFetch, getJsonParseReviver } from "./helpers";

/**
 * @return Success
 */
export function todoItemsAll(): Promise<Types.TodoItemResponse[]> {
  let url_ = getBaseUrl() + "/api/TodoItems";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoItemsAll(_response);
    });
}

function processTodoItemsAll(
  response: Response
): Promise<Types.TodoItemResponse[]> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      if (Array.isArray(resultData200)) {
        result200 = [] as any;
        for (let item of resultData200)
          result200!.push(Types.TodoItemResponse.fromJS(item));
      } else {
        result200 = <any>null;
      }
      return result200;
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoItemResponse[]>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function todoItemsPOST(
  body?: Types.TodoItemRequest | undefined
): Promise<Types.TodoItemResponse> {
  let url_ = getBaseUrl() + "/api/TodoItems";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoItemsPOST(_response);
    });
}

function processTodoItemsPOST(
  response: Response
): Promise<Types.TodoItemResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoItemResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoItemResponse>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function todoItemsPUT(
  body?: Types.TodoItemRequest | undefined
): Promise<Types.TodoItemResponse> {
  let url_ = getBaseUrl() + "/api/TodoItems";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoItemsPUT(_response);
    });
}

function processTodoItemsPUT(
  response: Response
): Promise<Types.TodoItemResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoItemResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoItemResponse>(null as any);
}

/**
 * @param id (optional)
 * @return Success
 */
export function todoItemsDELETE(id?: string | undefined): Promise<void> {
  let url_ = getBaseUrl() + "/api/TodoItems?";
  if (id === null) throw new Error("The parameter 'id' cannot be null.");
  else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "DELETE",
    headers: {},
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoItemsDELETE(_response);
    });
}

function processTodoItemsDELETE(response: Response): Promise<void> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 204) {
    return response.text().then((_responseText) => {
      return;
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<void>(null as any);
}

/**
 * @param id (optional)
 * @param completionStatus (optional)
 * @return Success
 */
export function setCompletion(
  id?: string | undefined,
  completionStatus?: boolean | undefined
): Promise<void> {
  let url_ = getBaseUrl() + "/api/TodoItems/SetCompletion?";
  if (id === null) throw new Error("The parameter 'id' cannot be null.");
  else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
  if (completionStatus === null)
    throw new Error("The parameter 'completionStatus' cannot be null.");
  else if (completionStatus !== undefined)
    url_ +=
      "completionStatus=" + encodeURIComponent("" + completionStatus) + "&";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "PUT",
    headers: {},
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processSetCompletion(_response);
    });
}

function processSetCompletion(response: Response): Promise<void> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      return;
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<void>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function assignToList(
  body?: Types.AssignTodoItemRequest | undefined
): Promise<void> {
  let url_ = getBaseUrl() + "/api/TodoItems/AssignToList";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processAssignToList(_response);
    });
}

function processAssignToList(response: Response): Promise<void> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 204) {
    return response.text().then((_responseText) => {
      return;
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<void>(null as any);
}

/**
 * @return Success
 */
export function todoListsAll(): Promise<Types.TodoListResponse[]> {
  let url_ = getBaseUrl() + "/api/TodoLists";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoListsAll(_response);
    });
}

function processTodoListsAll(
  response: Response
): Promise<Types.TodoListResponse[]> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      if (Array.isArray(resultData200)) {
        result200 = [] as any;
        for (let item of resultData200)
          result200!.push(Types.TodoListResponse.fromJS(item));
      } else {
        result200 = <any>null;
      }
      return result200;
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoListResponse[]>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function todoLists(
  body?: Types.TodoListRequest | undefined
): Promise<Types.TodoListResponse> {
  let url_ = getBaseUrl() + "/api/TodoLists";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoLists(_response);
    });
}

function processTodoLists(response: Response): Promise<Types.TodoListResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoListResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoListResponse>(null as any);
}

/**
 * @return Success
 */
export function todoTagsAll(): Promise<Types.TodoTagResponse[]> {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoTagsAll(_response);
    });
}

function processTodoTagsAll(
  response: Response
): Promise<Types.TodoTagResponse[]> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      if (Array.isArray(resultData200)) {
        result200 = [] as any;
        for (let item of resultData200)
          result200!.push(Types.TodoTagResponse.fromJS(item));
      } else {
        result200 = <any>null;
      }
      return result200;
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoTagResponse[]>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function todoTagsPOST(
  body?: Types.TodoTagRequest | undefined
): Promise<Types.TodoTagResponse> {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoTagsPOST(_response);
    });
}

function processTodoTagsPOST(
  response: Response
): Promise<Types.TodoTagResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoTagResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status === 400) {
    return response.text().then((_responseText) => {
      let result400: any = null;
      let resultData400 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result400 = Types.ExceptionResponse.fromJS(resultData400);
      return throwException(
        "Bad Request",
        status,
        _responseText,
        _headers,
        result400
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoTagResponse>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function todoTagsPUT(
  body?: Types.TodoTagRequest | undefined
): Promise<Types.TodoTagResponse> {
  let url_ = getBaseUrl() + "/api/TodoTags";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoTagsPUT(_response);
    });
}

function processTodoTagsPUT(
  response: Response
): Promise<Types.TodoTagResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoTagResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status === 400) {
    return response.text().then((_responseText) => {
      let result400: any = null;
      let resultData400 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result400 = Types.ExceptionResponse.fromJS(resultData400);
      return throwException(
        "Bad Request",
        status,
        _responseText,
        _headers,
        result400
      );
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoTagResponse>(null as any);
}

/**
 * @param id (optional)
 * @return Success
 */
export function todoTagsDELETE(id?: string | undefined): Promise<void> {
  let url_ = getBaseUrl() + "/api/TodoTags?";
  if (id === null) throw new Error("The parameter 'id' cannot be null.");
  else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "DELETE",
    headers: {},
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processTodoTagsDELETE(_response);
    });
}

function processTodoTagsDELETE(response: Response): Promise<void> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 204) {
    return response.text().then((_responseText) => {
      return;
    });
  } else if (status === 400) {
    return response.text().then((_responseText) => {
      let result400: any = null;
      let resultData400 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result400 = Types.ExceptionResponse.fromJS(resultData400);
      return throwException(
        "Bad Request",
        status,
        _responseText,
        _headers,
        result400
      );
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<void>(null as any);
}

/**
 * @param body (optional)
 * @return Success
 */
export function unassign(
  body?: Types.TodoTagRequest | undefined
): Promise<Types.TodoTagResponse> {
  let url_ = getBaseUrl() + "/api/TodoTags/Unassign";
  url_ = url_.replace(/[?&]$/, "");

  const content_ = JSON.stringify(body);

  let options_: RequestInit = {
    body: content_,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processUnassign(_response);
    });
}

function processUnassign(response: Response): Promise<Types.TodoTagResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result200 = Types.TodoTagResponse.fromJS(resultData200);
      return result200;
    });
  } else if (status === 404) {
    return response.text().then((_responseText) => {
      let result404: any = null;
      let resultData404 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result404 = Types.ExceptionResponse.fromJS(resultData404);
      return throwException(
        "Not Found",
        status,
        _responseText,
        _headers,
        result404
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<Types.TodoTagResponse>(null as any);
}

export function getWeatherForecast(): Promise<void> {
  let url_ = getBaseUrl() + "/WeatherForecast";
  url_ = url_.replace(/[?&]$/, "");

  let options_: RequestInit = {
    method: "GET",
    headers: {},
  };

  return getFetch()
    .fetch(url_, options_)
    .then((_response: Response) => {
      return processGetWeatherForecast(_response);
    });
}

function processGetWeatherForecast(response: Response): Promise<void> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 500) {
    return response.text().then((_responseText) => {
      let result500: any = null;
      let resultData500 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      result500 = Types.ExceptionResponse.fromJS(resultData500);
      return throwException(
        "Server Error",
        status,
        _responseText,
        _headers,
        result500
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then((_responseText) => {
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers
      );
    });
  }
  return Promise.resolve<void>(null as any);
}
