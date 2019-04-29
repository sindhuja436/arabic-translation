import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { ArabicComponent } from './arabic/arabic.component';
import { LearnComponent } from './learn/learn.component';
const routes: Routes = [
  { path: '', component: EnglishComponent },
  { path:'learn',component:LearnComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
