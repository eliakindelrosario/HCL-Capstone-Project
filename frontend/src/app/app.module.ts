import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Required

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

import { Routes, RouterModule } from '@angular/router';
// Configure routing
const routes: Routes = [
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    RouterModule.forRoot(routes), // setup routing
    BrowserModule,
    HttpClientModule, // Required to fetch data from database
  ],
  providers: [ProductService], // Add service here to allow injection into other parts of the applications
  bootstrap: [AppComponent],
})
export class AppModule {}
