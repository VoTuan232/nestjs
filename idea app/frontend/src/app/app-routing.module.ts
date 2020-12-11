import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '@app/components/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  { 
    path: 'ideas',  loadChildren: () =>
    import('./features/idea/idea.module').then(
    (m) => m.IdeaModule)
  },
  { path: '**', redirectTo: 'ideas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
