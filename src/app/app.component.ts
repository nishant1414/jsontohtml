import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConvertService } from './convert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataObs: Observable<any[]>;
  data: any[];
  constructor(private service:ConvertService)
  {
    this.dataObs=service.getReport();
    console.log("AppComponent" + this.data);
    this.dataObs.subscribe(d=>{
      this.data = d;

  
    })

    
  }

}
