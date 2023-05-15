import { Component, OnInit} from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})

export class AcercaComponent implements OnInit {

  persona: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
        {this.persona = data}
      )
  }

  

}


  /*
  acerca: any;
  secciones: any;
  nombreCompleto: any;
  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.acerca = data.acerca;
      this.secciones = data.secciones;
      this.nombreCompleto = data.nombreCompleto;
    })
  }*/

  /*
  export class AcercaComponent implements OnInit {
    persona: persona = new persona("","","");

    constructor(public personaService: PersonaService){}

    ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data})
    }
  }*/