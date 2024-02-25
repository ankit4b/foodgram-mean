import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cart!: Cart;
  amount: number = 10;
  deliveryCharges: number = 10;
  paymentData: any = {};

  addressData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pincode: '',
    landmark: '',
    city: '',
    state: '',
  };

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    window.paypal
      .Buttons({
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            console.log(details);
            if (details.status === 'COMPLETED') {
              this.paymentData.transactionID = details.id;
              alert(`Transaction id : ${this.paymentData.transactionID}`);
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render(this.paymentRef.nativeElement);
  }

  placeOrder() {
    Swal.fire(
      'Thank You for your order...',
      'Payment is not yet integrated',
      'success'
    );
  }
}
