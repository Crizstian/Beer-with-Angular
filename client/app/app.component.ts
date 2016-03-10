import {Component,ElementRef,Inject}           from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,
        RouterOutlet  }                 from 'angular2/router';
import {HeaderCompnt}                   from './components/header/header.compnt';
import {FooterCompnt}                   from './components/footer/footer.compnt';
import {HomeCompnt}                     from './components/home/home.compnt';
import {AsociadosCompnt}                from './components/asociados/asociados.compnt';
import {ContactCompnt}                  from './components/contact/contact.compnt';
import {NosotrosCompnt}                 from './components/nosotros/nosotros.compnt';
import {AsociadoViewCompnt}             from './components/asociados/asociado-view.compnt';
import {AsociadoService}                from './services/asociado.service';
import {Logger}                         from './services/Logger.service';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector    : 'my-app',
  templateUrl : 'app/app.html',
  directives: [HeaderCompnt,RouterOutlet,FooterCompnt],
  providers : [AsociadoService,Logger]
})
@RouteConfig([
  {path: '/',          as: 'Home',      component: HomeCompnt, useAsDefault: true},
  {path: '/asociados', as: 'Asociados', component: AsociadosCompnt},
  {path: '/asociados/:id', as: 'Asociado', component: AsociadoViewCompnt},
  {path: '/nosotros',  as: 'Nosotros',  component: NosotrosCompnt},
  {path: '/contacto',  as: 'Contacto',  component: ContactCompnt}
])
export class AppComponent{
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).foundation();
  }
}
