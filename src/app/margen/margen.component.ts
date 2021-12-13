import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-margen',
  templateUrl: './margen.component.html',
  styleUrls: ['./margen.component.css']
})
export class MargenComponent implements OnInit {

  formularioMargen: FormGroup;

  constructor(public formulario:FormBuilder, private CalculadoraService: CalculadoraService) {
    this.formularioMargen = this.formulario.group({
      costo:[],
      precioVenta:[],
      utilidad:[],
      margen:[]
    })
   }

  ngOnInit(): void {


  }

  calcularMargen(){
    var costo = this.formularioMargen.get('costo')?.value;
    var precioVenta = this.formularioMargen.get('precioVenta')?.value;

    this.CalculadoraService.createMargen(costo,precioVenta).subscribe((response: any) => {
      console.log(response);
      this.formularioMargen.controls['utilidad'].setValue(response.data.utilidad);
      this.formularioMargen.controls['margen'].setValue(response.data.margenAux);
    });
  };
}
