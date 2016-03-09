import {Component,ElementRef,
        Inject,Input, EventEmitter} from 'angular2/core';
import {AsociadoList}         from './asociado-list.compnt';
import {AsociadoSelect}       from './asociado-select';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'asociados',
  directives : [AsociadoSelect,AsociadoList],
  templateUrl: 'app/components/asociados/templates/asociados.html'
})
export class AsociadosCompnt{

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    jQuery(this._elementRef.nativeElement).foundation();
  }
  
}
