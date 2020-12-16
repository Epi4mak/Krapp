import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent implements OnInit {
  model = {
    id: 0,
    name: "",
    date: 0,
    price: 0
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  addItem() {
    this.router.navigate(["/models/:"], {
      queryParams: {
        "id": this.model.id,
        "name": this.model.name,
        "date": this.model.date,
        "price": this.model.price,
      }
    })
  }
}
