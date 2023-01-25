import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component'
import { FaqComponent } from './main/faq/faq.component';




const routes:Route[]=[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent },
  { path:'about-us',component:AboutUsComponent },
  { path:'contact-us',component:ContactUsComponent },
  { path:'faq',component:FaqComponent },

  { path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule) },
  { path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule) },

  { path:'**',component:PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MainModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
