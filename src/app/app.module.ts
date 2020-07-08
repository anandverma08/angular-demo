import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { UserServiceService } from './services/user-service.service';
import { ParentComponent } from './components/parent/parent.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms'
import { CommonModule }from '@angular/common';
import { HostDirectiveComponent } from './components/host-directive/host-directive.component';
import { UppercaseDirective } from './directive/uppercase.directive';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component'
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GameComponent,
    HomeComponent,
    UserDetailComponent,
    UserComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    HostDirectiveComponent,
    UppercaseDirective,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ ConfirmationGuard, UserServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
