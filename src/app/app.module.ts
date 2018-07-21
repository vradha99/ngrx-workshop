import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './routing.module';
import { CartModule } from './cart/cart.module';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    RoutingModule,
    CartDetailsModule,
    CartModule,
    ProductDetailsModule,
    MatIconModule,
    MatToolbarModule,

    StoreModule.forRoot({ products: reducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
