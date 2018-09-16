import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { ClapFabComponent } from './clap-fab/clap-fab.component';
import { CounterBubbleComponent } from './counter-bubble/counter-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    ClapFabComponent,
    CounterBubbleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
