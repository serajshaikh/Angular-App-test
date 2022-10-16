import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.css']
})
export class DemoPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Mumbai"
  today=Date();
  user={
    id:100,
    name:"Nilesh Bhaskar",
    dob:"01/05/1998",
    salary:40000
  }

}
