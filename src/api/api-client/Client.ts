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
export function todoItems(
  body?: Types.CreateTodoItemRequest | undefined
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
      return processTodoItems(_response);
    });
}

function processTodoItems(response: Response): Promise<Types.TodoItemResponse> {
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
