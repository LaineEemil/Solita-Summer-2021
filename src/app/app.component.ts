import { Component } from '@angular/core';
import names from './files/names.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Solita2021';
  public nameList: {name: string, amount: number}[] = names;

  order_amount(): void {
    names.sort(function(a, b) {
      if (a.amount > b.amount) { return -1; }
      if (a.amount < b.amount) { return 1; }
      return 0;
    });
  }

  order_alpha(): void {
    names.sort(function(a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }

  amount(): void {
    let amount = 0;
    for (let i = 0; i < names.length; i++) {
      amount += names[i].amount;
    }
    alert(amount);
  }

  amount_para(parameter): void {
    for (let i = 0; i < names.length; i++) {
      if (names[i].name.toLowerCase() === parameter.toLowerCase()) {
        alert(names[i].amount);
      }
    }
  }

}



