import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { APP_ROUTE } from './routes';
import { NavBarModule } from './shared/navbar';
import { HomepageModule } from './page/homepage';
import { HttpClientModule } from '@angular/common/http';
import { ComponentPageTitle } from './page/page-title/page-title';
import { ComponentSidenavModule } from './page/component-sidenav';
import { DemoItems } from './shared/app-items/app-items';
import { ComponentViewerModule } from './page/component-viewer/component-viewer';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  imports: [
    ComponentViewerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
    ComponentSidenavModule,
    NavBarModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [
    DemoItems,
    ComponentPageTitle
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
