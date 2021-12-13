import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-costo-ideal',
  templateUrl: './costo-ideal.component.html',
  styleUrls: ['./costo-ideal.component.css']
})
export class CostoIdealComponent implements OnInit {

  formularioIdeal: FormGroup

  constructor(public formulario:FormBuilder, private CalculadoraService: CalculadoraService) { 
    this.formularioIdeal = this.formulario.group({
      margen:[],
      precioVenta:[],
      costoIdeal:[]
    })
  }

  ngOnInit(): void {
  }
  calcularIdeal(){
    var margen = this.formularioIdeal.get('margen')?.value;
    var precioVenta = this.formularioIdeal.get('precioVenta')?.value;

    this.CalculadoraService.createCosto(margen, precioVenta).subscribe((response: any) => {
      console.log(response);
      this.formularioIdeal.controls['costoIdeal'].setValue(response.data.costoideal);
    });
  };
}
