import axios from "axios";

const url = "http://localhost:5000";

function makeAuth(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function signUp(body) {
  const promise = axios.post(`${url}/sign-up`, body);
  return promise;
}

function signIn(body) {
  const promise = axios.post(`${url}/sign-in`, body);
  return promise;
}

function postTransaction(token, body) {
  const config = makeAuth(token);
  const promise = axios.post(`${url}/transaction`, body, config);
  return promise;
}
function getTransaction(token) {
  const config = makeAuth(token);
  const promise = axios.get(`${url}/transaction`, config);
  return promise;
}

export { signIn, signUp, postTransaction, getTransaction };
