import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopState } from './modules/shop/shop.state';
import { PopupAddToCartModule } from './modules/shop/popup-add-to-cart/popup-add-to-cart.module';
import { PopupAddToCartComponent } from './modules/shop/popup-add-to-cart/popup-add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([ShopState]),
    PopupAddToCartModule
  ],
  providers: [],
  entryComponents: [
    PopupAddToCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
