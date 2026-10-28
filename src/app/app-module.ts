import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoComponent } from './components/segundocomponent/segundocomponent';
import { EventosComponent } from './components/eventoscomponent/eventoscomponent';
import { DirectivasComponent } from './components/directivascomponent/directivascomponent';
import { NumerosEstilosComponent } from './components/numerosestiloscomponent/numerosestiloscomponent';
import { TestComponent } from './components/test-component/test-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    SegundoComponent,
    EventosComponent,
    DirectivasComponent,
    NumerosEstilosComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
