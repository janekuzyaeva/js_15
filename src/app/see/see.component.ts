import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { People } from '../app.component';
import { PeopleService } from '../shared/people.service';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {

  p: People[] = [];
  loading = false;

  search = "";
  constructor(private peopleService: PeopleService) {}


  async ngOnInit() {
    this.loading = true;
    try {
      let res = await this.peopleService.getAllPeople();
      this.p = res;
    } catch(e){
      console.error(e);
    }
    this.loading = false;
  }

  async deletePeople(people: People) {
    try {
      let res = await this.peopleService.deleteHuman(people);
      console.log(this.p);
      let index = this.p.findIndex((el)=>el.id==people.id)
      this.p.splice(index, 1);
    } catch(e){
      console.error(e);
    }
  }

}
