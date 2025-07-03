import {
  TSkillsResponse,
  TUserCardsResponse,
  TRegisterData,
  TAuthResponse,
  TLoginData,
  TServerResponse
} from '@shared/api';

const BASE_URL = process.env.API_URL;

const headers = {
  'Content-Type': 'application/json'
};

const checkoutResponse = async <T>(res: Response): Promise<T> => {
  const data = await res.json();
  if (!res.ok) {
    return Promise.reject(data);
  }
  return data as T;
};

export const getUserCardsApi = (page: number, limit: number) =>
  fetch(`${BASE_URL}/userCards`, {
    method: 'POST',
    body: JSON.stringify({
      page,
      limit
    }),
    headers
  })
    .then(checkoutResponse<TUserCardsResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const getSkillsApi = () =>
  fetch(`${BASE_URL}/skills`)
    .then(checkoutResponse<TSkillsResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const registerUserApi = (data: TRegisterData) =>
  fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  })
    .then(checkoutResponse<TAuthResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const loginUserApi = (data: TLoginData) =>
  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  })
    .then(checkoutResponse<TAuthResponse>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });

export const logoutUserApi = () =>
  fetch(`${BASE_URL}/logout`)
    .then(checkoutResponse<Pick<TServerResponse<{}>, 'success'>>)
    .then((res) => {
      if (res?.success) return res;
      return Promise.reject(res);
    });
