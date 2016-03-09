import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector    : 'app-header',
  templateUrl : 'app/components/header/templates/header.html',
  directives: [RouterLink]
})
export class HeaderCompnt{}
