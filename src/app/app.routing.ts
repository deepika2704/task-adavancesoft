import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';

const routes: Routes = [
  { path: '', component: ActionsComponent },
//   {
//     path: 'layout', component: LayoutComponent, canActivate: [AuthGuard],
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'users', loadChildren: './users/users.module#UsersModule' },
//       { path: 'contact', loadChildren: './contact-details/contact-details.module#ContactDetailsModule' },
//       { path: 'photos', loadChildren: './photos/photos.module#PhotosModule' },
//       { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
//       { path: '**', component: PageNotFoundComponent }
//     ]
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
