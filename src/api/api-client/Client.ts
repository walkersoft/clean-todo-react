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
  if (status === 200) {
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
  if (status === 200) {
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
  if (status === 200) {
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
export function todoTags(
  body?: Types.CreateTodoTagRequest | undefined
): Promise<Types.TodoItemResponse> {
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
      return processTodoTags(_response);
    });
}

function processTodoTags(response: Response): Promise<Types.TodoItemResponse> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 200) {
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
export function getWeatherForecast(): Promise<Types.WeatherForecast[]> {
  let url_ = getBaseUrl() + "/WeatherForecast";
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
      return processGetWeatherForecast(_response);
    });
}

function processGetWeatherForecast(
  response: Response
): Promise<Types.WeatherForecast[]> {
  const status = response.status;
  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }
  if (status === 200) {
    return response.text().then((_responseText) => {
      let result200: any = null;
      let resultData200 =
        _responseText === ""
          ? null
          : JSON.parse(_responseText, getJsonParseReviver());
      if (Array.isArray(resultData200)) {
        result200 = [] as any;
        for (let item of resultData200)
          result200!.push(Types.WeatherForecast.fromJS(item));
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
  return Promise.resolve<Types.WeatherForecast[]>(null as any);
}
