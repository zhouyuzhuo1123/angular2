import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule }      from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }     from './app-routing.module';
import { MixModule }            from './mix/mix.module';


import { AppComponent } 		from './app.component';

import { MainComponent } 		from './main/main.component';
import { ListComponent } 		from './list/list.component';
import { IntroComponent } 		from './introduction/intro.component';
import { ModelComponent } 		from './model/model.component';
import { DirectiveComponent }   from './directive/directive.component';
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { ServiceComponent } from './service/service.component';
import { InjectionComponent } from './injection/injection.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MixModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    IntroComponent,
    ModelComponent,
    DirectiveComponent,
    DataBindingComponent,
    ServiceComponent,
    InjectionComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
