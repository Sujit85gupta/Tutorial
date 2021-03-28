import { Component,OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  constructor(private user:UserServiceService) {}
    data1=[];
    ngOnInit(){  
    this.user.getData().subscribe((data)=>{
    this.data=data;
    })
    
  
  }

}
