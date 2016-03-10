import {Component,ElementRef,
        Inject,Input}         from 'angular2/core';
import {RouteParams, Router,
        RouterLink}           from 'angular2/router';
import {AsociadoService}      from '../../services/asociado.service';
import {Logger}               from '../../services/Logger.service';
import {Cervecero}            from '../../models/cervecero';
import {Disqus}               from '../disqus/disqus.compnt';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector    : 'asociado-view',
  directives  : [RouterLink,Disqus],
  templateUrl : 'app/components/asociados/templates/asociado-view.html'
})
export class AsociadoViewCompnt{

  id:string;
  asociado:Cervecero;
  image:string;
  asociados:Cervecero[] = [];
  numeros:number[] = [];
  quantity:number = 0;

  constructor(
    private _router: Router,
    private _routeParams:RouteParams,
    private _asociadoService:AsociadoService,
    private _logger:Logger,
    private _elementRef: ElementRef
  ) {}

  ngOnInit() {
    jQuery(this._elementRef.nativeElement).foundation();
    this.id = this._routeParams.get('id');
    this.asociado = this._asociadoService.getAll().filter(item => item.id == this.id)[0];
    this.image = this.asociado.logo;
    this.quantity = this._asociadoService.getAll().length;
  }

  setImage(image:string){
    this.image = image;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandom(){
    for(let i of [1,2,3,4,5]){
      let n = this.getRandomInt(1, this.quantity);
      if(n != this.id)
        this.numeros.push(n);
    }
    this.asociados = this._asociadoService.getAll()
                         .filter(
                           (item) => item.id == this.numeros.filter(n => n == item.id)[0]);
  }

}
