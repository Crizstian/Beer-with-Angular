import {OpaqueToken,provide,Inject} from 'angular2/core';
import {Subject}                    from 'rxjs/Subject';
import {AppState}                   from './AppState';
import {Action}                     from './Actions';
import {Observable}                 from 'rxjs/Observable';
import {BehaviorSubject}            from 'rxjs/subject/BehaviorSubject';
import {asociados}                  from './asociadoReducer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';


const initState         = new OpaqueToken("initState");
const initDriver        = new OpaqueToken("initDriver");
export const dispatcher = new OpaqueToken("dispatcher");
export const state      = new OpaqueToken("state");

const initValue = {
  asociados:[]
}

const drivers = {
  asociado: asociados
}

function configDispatcher(drivers):Observable<Action>{
  return new Subject<Action>(null);
}

function configState(initState: AppState, actions:Observable<Action>,drivers:any): Observable<AppState> {

  const combine = s => ({asociado: s[0]});

  let appState:Observable<AppState> = drivers.asociado(initState.asociados,actions);

  return wrapIntoBehavior(initState, appState);
}


function wrapIntoBehavior(init, obs) {
 const res = new BehaviorSubject(init);
 obs.subscribe(s => {res.next(s)});
 return res;
}


export const stateAndDispatcher = [
  provide(initDriver, {useValue: drivers }),
  provide(initState,  {useValue: initValue }),
  provide(dispatcher, {useFactory: configDispatcher, deps: [new Inject(initDriver)]}),
  provide(state,      {useFactory: configState, deps: [new Inject(initState), new Inject(dispatcher), new Inject(initDriver)]})
];
