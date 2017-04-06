import { SetTemplateComponent } from './set-template/set-template.component';
import { BigPicsComponent } from './set-template/big-pics/big-pics.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { PageSiteComponent } from './page-site/page-site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/pages'},
  { path: 'pages', component: PageSiteComponent},
  { path: 'addPage', component: AddNewPageComponent},
  { path: 'setting', component: SetTemplateComponent, children: [
    { path: 'bigPics', component: BigPicsComponent}
  ]},
  { path:'**', redirectTo:'/pages'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
