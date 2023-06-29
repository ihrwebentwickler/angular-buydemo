import {Component} from '@angular/core';

import {BasketService} from "../../../shared/services/basket/basket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {
  totalQuantity: number = 0;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.basketService.getBasketProductsCount().subscribe(count => {
      this.totalQuantity = count;
    });
  }
}
