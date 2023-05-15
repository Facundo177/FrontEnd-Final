import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      texto:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      skill:['', [Validators.required, Validators.pattern('[a-zA-Z0-9().,:;-_çÇºª$%&/\'?¡¿!@¨´<>+ñÑ* ]*')]],
      porcentaje:['', [Validators.required, Validators.max(100), Validators.min(0)]],
      tipo:['', [Validators.required]],
    })
  }

  ngOnInit() {}

  get Titulo(){
    return this.form.get("titulo");
  }

  get Texto(){
    return this.form.get("texto");
  }

  get Skill(){
    return this.form.get("skill");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get Tipo(){
    return this.form.get("tipo");
  }


  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get TextoInvalid(){
    return this.Texto?.touched && !this.Texto?.valid;
  }

  get SkillInvalid(){
    return this.Skill?.touched && !this.Skill?.valid;
  }

  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  get TipoInvalid(){
    return this.Tipo?.touched && !this.Tipo?.valid;
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
