function AuthApi() {
  const baseUrl = "https://auth.nomoreparties.co";
  const headers = {
    "Content-Type": "application/json",
  };

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
  };


  const registerUser = (email, password) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const loginUser = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password }),
    })
    .then((res) => {
      return checkResponseStatus(res);
    })
  };

  return { registerUser, loginUser, checkToken };
}

const authApi = new AuthApi();

export default authApi;
