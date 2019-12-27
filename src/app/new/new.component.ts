import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { People } from '../app.component';
import { PeopleService } from '../shared/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form : FormGroup;

  @Output() onAdd: EventEmitter<People> = new EventEmitter<People>()

  name = "";
  surname = "";
  telephone = "";
  disabled = true;
  i = 0;
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private peopleService: PeopleService, private router : Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(1)]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(11)])
    });
  }

  async submit() {
    const formData = {...this.form.value}
    this.form.reset()
    const People : People = {
      name: formData.name,
      surname: formData.surname,
      telephone: formData.telephone,
    }
    this.disabled = false;
    try {
      let res = await this.peopleService.addHuman(People);
      this.router.navigate(['/']);
    } catch(e){
      console.error(e);
    }
  }

}
