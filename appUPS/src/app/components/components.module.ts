import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuuComponent } from './menuu/menuu.component';


@NgModule({
  declarations: [MenuuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [MenuuComponent]
})
export class ComponentsModule { }
