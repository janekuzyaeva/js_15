import { Component } from '@angular/core';
import { PeopleService } from './shared/people.service';
import { HttpClient } from '@angular/common/http';

export interface People {
  name: string
  surname: string
  telephone: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
