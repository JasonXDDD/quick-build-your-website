import { BigPicsComponent } from './setTemplate/big-pics/big-pics.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { PageSiteComponent } from './page-site/page-site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/pages'},
  { path: 'pages', component: PageSiteComponent},
  { path: 'addPage', component: AddNewPageComponent},
  { path: 'setting/big-pics', component: BigPicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
