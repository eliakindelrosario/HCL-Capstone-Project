import { Component, OnInit } from '@angular/core';
import { SalesPerson } from 'src/app/model/sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'jdoe@example.com', 42000),
    new SalesPerson('Karen', 'Smith', 'ksmith@example.com', 120000),
    new SalesPerson('Louse', 'Griffin', 'lgriffin@example.com', 66000),
  ];
  constructor() {}

  ngOnInit(): void {}
}
