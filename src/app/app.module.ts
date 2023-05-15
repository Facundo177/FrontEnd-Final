import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { IndexComponent } from './components/index/index.component';
import { ModalLoginComponent } from './components/modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './components/modales/modal-banner/modal-banner.component';
import { ModalLogoutComponent } from './components/modales/modal-logout/modal-logout.component';
import { ModalAcercaComponent } from './components/modales/modal-acerca/modal-acerca.component';
import { ModalEducacionComponent } from './components/modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './components/modales/modal-experiencia/modal-experiencia.component';
import { ModalProyectosComponent } from './components/modales/modal-proyectos/modal-proyectos.component';
import { ModalSkillsComponent } from './components/modales/modal-skills/modal-skills.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditAcercaComponent } from './components/acerca/edit-acerca.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    LogoutComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    Pagina404Component,
    IndexComponent,
    ModalLoginComponent,
    ModalBannerComponent,
    ModalLogoutComponent,
    ModalAcercaComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
    ModalProyectosComponent,
    ModalSkillsComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaComponent,
    EditBannerComponent,
    EditProyectoComponent,
    NewProyectoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
