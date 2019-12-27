import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from '../shared/people.service';
import { People } from '../app.component';
import { FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form1 : FormGroup;

  @Output() onSave: EventEmitter<People> = new EventEmitter<People>();
  @Input() p : People;

  name = "";
  surname = "";
  telephone = "";
  id = 0;
  disabled = true;
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  res;

  constructor(
    private route: ActivatedRoute,
    private peopleService : PeopleService,
    private router : Router
    ) { }


  async ngOnInit() {
    this.form1 = new FormGroup({
      name: new FormControl(this.name, [Validators.required, Validators.minLength(1)]),
      surname: new FormControl(this.surname, [Validators.required, Validators.minLength(1)]),
      telephone: new FormControl(this.telephone, [Validators.required, Validators.minLength(11)]),
      id: new FormControl(this.id)
    });

    try {
      let id = this.route.snapshot.params.id;
      this.res = await this.peopleService.getPeopleById(id);
    } catch(e){
      console.error(e);
    }
    this.name = this.res.name;
    this.id = this.res.id;
    this.surname = this.res.surname; 
    this.telephone = this.res.telephone;
    this.myModel = this.res.telephone;
    this.form1.patchValue(this.res)
  }

  async savePeople(id) {
    const formData = {...this.form1.value}
      const People : People = {
        name: formData.name,
        surname: formData.surname,
        telephone: formData.telephone,
        id: id,
      }
      try {
        let res = await this.peopleService.editHuman(People);
        // this.onSave.emit(People);
        this.router.navigate(['/'])
      } catch(e){
        console.error(e);
      }
    console.log(this.p);
  }

}
