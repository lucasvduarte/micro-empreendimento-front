import { Response } from './Response';

export const TOKEN_KEY = "userInfoWeb";

export const isAuthenticated = (): boolean => {
  const json: any = localStorage.getItem(TOKEN_KEY) || 'null';
  const obj: Response = JSON.parse(json);
  return obj ? !!obj.token : false;
};

export const getUser = (): Response => {
  const json: any = localStorage.getItem(TOKEN_KEY);
  const obj: Response = JSON.parse(json);
  return obj;
};

export const signIn = (token: Response) => {
  let jsonAux: any = JSON.stringify(token);
  localStorage.setItem(TOKEN_KEY, jsonAux);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};