import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main/main.component'
import { ListComponent }        from './list/list.component';
import { IntroComponent }       from './introduction/intro.component'
import { ModelComponent }       from './model/model.component'
import { DirectiveComponent }   from './directive/directive.component'
import { DataBindingComponent } from './dataBinding/dataBinding.component';
import { ServiceComponent } from './service/service.component';
import { InjectionComponent } from './injection/injection.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
 	{ path:'main',component:MainComponent },
 	{ path:'list',component:ListComponent },
 	{ path:'intro',component:IntroComponent },
 	{ path:'model',component:ModelComponent },
 	{ path:'directive',component:DirectiveComponent },
 	{ path:'dataBinding',component:DataBindingComponent },
 	{ path:'service',component:ServiceComponent },
 	{ path:'injection',component:InjectionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}