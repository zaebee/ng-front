import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TariffDataService } from './tariff-data.service';
import { ApiService } from './api.service';
import { OrderByPipe } from './order-by.pipe';

import { ShoplistComponent } from './shoplist/shoplist.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoplistComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TariffDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
