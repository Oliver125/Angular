import { Component, OnInit } from '@angular/core';
import {user}from '../share/User';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  user: user = {
    nombre: "Oliver",
    apellido: "Taimbud",
    ciudad: "Bogota"
  }
  constructor() { }

  ngOnInit() {
  }

}
