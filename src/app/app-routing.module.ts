import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { UserServiceService } from './services/user-service.service';
import { ParentComponent } from './components/parent/parent.component';
import { HostDirectiveComponent } from './components/host-directive/host-directive.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path: "game", component : GameComponent
  },
  {
    path: "gameLandingPage", component : LandingPageComponent
  },
  {
    path: "home", component : HomeComponent
  },
  {
    path: "subject", component : ParentComponent
  },
  {
    path: "directive", component : HostDirectiveComponent
  },
  {
    path: "user", component : UserComponent, canDeactivate : [ ConfirmationGuard ]
  },
  {
    path: "form", component : FormComponent
  },
  {
    path: "reactiveForm", component : ReactiveFormComponent
  },
  {
    path: "**", component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
