import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Required

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Required
  ],
  providers: [ProductService], // Add service here to allow injection into other parts of the applications
  bootstrap: [AppComponent],
})
export class AppModule {}
