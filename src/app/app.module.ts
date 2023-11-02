import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDisplayComponent } from './post-display/post-display.component';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AnzlibModule } from 'anzlib';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from  '@ngrx/effects'
import * as fromAppreducer from './Store/app-reducer';
import * as appeffects from './Store/app-effects';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { PaymentComponent } from './payment/payment.component';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    PostDisplayComponent,
    CreatePostComponent,
    EditProfileComponent,
    HomeComponent,
    EditPostComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SocialLoginModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    GoogleSigninButtonModule,
    AnzlibModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromAppreducer.appreducer),
    EffectsModule.forRoot(appeffects.autheffects),
    NgxStripeModule.forRoot(environment.stripe.public_key),
    LayoutModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '109457463560-rqcvnejorjf89svk3p3aj8ghgrsv7j3r.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1465212604310413')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
