import {Injectable}  from 'angular2/core';
import {Http}              from 'angular2/http';
import {Cervecero}   from '../models/cervecero';
import {ASOCIADOS}   from './mock-asociado';
import {Logger}            from './Logger.service';
import {Observable}        from 'rxjs/Observable';

@Injectable()
export class EmailService{

  private baseAPI: string = 'http://cerarmich.org';

  constructor(
      private http: Http,
      private _logger:Logger
    ) {
    }

  send(mail):Observable<any> {
    return this.http.post(`${this.baseAPI}/mail.php`, JSON.stringify(mail))
                    .map(res => res.json())
                    .share();
  }

}
