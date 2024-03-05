import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { GameControlComponent } from './bindit/game-control/game-control.component';
import { OddComponent } from './bindit/odd/odd.component';
import { EvenComponent } from './bindit/even/even.component';



@NgModule({
  declarations: [
    ExercisesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExercisesComponent
  ]
})
export class ExercisesModule { }
