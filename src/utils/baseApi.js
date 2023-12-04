export class BaseApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(endpoint, params) {
    return fetch(`${this._baseUrl}${endpoint}`, params).then(
      this._checkResponse
    );
  }

  _checkResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`);
  }
}
