import {Cervecero}       from '../models/cervecero';

import {AsociadoService} from '../services/asociado.service';
import {Observable}      from 'rxjs/Observable';

// ============================================================================

export const networkAction = {
  REQUEST_ALL_DATA     : 'REQUEST_ALL_DATA',
  REQUEST_SAVE_DATA    : 'REQUEST_SAVE_DATA',
  REQUEST_DELETE_DATA  : 'REQUEST_DELETE_DATA',
  REQUEST_UPDATE_DATA  : 'REQUEST_UPDATE_DATA',
  REQUEST_GET_ONE_DATA : 'REQUEST_GET_ONE_DATA',
  RECEIVE_DATA         : 'RECEIVE_DATA'
}

export const stateAction = {
  ADD_DATA    : 'ADD_DATA',
  UPDATE_DATA : 'UPDATE_DATA',
  DELETE_DATA : 'DELETE_DATA',
  REQUEST_DATA: 'REQUEST_DATA',
  RECEIVE_DATA: 'RECEIVE_DATA'
}

// ============================================================================

export module AsociadoActions{

  interface Data {
    service?:string;
    type?:string;
    asociado?:Cervecero
    id?:string;
    json?:Array<any>;
    err?: string
  }

  export class Action {
    constructor(public action:Data){}
  }
}

type ActionCategory = AsociadoActions.Action;

// ============================================================================

export type Action = ActionCategory;
