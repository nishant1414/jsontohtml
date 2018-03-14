import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class ConvertService {
 


  constructor(private http: HttpClient) {}

    getReport(): Observable<any>{
      return  this.http.get("./assets/data/report.json");
    }

  }





