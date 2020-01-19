import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryBoxComponent } from './history-box/history-box.component';
import { GameBoxComponent } from './game-box/game-box.component'
const routes: Routes = [
  { path: 'results', component: HistoryBoxComponent },
  { path: 'game', component: GameBoxComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HistoryBoxComponent, GameBoxComponent ]