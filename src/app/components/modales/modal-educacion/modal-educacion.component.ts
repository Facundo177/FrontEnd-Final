import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      texto:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      logoEdu:['', [Validators.required]],
      tituloEdu:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      infoEdu:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      textoBtn:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      imgBtn:['', [Validators.required]],
      urlBtn:['', [Validators.required]],
    })
  }

  ngOnInit() {}

  get Titulo(){
    return this.form.get("titulo");
  }

  get Texto(){
    return this.form.get("texto");
  }

  get LogoEdu(){
    return this.form.get("logoEdu");
  }

  get TituloEdu(){
    return this.form.get("tituloEdu");
  }

  get InfoEdu(){
    return this.form.get("infoEdu");
  }

  get TextoBtn(){
    return this.form.get("textoBtn");
  }

  get ImgBtn(){
    return this.form.get("imgBtn");
  }

  get UrlBtn(){
    return this.form.get("urlBtn");
  }


  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get TextoInvalid(){
    return this.Texto?.touched && !this.Texto?.valid;
  }

  get LogoEduInvalid(){
    return this.LogoEdu?.touched && !this.LogoEdu?.valid;
  }

  get TituloEduInvalid(){
    return this.TituloEdu?.touched && !this.TituloEdu?.valid;
  }

  get InfoEduInvalid(){
    return this.InfoEdu?.touched && !this.InfoEdu?.valid;
  }

  get TextoBtnInvalid(){
    return this.TextoBtn?.touched && !this.TextoBtn?.valid;
  }

  get ImgBtnInvalid(){
    return this.ImgBtn?.touched && !this.ImgBtn?.valid;
  }

  get UrlBtnInvalid(){
    return this.UrlBtn?.touched && !this.UrlBtn?.valid;
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
