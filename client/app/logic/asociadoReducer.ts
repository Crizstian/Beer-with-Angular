import {OpaqueToken,provide,Inject} from 'angular2/core';
import {Subject}                    from 'rxjs/Subject';
import {AppState}                   from './AppState';
import {Observable}                 from 'rxjs/Observable';
import {Cervecero,Contacto}                  from '../models/cervecero';
import {Action,AsociadoActions,networkAction,stateAction} from './Actions';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';


export function asociados(initState: Cervecero[], actions: Observable<Action>): Observable<Cervecero[]> {
  //State is the accumulator && Action is the current value
  return actions.scan((state, action) => {
    if(action instanceof AsociadoActions.Action){
      switch(action.action.type){
        // =============================
        case stateAction.REQUEST_DATA:
          return action.action.json.map(item => asociadosReducer(item,'ADD_DATA'));
        // =============================
        case stateAction.RECEIVE_DATA:
          return state;
        // =============================
      }
    }
  }, initState).share();
}

function asociadosReducer(item:any,type:string) {
  switch(type){
    // =============================
    case stateAction.ADD_DATA:
      const contacto:Contacto = {
        telefono:item.contacto.telefono,
        correo: item.contacto.correo
      }
      return new Cervecero(item.id,item.nombre,item.logo,item.texto,item.imagenes,contacto);
    // =============================
  }
}
