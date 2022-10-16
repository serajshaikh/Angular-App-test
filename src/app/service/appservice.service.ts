import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }
}

export class MyService{

  onClickBtn(title:string){
    alert("hello from"+title)
  }
}
// export default MyService;