function AuthApi(data) {
  const _baseUrl = data.baseUrl;
  const _headers = data.headers;

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const registerUser = (data) => {
    return fetch(`${_baseUrl}/signup`, {
      method: "POST",
      headers: _headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(checkResponseStatus)
      .then((data) => {
        saveToken(data.token);
        return data;
      });
  };

  const loginUser = (data) => {
    return fetch(`${_baseUrl}/signin`, {
      method: "POST",
      headers: _headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
    .then(checkResponseStatus)
    .then((data) => {
        saveToken(data.token);
        return data;
      });
  };

  return { registerUser, loginUser, getToken, saveToken };
}

const authApi = new AuthApi({
  baseUrl: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default authApi;
