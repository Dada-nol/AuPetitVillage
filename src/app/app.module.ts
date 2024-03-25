import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CardComponent,
    SortByPricePipe,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
