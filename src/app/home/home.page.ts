import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CepService } from '../services/cep.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public cep;
  public endereco: any = [];


  ngOnInit() {

  }
  constructor(
    public viacep: CepService
  ) {}

  
  getEndereco() {

    this.viacep.buscaCeps(this.cep)
		.subscribe(
     data =>{
		 this.endereco = data;
		 console.log(data);
    }
    );
  }
}
