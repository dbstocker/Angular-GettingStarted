import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard'
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
