import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MixRoutingModule } from './mix.routing.module'

import { MixComponent } from './mix.component'
import { ComponComponent } from './compon/compon.component'
import { MetadataComponent } from './metadata/metadata.component'
import { TplComponent } from './tpl/tpl.component'


@NgModule({
  imports: [
    CommonModule,
    MixRoutingModule
  ],
  declarations: [
    MixComponent,
    ComponComponent,
    MetadataComponent,
    TplComponent
  ]
})

export class MixModule { }