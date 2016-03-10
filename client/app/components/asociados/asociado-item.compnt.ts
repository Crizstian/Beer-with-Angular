import {Component,Input, ElementRef, EventEmitter} from 'angular2/core';
import {RouterLink}           from 'angular2/router';
import {Cervecero}            from '../../models/cervecero';
import {AsociadoModelCompnt}  from './asociado-modal.compnt';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'asociado-item',
  directives : [RouterLink,AsociadoModelCompnt],
  templateUrl: 'app/components/asociados/templates/asociado-item.html'
})
export class AsociadoItemCompnt{

  @Input() asociado;
  
}
