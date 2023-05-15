import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      imagen:['', [Validators.required]],
      titulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      subtitulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
    })
  }

  ngOnInit() {}

  get Imagen(){
    return this.form.get("imagen");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Subtitulo(){
    return this.form.get("subtitulo");
  }


  get ImagenInvalid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get SubtituloInvalid(){
    return this.Subtitulo?.touched && !this.Subtitulo?.valid;
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
