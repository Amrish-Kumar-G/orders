import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import ordersdata from './orderlist.json';
interface Orders{
  product_name: String;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class OrdersComponent implements OnInit {

  constructor() { }
  orderlists:Orders[]=ordersdata;

  ngOnInit(): void {
  }

}
