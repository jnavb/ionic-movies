import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';

import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    MovieDetailsPage,
  ],
  imports: [
  	PipesModule,
    IonicPageModule.forChild(MovieDetailsPage),
  ],
})
export class MovieDetailsPageModule {}
