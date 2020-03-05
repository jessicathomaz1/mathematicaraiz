import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssuntoDetailsPage } from './assunto-details';

@NgModule({
  declarations: [
    AssuntoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AssuntoDetailsPage),
  ],
})
export class AssuntoDetailsPageModule {}
