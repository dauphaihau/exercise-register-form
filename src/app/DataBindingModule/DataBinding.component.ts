import {Component, OnInit} from '@angular/core';

@Component({ // View
  selector: 'app-data-binding',
  template: `
    <div class="container">
      <h1 class="display-4">Data binding</h1>
      <h3 class="text-danger">One way binding </h3>
      <p>1. Interpolation (Binding dữ liệu từ models -> view thông qua thuộc tính với dấu cặp ngoặc nhọn ) ==> Dùng cho
        phần innerHTML của thẻ:</p>
      <p>title: {{title}}</p>
      <p>2. Property binding (binding dựa trên thuộc tính của thẻ thông qua [] ) => Thường dùng cho thẻ input</p>
      <div [innerHTML]="title + ', also content of div'"></div>
      <input [value]="title">


      <hr>
      <h3 class="text-danger mt-5">Event binding</h3>
      <input class="form-control w-25" #tagInput /> template variable <br />
      <button class="btn btn-success" (click)="changeTitle(tagInput.value)">Change title</button>


      <h3 class="text-danger mt-5">Two binding (Binding dữ liệu 2 chiều tự động) </h3>
      <input class="form-control" [(ngModel)]="title"/>
      <table class="table">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>image</th>
          <th>price</th>
          <th>quantity</th>
        </tr>
        </thead>

        <tbody>
        <tr *ngFor="let product of arrProduct">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td><img [src]="product.image" width='50' height='50' alt="..."></td>
          <td>{{product.price}}</td>
          <td><input class="form-control" [(ngModel)]="product.quantity"></td>
          <td>{{product.price * product.quantity}}</td>
        </tr>
        </tbody>
      </table>
    </div>`,
})


export class DataBindingComponent implements OnInit { // Modal

  title: string = 'this is props'; // An haven't state like React -> use props instead state

  arrProduct: Product[] = [
    {id: '1', name: 'sheep', price: 10, image: 'https://picsum.photos/id/1/200/200', quantity: 10},
    {id: '2', name: 'fist', price: 10, image: 'https://picsum.photos/id/1/200/200', quantity: 19},
    {id: '3', name: 'bird', price: 10, image: 'https://picsum.photos/id/1/200/200', quantity: 12}
  ];

  constructor() {
  }

  // Event binding
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit() {
  }
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
