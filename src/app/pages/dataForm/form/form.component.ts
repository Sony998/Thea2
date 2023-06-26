import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userData = {
    nombre: '',
    numero: '',
    direccion: '',
    nequi: false,
    contraEntrega: false,
    daviplata: false,
  };

  constructor() { }

  ngOnInit() {
    this.loadUserDataFromLocalStorage();

  }

  saveUser() {
    localStorage.setItem("userData", JSON.stringify(this.userData));
    console.log(this.userData);
  }

  loadUserDataFromLocalStorage() {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }
  selectCheckbox(option: string) {
    if (option === 'nequi') {
      this.userData.nequi = true;
      this.userData.contraEntrega = false;
      this.userData.daviplata = false;
    } else if (option === 'contraEntrega') {
      this.userData.nequi = false;
      this.userData.contraEntrega = true;
      this.userData.daviplata = false;
    } else if (option === 'daviplata') {
      this.userData.nequi = false;
      this.userData.contraEntrega = false;
      this.userData.daviplata = true;
    }else{
      this.userData.nequi = false;
      this.userData.contraEntrega = false;
      this.userData.daviplata = false;
    }
}}
