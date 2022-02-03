import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinklistComponent } from './pages/linklist/linklist.component';
import { IdeasComponent } from './pages/ideas/ideas.component';


const routes: Routes = [
  {path: 'linklist', component: LinklistComponent},
  {path: 'ideas', component: IdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
