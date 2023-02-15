import $api from '../model/axiosRequsts';
import { AxiosResponse } from 'axios';
import { IResAuth } from '../model/types/responceTypes';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IResAuth>> {
    return $api.post<IResAuth>('/login', { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<IResAuth>> {
    return $api.post<IResAuth>('/registration', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
