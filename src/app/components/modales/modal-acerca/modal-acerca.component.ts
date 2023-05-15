import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-acerca',
  templateUrl: './modal-acerca.component.html',
  styleUrls: ['./modal-acerca.component.css']
})
export class ModalAcercaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      foto:['', [Validators.required]],
      nombre:['', [Validators.required, Validators.pattern('[a-zA-ZñÑ ]*')]],
      titulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      informacion:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
    })
  }

  ngOnInit() {}

  get Foto(){
    return this.form.get("foto");
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Informacion(){
    return this.form.get("informacion");
  }


  get FotoInvalid(){
    return this.Foto?.touched && !this.Foto?.valid;
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get InformacionInvalid(){
    return this.Informacion?.touched && !this.Informacion?.valid;
  }



  onEnviar(event: Event){
    event.preventDefault;

    if (this.form.valid){
      alert("Todo salio bien ¡Enviar formulario!")
    } else{
      this.form.markAllAsTouched();
    }
  }


}
