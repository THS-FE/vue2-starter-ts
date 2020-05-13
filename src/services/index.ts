import request from '@/utils/request';
import { api } from './config';

/**
 * 登录
 */
function login(params: { userName: string; password: string }) {
  return new Promise((resolve, reject) => {
    try {
      resolve(request.post(api.login, params));
    } catch (err) {
      reject(err);
    }
  });
}
export default login;
