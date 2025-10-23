import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento";
import { CommonModule,} from '@angular/common';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamentos.html',
  styleUrl: './listar-pensamentos.css'
})
export class ListarPensamentos implements OnInit{

  listaPensamentos: Pensamento[] = [];

  constructor() { }

 ngOnInit(): void {

 }
}
