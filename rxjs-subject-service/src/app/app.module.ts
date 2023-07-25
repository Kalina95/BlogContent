import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ChildOneComponentComponent } from './main-component/child-one-component/child-one-component.component';
import { ChildTwoComponentComponent } from './main-component/child-two-component/child-two-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ChildOneComponentComponent,
    ChildTwoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
