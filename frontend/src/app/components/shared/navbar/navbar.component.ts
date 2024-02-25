import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartQuantity = 0;
  constructor(cartService: CartService, private authService: AuthService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  isLoggedIn() {
    // console.log("isLoggedIn status :",this.authService.isLoggedIn())
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
