import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  isLoading: boolean = true; 
  requests = 
  [
    {
      'restaurant': 'Nome restaurante',
      'address': 'Endereço',
      'price': 60,
      'status': 'Entregue',
      'content': ['Pizza 2x', 'Hamburguer 2x'],
      'date': '01/01/24',
    }
  ]

  constructor() {
    setTimeout(() => {}, 1000);
    this.isLoading = false;
  }


  ngOnInit() {
  }

}
