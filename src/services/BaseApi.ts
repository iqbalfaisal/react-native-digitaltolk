import axios from 'axios';
import {store} from '../store';
import {SET_LOADING_STATE} from '../store';
import {RenderError} from '../utils';
import Config from './Config';

const baseURL = Config.ROOT_URL;

class BaseApi {
  static setDefaults() {
    const d = axios.defaults;
    d.baseURL = baseURL;
    d.headers.common.Authorization =
      'Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK';
    d.headers.post['Content-Type'] = 'application/json';
    d.headers.post.Accept = 'application/json';
  }

  static handleStatus(callback: Function, response: any) {
    console.log(response);

    const result = response.data;
    if (response.status !== 200) {
      this.handleException(response);
    } else {
      this.handleResponse(callback, result);
    }
  }

  static transformResponse() {
    return {
      transformResponse: [
        function (data: any) {
          return data ? JSON.parse(data) : {};
        },
      ],
    };
  }

  static handleException(ex: Error) {
    store.dispatch({type: SET_LOADING_STATE, loading: false});
    RenderError(ex.message);
  }

  static handleResponse(callback: Function, response: any) {
    store.dispatch({type: SET_LOADING_STATE, loading: false});
    callback(response);
  }

  static async get(api: string, callback: Function) {
    store.dispatch({type: SET_LOADING_STATE, loading: true});

    await axios
      .get(api)
      .then(response => {
        this.handleStatus(callback, response);
      })
      .catch(e => {
        this.handleException(e);
      });
  }

  static async post(api: string, params: any, callback: Function) {
    store.dispatch({type: SET_LOADING_STATE, loading: true});

    await axios
      .post(api, params)
      .then(response => {
        this.handleStatus(callback, response);
      })
      .catch(e => {
        this.handleException(e);
      });
  }

  static async put(api: string, params: any, callback: Function) {
    store.dispatch({type: SET_LOADING_STATE, loading: true});

    await axios
      .put(api, params)
      .then(response => {
        this.handleStatus(callback, response);
      })
      .catch(e => {
        this.handleException(e);
      });
  }

  static async delete(api: string, callback: Function) {
    store.dispatch({type: SET_LOADING_STATE, loading: true});

    await axios
      .delete(api)
      .then(response => {
        this.handleStatus(callback, response);
      })
      .catch(e => {
        this.handleException(e);
      });
  }
}

export default BaseApi;
