import {Component,Input, ElementRef, EventEmitter} from 'angular2/core';
import {Cervecero}            from '../../models/cervecero';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'asociado-modal',
  templateUrl: 'app/components/asociados/templates/asociado-item.html'
})
export class AsociadoModelCompnt{

  @Input() asociado;
  @Input() selected;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    jQuery(this._elementRef.nativeElement).foundation();
  }
}
