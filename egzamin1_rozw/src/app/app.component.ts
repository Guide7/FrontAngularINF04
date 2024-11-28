import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'egzamin1';
  name = '';
  numerkursu:number | null = null;
  tab = ['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django'];
  liczba = this.tab.length;

  wyslij(){
    if(this.numerkursu === null || this.numerkursu > this.tab.length){
      console.log("nieprawidlowy numer kursu")
    }else{
      console.log(this.name + " " + this.tab[this.numerkursu - 1]);
    }
  }
}
