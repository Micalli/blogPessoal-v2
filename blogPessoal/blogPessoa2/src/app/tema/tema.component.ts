import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema:Tema=new Tema()
  listaTemas: Tema[]
  
  constructor(
    private router: Router,
    private temaService: TemaService,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
  
  if(environment.token == ''){
     
    this.router.navigate(['/entrar'])

    
  }
  this.findAllTemas()//atualiza a lista de temas em todo refresh

  if(environment.tipo != 'adm'){
    this.alerta.showAlertInfo('Você precisa ser administrador! para acessar sua rota')
    this.router.navigate(['/inicio'])
  }
  }
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas = resp

    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema
    })

  }
}
