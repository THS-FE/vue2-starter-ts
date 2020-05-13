import request from '@/utils/request';
import { api } from './config';


export function login(params: { userName: string; password: string }) {
  return request.get(api.login, { params });
}

export function logout(token: string) {
  return request.get(api.login, { params: { token } });
}
