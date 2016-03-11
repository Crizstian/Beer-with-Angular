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
declare var owlCarousel:any;

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
  identifier:string;
  actual:string;
  imagenes:string[] = [];
  ant:string;

  constructor(
    private _router: Router,
    private _routeParams:RouteParams,
    private _asociadoService:AsociadoService,
    private _logger:Logger,
    private _elementRef: ElementRef
  ) {}

  ngOnInit() {
    // jQuery(this._elementRef.nativeElement).foundation();
    this.id = this._routeParams.get('id');
    this.asociado = this._asociadoService.getAll().filter(item => item.id == this.id)[0];
    this.imagenes.push(this.asociado.logo,...this.asociado.imagenes);
    this.image = this.imagenes[0];
    this.quantity = this._asociadoService.getAll().length;
    this.identifier = `http://cerarmich.org/#/asociados/${this.id}`;
    this.asociados = this.getRandom();
  }

  ngAfterViewInit(){
    jQuery('html, body').animate({
        scrollTop: jQuery("#asociados").offset().top
    }, 2500);

    jQuery("#owl-demo").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      // stopOnHover : true,
      navigation:true,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
    });
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
    return this._asociadoService.getAll()
                         .filter(
                           (item) => item.id == this.numeros.filter(n => n == item.id)[0]);
  }

  changeNext(){
    const actual = this.imagenes.indexOf(this.image);
    if((actual+1) == this.imagenes.length)
      this.image = this.imagenes[0];
    else
      this.image = this.imagenes[actual + 1];
  }
  changeAnt(){
    const actual = this.imagenes.indexOf(this.image);
    if((actual-1) == -1)
      this.image = this.imagenes[this.imagenes.length - 1];
    else
      this.image = this.imagenes[actual - 1];
  }

}
