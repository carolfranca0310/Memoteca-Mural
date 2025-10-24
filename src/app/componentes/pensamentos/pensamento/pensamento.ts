import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './../pensamento';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class PensamentoComponent implements OnInit {

   @Input() pensamento: Pensamento = {
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }
  constructor() { }

 ngOnInit(): void {

 }

   larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
