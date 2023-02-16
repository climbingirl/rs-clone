import { IResAuth } from './types/responceTypes';
// import { IUser } from
// import { makeAutoObservable } from 'mobx';
import AuthService from '../controller/AuthService';
import axios from 'axios';
import { API_URL } from './axiosRequsts';
import { IUser } from './types/types';

export default class Store {
  user = {} as IUser;

  isAuth = false;
  

//   constructor() {
//     makeAutoObservable(this);
//   }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  // setLoading(bool: boolean) {
  //   this.isLoading = bool;
  // }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      //console.log(e.response?.data?.message);
      console.log(e);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
     // console.log(e.response?.data?.message);
     console.log(e);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      //console.log(e.response?.data?.message);
      console.log(e);
    }
  }

  async checkAuth() {
    // this.setLoading(true);
    try {
      const response = await axios.get<IResAuth>(`${API_URL}/refresh`, { withCredentials: true });
      console.log(response);

      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      //console.log(e.response?.data?.message);
      console.log(e);
    } 
    // finally {
    //   this.setLoading(false);
    // }
  }
}
