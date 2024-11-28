import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'egzamin2';
  tytul = '';
  selekt = '';

  wyslij(){
    switch(this.selekt){
      case '1':
        console.log(this.tytul + " Komedia");
        break;
      case '2':
        console.log(this.tytul + " Obyczajowy");
        break;
      case '3':
        console.log(this.tytul + " Sensacyjny");
        break;
      case '4':
        console.log(this.tytul + " Horror");
        break;
    }
  }
}
