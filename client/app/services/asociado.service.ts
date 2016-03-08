import {Injectable}  from 'angular2/core';
import {Cervecero}   from '../models/cervecero';
import {ASOCIADOS}   from './mock-asociado';

@Injectable()
export class AsociadoService{

  constructor() {}

  getAll():Cervecero[]{
    return ASOCIADOS;
  }
}
