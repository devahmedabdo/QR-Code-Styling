import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './views/generate/generate.component';
import { HistoryComponent } from './views/history/history.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generate', component: GenerateComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
