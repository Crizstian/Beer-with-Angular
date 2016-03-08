import {Pipe} from 'angular2/core';

@Pipe({
  name : 'searchAsociado'
})
export class SearchAsociado{
  transform(value, [id]){
    return value.filter((item) => {
      if (item.id == id) return true;
      else if (0 == id) return true;
    });
  }
}
