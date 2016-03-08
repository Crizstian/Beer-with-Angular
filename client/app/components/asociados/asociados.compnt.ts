import {Component,ElementRef,
        Inject,Input, OnInit} from 'angular2/core';
import {Router}               from 'angular2/router';
import {Observable}           from 'rxjs/Observable';
import {Observer}             from 'rxjs/Observer';
import {dispatcher,state}     from '../../logic/newStateDispatcher';
import {AppState}             from '../../logic/AppState';
import {Action,AsociadoActions,
        stateAction}          from '../../logic/Actions';
import {AsociadoService}      from '../../services/asociado.service';
import {Logger}               from '../../services/Logger.service';
import {Cervecero}            from '../../models/cervecero';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'asociados',
  templateUrl: 'app/components/asociados/templates/asociados.html'
})
export class AsociadosCompnt{

  asociado_uno:number = 0;

  constructor(
              private _router: Router,
              private _asociadoService:AsociadoService,
              private _logger:Logger,
              private _elementRef: ElementRef,
              @Inject(dispatcher) private _dispatcher: Observer<Action>,
              @Inject(state) private _state: Observable<AppState>
            ) {}


  ngOnInit() {
    jQuery(this._elementRef.nativeElement).foundation();

    this._dispatcher.next(new AsociadoActions.Action({
      type: stateAction.REQUEST_DATA,
      json: this._asociadoService.getAll()
    }));
  }

  get getAsociados() {
    return this._state.map(s => {return s;});
  }

  what(value:any){
    this.asociado_uno = value;
    console.log(this.asociado_uno);
  }

}
