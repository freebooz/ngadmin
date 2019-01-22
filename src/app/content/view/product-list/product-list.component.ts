import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  url = 'http://119.28.180.72:3000/product/list';

  constructor(private http: HttpClient) { }

  getproduct() {
    
    this.http.get(this.url).subscribe(
      res => {
        console.log(res['data']);
        alert(JSON.stringify(res));
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
