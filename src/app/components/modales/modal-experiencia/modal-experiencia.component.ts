import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      texto:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      experiencia:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
    })
  }

  ngOnInit() {}

  get Titulo(){
    return this.form.get("titulo");
  }

  get Texto(){
    return this.form.get("texto");
  }

  get Experiencia(){
    return this.form.get("experiencia");
  }


  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get TextoInvalid(){
    return this.Texto?.touched && !this.Texto?.valid;
  }

  get ExperienciaInvalid(){
    return this.Experiencia?.touched && !this.Experiencia?.valid;
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
