import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
//Input se utiliza configurar la recepcion de datos
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //el decorador ! indica que el valor de esta propiedad pasa del componente padre
  @Input() product: Product | undefined;

  //el decoradot output permite emitir un evento cuando notify cambie de propiedades
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
