import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ex-qlsp',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header bg-dark text-white">Add product</div>
        <div class="card-body">
          <div class="form-group">
            <p>Id product</p>
            <input class="form-control" [(ngModel)]="product.id"/>
          </div>
          <div class="form-group">
            <p>name product</p>
            <input class="form-control" [(ngModel)]="product.name"/>
          </div>
          <div class="form-group">
            <p>price</p>
            <input class="form-control" [(ngModel)]="product.price"/>
          </div>

          <div class="card-footer text-left">
            <button class="btn btn-danger" (click)="addProduct()">Add product</button>
          </div>
        </div>

        <div class='card mt-2'>
          <div class="card-header bg-dark text-white">List Product</div>
          <table class="table">
            <thead>
            <tr>
              <th>Id product</th>
              <th>Image</th>
              <th>name product</th>
              <th>price</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr [ngClass]="{'bg-dark': (index + 1)% 2 === 0 , 'bg-success': ( index +1) % 2 !== 0}" *ngFor="let product of arrProduct ; let index = index;
            ">
              <td>{{product.id}}</td>
              <td><img [src]='product.image' alt='...'></td>
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  `
})

export class Exercise2Component implements OnInit {

  product: Product = {id: '', price: 0, name: '', image: '',}


  arrProduct: Product[] = [
    {id: '1', name: 'sheep', price: 10, image: 'https://i.pravatar.cc?u=AAA'},
    {id: '2', name: 'sheep2', price: 10, image: 'https://i.pravatar.cc?u=BBB'},
    {id: '3', name: 'sheep3', price: 10, image: 'https://i.pravatar.cc?u=CCC'},
    {id: '4', name: 'sheep4', price: 10, image: 'https://i.pravatar.cc?u=DDD'},
  ]

  constructor() {
  }

  ngOnInit() {
  }

  addProduct() {
    let newProduct = {...this.product, image: `https://i.pravatar.cc?u=${this.product.name}`}

    this.arrProduct.push(newProduct)
  }
}

interface Product {
  id: string,
  name: string,
  price: number,
  image: string,
}
