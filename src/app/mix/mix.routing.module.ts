import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MixComponent }         from './mix.component'  
import { ComponComponent }      from './compon/compon.component' 
import { MetadataComponent }      from './metadata/metadata.component' 
import { TplComponent }      from './tpl/tpl.component'  

const mixRoutes:Routes = [
  { 
  	path: 'mix',  
  	component: MixComponent ,
  	children : [
		{ path: 'compon',  component: ComponComponent },
		{ path: 'metadata', component: MetadataComponent },
 		{ path: 'tpl', component: TplComponent },

  	]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(mixRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MixRoutingModule {}