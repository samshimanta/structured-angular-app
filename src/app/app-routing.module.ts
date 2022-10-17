import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '' , component: ContentLayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module')
        .then(m => m.AboutModule) 

      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module')
        .then(m => m.ContactModule) 

      }
    ]
  },
  // {
  //   path:'about' ,
  //   loadChildren: () => import('./modules/about/about.module')
  //   .then(m => m.AboutModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
