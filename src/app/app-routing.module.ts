import { LoginComponent } from './login/login.component';
import { FullWidthPicsComponent } from './set-template/full-width-pics/full-width-pics.component';
import { FullSliderComponent } from './set-template/full-slider/full-slider.component';
import { SetTemplateComponent } from './set-template/set-template.component';
import { BigPicsComponent } from './set-template/big-pics/big-pics.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { PageSiteComponent } from './page-site/page-site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/login'},
  { path: 'login', component: LoginComponent},
  { path: 'pages', component: PageSiteComponent},
  { path: 'addPage', component: AddNewPageComponent},
  { path: 'setting', component: SetTemplateComponent, children: [
    { path: '', pathMatch: 'full', redirectTo:'/pages'},
    { path: 'bigPics', component: BigPicsComponent},
    { path: 'fullSlider', component: FullSliderComponent},
    { path: 'fullWidthPics', component: FullWidthPicsComponent}

  ]},
  { path:'**', redirectTo:'/pages'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
