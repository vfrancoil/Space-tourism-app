import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DestinationComponent } from './component/destination/destination.component';
import { CrewComponent } from './component/crew/crew.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path : 'home', component:HomeComponent, data: {animation:'isHome'}},
      {path : '', redirectTo:'home', pathMatch:'full'},
      {path : 'destination', component:DestinationComponent, data: {animation:'isDestination'}},
      {path : 'crew', component:CrewComponent, data: {animation:'isCrew'}},
      {path : 'technology', component:TechnologyComponent, data: {animation:'isTechnology'}},
      {path : '**', redirectTo:'', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
