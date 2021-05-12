import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { DeleteComponent } from './delete/tema/delete/delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
{path:'', redirectTo:'entrar', pathMatch:'full'},

{path:'entrar',component:EntrarComponent},
{path:'cadastrar',component:CadastrarComponent},
{path: 'inicio', component:InicioComponent}, // 'inicio' que vai para a page inicio
{path: 'tema', component:TemaComponent},
{path:'tema-edit/:id',component:TemaEditComponent},
{path:'tema-delete/:id',component:DeleteComponent},
{path:'postagem-edit/:id',component:PostagemEditComponent},
{path:'postagem-delete/:id',component: PostagemDeleteComponent},
{path:'user-edit/:id',component:UserEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
