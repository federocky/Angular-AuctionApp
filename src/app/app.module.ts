import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainDestacadosComponent } from './components/main-destacados/main-destacados.component';
import { MainEnSubastaComponent } from './components/main-en-subasta/main-en-subasta.component';
import { ProductListComponent } from './components/shared/product-list/product-list.component';
import { ProductDetailsComponent } from './components/shared/product-details/product-details.component';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { StoreAuctionShopsComponent } from './components/auction/store-auction-shops/store-auction-shops.component';
import { StoreInfoComponent } from './components/auction/store-info/store-info.component';
import { FilterByShopPipe } from './pipes/filter-by-shop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    MainDestacadosComponent,
    MainEnSubastaComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    StoreAuctionShopsComponent,
    StoreInfoComponent,
    FilterByShopPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
