import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { ModulesModule } from './modules/modules.module';
import { FloatingSquaresDirective } from './core/directives/floating-square.directive';

@NgModule({
  declarations: [
    AppComponent,
    FloatingSquaresDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
