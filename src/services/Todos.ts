import BaseApi from './BaseApi';
import Config from './Config';

const {tasks} = Config.END_POINTS;

export function onCreate(params: any, callback: Function) {
  return BaseApi.post(tasks, params, callback);
}

export function onUpdate(params: any, callback: Function) {
  return BaseApi.put(`${tasks}/${params.id}`, params, callback);
}

export function onDelete(id: number, callback: Function) {
  return BaseApi.delete(`${tasks}/${id}`, callback);
}

export function getTasks(callback: Function) {
  return BaseApi.get(tasks, callback);
}
