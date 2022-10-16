import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/appservice.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  constructor() { }
  title:string="Gadgeon";
  btnclick(){
    const service=new MyService();
    service.onClickBtn(this.title);
  }

  ngOnInit(): void {
  }

}
