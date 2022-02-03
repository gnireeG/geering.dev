import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BurgerIconComponent } from './components/icons/burger-icon/burger-icon.component';
import { LinkIconComponent } from './components/icons/link-icon/link-icon.component';
import { LightbulbIconComponent } from './components/icons/lightbulb-icon/lightbulb-icon.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { LinklistComponent } from './pages/linklist/linklist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BurgerIconComponent,
    LinkIconComponent,
    LightbulbIconComponent,
    NavLinkComponent,
    LinklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }