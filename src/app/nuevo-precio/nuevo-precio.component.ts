import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-nuevo-precio',
  templateUrl: './nuevo-precio.component.html',
  styleUrls: ['./nuevo-precio.component.css']
})
export class NuevoPrecioComponent implements OnInit {

  formularioPrecio: FormGroup;

  constructor(public formulario:FormBuilder, private CalculadoraService: CalculadoraService) { 
    this.formularioPrecio = this.formulario.group({
      costo:[],
      margen:[],
      nuevoCosto:[],
      iva:[],
      costoIva:[]
    })
  }

  ngOnInit(): void {
    console.log("El componente se ha inicializado");
  }

  calcular(){
    var costo = this.formularioPrecio.get('costo')?.value;
    var margen = this.formularioPrecio.get('margen')?.value;
    var iva = this.formularioPrecio.get('iva')?.value;
    
    this.CalculadoraService.createNuevoPrecio(costo,margen,iva).subscribe((response: any) => {
      console.log(response);
      this.formularioPrecio.controls['nuevoCosto'].setValue(response.data.nuevoprecio);
      this.formularioPrecio.controls['costoIva'].setValue(response.data.precioiva);
    });
  };
}
