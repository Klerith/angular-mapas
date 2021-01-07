import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasModule )
  },
  {
    path: '**',
    redirectTo: 'mapas'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
