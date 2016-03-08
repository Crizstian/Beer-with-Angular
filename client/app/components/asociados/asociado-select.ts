import {Component,Output,EventEmitter,Inject} from 'angular2/core';
import {Observable}           from 'rxjs/Observable';
import {Observer}             from 'rxjs/Observer';
import {dispatcher,state}     from '../../logic/newStateDispatcher';
import {AppState}             from '../../logic/AppState';
import {Action,AsociadoActions,
        stateAction}          from '../../logic/Actions';
import {AsociadoService}      from '../../services/asociado.service';

@Component({
  selector : 'asociado-select',
  template : `
  <select #sel (change)="select.emit(sel.value)">
    <option [value]="0">Seleccionar Todos</option>
    <option [value]="asociado.id" *ngFor="#asociado of getAsociados | async">{{asociado.nombre}}</option>
  </select>`
})
export class AsociadoSelect {

  @Output() select = new EventEmitter();

  constructor(
              private _asociadoService:AsociadoService,
              @Inject(dispatcher) private _dispatcher: Observer<Action>,
              @Inject(state) private _state: Observable<AppState>
            ) {}


  ngOnInit(){
    this.select.emit(0);
    this._dispatcher.next(new AsociadoActions.Action({
      type: stateAction.REQUEST_DATA,
      json: this._asociadoService.getAll()
    }));
  }

  get getAsociados() {
    return this._state.map(s => {return s;});
  }


}
