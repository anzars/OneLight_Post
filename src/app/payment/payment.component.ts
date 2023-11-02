import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { PostService } from '../post-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private postservice:PostService, private stripeService:StripeService ){

  }
  paymentform:FormGroup
  @ViewChild(StripeCardNumberComponent) card: StripeCardNumberComponent;

public cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191',
        },
      },
    },
  };

public elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  ngOnInit(): void {
      this.paymentform =new FormGroup({
        name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        amount: new FormControl('',[Validators.required,Validators.pattern("[0-9]+")])
      });
  }

  submitpayment(){
    let payload={
      amount: this.paymentform.get('amount').value,
      email: this.paymentform.get('email').value
    }
    this.postservice.createIntent(payload).pipe(switchMap((res)=>{
      console.log(res);
      return this.stripeService.confirmCardPayment(res.client_secret,{
        payment_method: {
          card: this.card.element,
          billing_details: {
            name: this.paymentform.get('name').value,
          },
        },
      });

    })).subscribe((result)=>{
      console.log(result);
      if (result.paymentIntent.status ==='succeeded'){
        alert('Payment Successful');
      }
      else {
        if(result.error)
        {alert(result.error.message);}
      }


    });
   
  }

}
