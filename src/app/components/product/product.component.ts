import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
   data=false
  ngOnInit(): void {
    setTimeout(() => {
       this.data=true
    }, 1000);
  }
}
