import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoPrecioComponent } from './nuevo-precio/nuevo-precio.component';
import { MargenComponent } from './margen/margen.component';
import { CostoIdealComponent } from './costo-ideal/costo-ideal.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { CalculadoraService } from './services/calculadora.service';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPrecioComponent,
    MargenComponent,
    CostoIdealComponent,
    VistaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: VistaPrincipalComponent
      },
      {
        path: 'nuevoprecio',
        component: NuevoPrecioComponent
      },
      {
        path: 'margen',
        component: MargenComponent
      },
      {
        path: 'costoideal',
        component: CostoIdealComponent
      }
    ])
  ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
