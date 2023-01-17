import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInfotComponent } from './app-infot/app-infot.component';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';

const routes: Routes = [
  { path: '', component: ConverterUiComponent},
  { path: 'info', component: AppInfotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
